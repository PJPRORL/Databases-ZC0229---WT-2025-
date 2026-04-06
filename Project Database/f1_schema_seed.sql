
-- F1 Database (PostgreSQL) — Schema, Seed Data (sample), Views & Example Queries
-- Author: ChatGPT (GPT-5 Thinking)
-- Notes:
-- - This is a compact, learning-friendly model (Level A from our plan).
-- - Sample data is illustrative (not official FIA data).
-- - Tested syntax targets PostgreSQL 13+.

-- ============================================================================
-- 0) SAFETY: Drop existing objects (order matters)
-- ============================================================================
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='results') THEN
    DROP TABLE results;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='contracts') THEN
    DROP TABLE contracts;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='grands_prix') THEN
    DROP TABLE grands_prix;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='drivers') THEN
    DROP TABLE drivers;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='teams') THEN
    DROP TABLE teams;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='circuits') THEN
    DROP TABLE circuits;
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='seasons') THEN
    DROP TABLE seasons;
  END IF;
EXCEPTION WHEN undefined_table THEN
  -- ignore
  NULL;
END$$;

-- ============================================================================
-- 1) SCHEMA
-- ============================================================================
CREATE TABLE seasons (
  id   SERIAL PRIMARY KEY,
  year INT NOT NULL UNIQUE CHECK (year BETWEEN 1950 AND 2100)
);

CREATE TABLE circuits (
  id      SERIAL PRIMARY KEY,
  name    VARCHAR(100) NOT NULL,
  city    VARCHAR(100),
  country VARCHAR(100),
  UNIQUE (name, country)
);

CREATE TABLE grands_prix (
  id         SERIAL PRIMARY KEY,
  season_id  INT NOT NULL REFERENCES seasons(id) ON DELETE CASCADE,
  circuit_id INT NOT NULL REFERENCES circuits(id) ON DELETE RESTRICT,
  name       VARCHAR(120) NOT NULL,
  round      INT NOT NULL CHECK (round > 0),
  race_date  DATE NOT NULL,
  UNIQUE (season_id, round),
  UNIQUE (season_id, name)
);

CREATE TABLE teams (
  id             SERIAL PRIMARY KEY,
  name           VARCHAR(120) NOT NULL UNIQUE,
  base_country   VARCHAR(100),
  engine_supplier VARCHAR(100)
);

CREATE TABLE drivers (
  id         SERIAL PRIMARY KEY,
  code       VARCHAR(3) UNIQUE,              -- e.g., VER, HAM
  first_name VARCHAR(60) NOT NULL,
  last_name  VARCHAR(60) NOT NULL,
  country    VARCHAR(100),
  dob        DATE
);

CREATE TABLE contracts (
  id         SERIAL PRIMARY KEY,
  season_id  INT NOT NULL REFERENCES seasons(id) ON DELETE CASCADE,
  team_id    INT NOT NULL REFERENCES teams(id)   ON DELETE RESTRICT,
  driver_id  INT NOT NULL REFERENCES drivers(id) ON DELETE RESTRICT,
  car_number INT,
  UNIQUE (season_id, driver_id),
  UNIQUE (season_id, team_id, car_number)
);

CREATE TABLE results (
  id              SERIAL PRIMARY KEY,
  gp_id           INT NOT NULL REFERENCES grands_prix(id) ON DELETE CASCADE,
  contract_id     INT NOT NULL REFERENCES contracts(id)   ON DELETE CASCADE,
  grid_position   INT CHECK (grid_position IS NULL OR grid_position >= 1),
  finish_position INT CHECK (finish_position IS NULL OR finish_position >= 1),
  status          VARCHAR(30) NOT NULL DEFAULT 'Finished'
                   CHECK (status IN ('Finished','Retired','DNF','DSQ','DNS','DNQ')),
  points          NUMERIC(4,1) NOT NULL DEFAULT 0 CHECK (points >= 0),
  laps            INT,
  time_ms         BIGINT,
  UNIQUE (gp_id, contract_id)
);

-- Helpful indexes
CREATE INDEX idx_gp_season ON grands_prix(season_id);
CREATE INDEX idx_res_gp    ON results(gp_id);
CREATE INDEX idx_res_ct    ON results(contract_id);
CREATE INDEX idx_ct_season ON contracts(season_id);
CREATE INDEX idx_ct_team   ON contracts(team_id);
CREATE INDEX idx_ct_driver ON contracts(driver_id);

-- ============================================================================
-- 2) SEED DATA (illustrative, 2024 season + 4 GPs)
-- ============================================================================

-- Seasons
INSERT INTO seasons (year) VALUES (2024);

-- Circuits
INSERT INTO circuits (name, city, country) VALUES
  ('Bahrain International Circuit', 'Sakhir', 'Bahrain'),
  ('Jeddah Corniche Circuit', 'Jeddah', 'Saudi Arabia'),
  ('Albert Park Circuit', 'Melbourne', 'Australia'),
  ('Autodromo Enzo e Dino Ferrari (Imola)', 'Imola', 'Italy');

-- Teams (2024 grid)
INSERT INTO teams (name, base_country, engine_supplier) VALUES
  ('Red Bull Racing', 'Austria', 'Honda/RBPT'),
  ('Scuderia Ferrari', 'Italy', 'Ferrari'),
  ('Mercedes-AMG', 'Germany', 'Mercedes'),
  ('McLaren', 'United Kingdom', 'Mercedes'),
  ('Aston Martin', 'United Kingdom', 'Mercedes'),
  ('Alpine', 'France', 'Renault'),
  ('Williams', 'United Kingdom', 'Mercedes'),
  ('RB', 'Italy', 'Honda/RBPT'),
  ('Sauber', 'Switzerland', 'Ferrari'),
  ('Haas', 'United States', 'Ferrari');

-- Drivers (sample set)
INSERT INTO drivers (code, first_name, last_name, country, dob) VALUES
  ('VER','Max','Verstappen','Netherlands','1997-09-30'),
  ('PER','Sergio','Perez','Mexico','1990-01-26'),
  ('LEC','Charles','Leclerc','Monaco','1997-10-16'),
  ('SAI','Carlos','Sainz','Spain','1994-09-01'),
  ('HAM','Lewis','Hamilton','United Kingdom','1985-01-07'),
  ('RUS','George','Russell','United Kingdom','1998-02-15'),
  ('NOR','Lando','Norris','United Kingdom','1999-11-13'),
  ('PIA','Oscar','Piastri','Australia','2001-04-06'),
  ('ALO','Fernando','Alonso','Spain','1981-07-29'),
  ('STR','Lance','Stroll','Canada','1998-10-29'),
  ('OCO','Esteban','Ocon','France','1996-09-17'),
  ('GAS','Pierre','Gasly','France','1996-02-07'),
  ('ALB','Alex','Albon','Thailand','1996-03-23'),
  ('SAR','Logan','Sargeant','United States','2000-12-31'),
  ('TSU','Yuki','Tsunoda','Japan','2000-05-11'),
  ('RIC','Daniel','Ricciardo','Australia','1989-07-01'),
  ('ZHO','Zhou','Guanyu','China','1999-05-30'),
  ('BOT','Valtteri','Bottas','Finland','1989-08-28'),
  ('HUL','Nico','Hulkenberg','Germany','1987-08-19'),
  ('MAG','Kevin','Magnussen','Denmark','1992-10-05');

-- Grand Prix (2024 — 4 rounds, example dates)
INSERT INTO grands_prix (season_id, circuit_id, name, round, race_date)
SELECT s.id, c.id, 'Bahrain Grand Prix', 1, DATE '2024-03-02'
FROM seasons s, circuits c
WHERE s.year=2024 AND c.name='Bahrain International Circuit';

INSERT INTO grands_prix (season_id, circuit_id, name, round, race_date)
SELECT s.id, c.id, 'Saudi Arabian Grand Prix', 2, DATE '2024-03-09'
FROM seasons s, circuits c
WHERE s.year=2024 AND c.name='Jeddah Corniche Circuit';

INSERT INTO grands_prix (season_id, circuit_id, name, round, race_date)
SELECT s.id, c.id, 'Australian Grand Prix', 3, DATE '2024-03-24'
FROM seasons s, circuits c
WHERE s.year=2024 AND c.name='Albert Park Circuit';

INSERT INTO grands_prix (season_id, circuit_id, name, round, race_date)
SELECT s.id, c.id, 'Emilia Romagna Grand Prix', 4, DATE '2024-05-19'
FROM seasons s, circuits c
WHERE s.year=2024 AND c.name='Autodromo Enzo e Dino Ferrari (Imola)';

-- Contracts (which driver drove for which team in 2024)
-- Using codes & team names for readability
INSERT INTO contracts (season_id, team_id, driver_id, car_number)
SELECT s.id, t.id, d.id, num
FROM (VALUES
  ('VER','Red Bull Racing', 1),
  ('PER','Red Bull Racing', 11),
  ('LEC','Scuderia Ferrari', 16),
  ('SAI','Scuderia Ferrari', 55),
  ('HAM','Mercedes-AMG', 44),
  ('RUS','Mercedes-AMG', 63),
  ('NOR','McLaren', 4),
  ('PIA','McLaren', 81),
  ('ALO','Aston Martin', 14),
  ('STR','Aston Martin', 18),
  ('OCO','Alpine', 31),
  ('GAS','Alpine', 10),
  ('ALB','Williams', 23),
  ('SAR','Williams', 2),
  ('TSU','RB', 22),
  ('RIC','RB', 3),
  ('BOT','Sauber', 77),
  ('ZHO','Sauber', 24),
  ('HUL','Haas', 27),
  ('MAG','Haas', 20)
) AS x(code, team_name, num)
JOIN drivers d ON d.code=x.code
JOIN teams t   ON t.name=x.team_name
JOIN seasons s ON s.year=2024;

-- ============================================================================
-- 3) RESULTS (sample for first 4 rounds, illustrative only)
--    Helper: a small function-like CTE per GP for readability
-- ============================================================================

-- Bahrain
WITH gp AS (
  SELECT g.id AS gp_id, s.id AS season_id
  FROM grands_prix g
  JOIN seasons s ON s.id=g.season_id
  WHERE s.year=2024 AND g.name='Bahrain Grand Prix'
)
INSERT INTO results (gp_id, contract_id, grid_position, finish_position, status, points, laps, time_ms)
SELECT gp.gp_id, c.id, x.grid, x.finish, x.status, x.pts, 57, NULL
FROM gp
JOIN seasons s ON s.id=gp.season_id
JOIN contracts c ON c.season_id=s.id
JOIN drivers d   ON d.id=c.driver_id
JOIN (
  VALUES
    ('VER',1,1,'Finished',25.0),
    ('PER',2,2,'Finished',18.0),
    ('SAI',4,3,'Finished',15.0),
    ('LEC',3,4,'Finished',12.0),
    ('RUS',3,5,'Finished',10.0), -- grid intentionally illustrative
    ('NOR',7,6,'Finished',8.0),
    ('HAM',8,7,'Finished',6.0),
    ('PIA',6,8,'Finished',4.0),
    ('ALO',9,9,'Finished',2.0),
    ('STR',10,10,'Finished',1.0)
) AS x(code, grid, finish, status, pts)
ON d.code = x.code;

-- Saudi Arabia
WITH gp AS (
  SELECT g.id AS gp_id, s.id AS season_id
  FROM grands_prix g
  JOIN seasons s ON s.id=g.season_id
  WHERE s.year=2024 AND g.name='Saudi Arabian Grand Prix'
)
INSERT INTO results (gp_id, contract_id, grid_position, finish_position, status, points, laps, time_ms)
SELECT gp.gp_id, c.id, x.grid, x.finish, x.status, x.pts, 50, NULL
FROM gp
JOIN seasons s ON s.id=gp.season_id
JOIN contracts c ON c.season_id=s.id
JOIN drivers d   ON d.id=c.driver_id
JOIN (
  VALUES
    ('VER',1,1,'Finished',25.0),
    ('PER',2,2,'Finished',18.0),
    ('LEC',4,3,'Finished',15.0),
    ('PIA',5,4,'Finished',12.0),
    ('ALO',6,5,'Finished',10.0),
    ('NOR',7,6,'Finished',8.0),
    ('HAM',8,7,'Finished',6.0),
    ('RUS',3,8,'Finished',4.0),
    ('SAI',9,9,'Finished',2.0),
    ('STR',10,10,'Finished',1.0)
) AS x(code, grid, finish, status, pts)
ON d.code = x.code;

-- Australia
WITH gp AS (
  SELECT g.id AS gp_id, s.id AS season_id
  FROM grands_prix g
  JOIN seasons s ON s.id=g.season_id
  WHERE s.year=2024 AND g.name='Australian Grand Prix'
)
INSERT INTO results (gp_id, contract_id, grid_position, finish_position, status, points, laps, time_ms)
SELECT gp.gp_id, c.id, x.grid, x.finish, x.status, x.pts, 58, NULL
FROM gp
JOIN seasons s ON s.id=gp.season_id
JOIN contracts c ON c.season_id=s.id
JOIN drivers d   ON d.id=c.driver_id
JOIN (
  VALUES
    ('SAI',2,1,'Finished',25.0),
    ('LEC',3,2,'Finished',18.0),
    ('NOR',4,3,'Finished',15.0),
    ('PIA',5,4,'Finished',12.0),
    ('PER',2,5,'Finished',10.0),
    ('ALO',6,6,'Finished',8.0),
    ('RUS',7,7,'Finished',6.0),
    ('HAM',8,8,'Finished',4.0),
    ('HUL',10,9,'Finished',2.0),
    ('TSU',11,10,'Finished',1.0)
) AS x(code, grid, finish, status, pts)
ON d.code = x.code;

-- Emilia Romagna (Imola)
WITH gp AS (
  SELECT g.id AS gp_id, s.id AS season_id
  FROM grands_prix g
  JOIN seasons s ON s.id=g.season_id
  WHERE s.year=2024 AND g.name='Emilia Romagna Grand Prix'
)
INSERT INTO results (gp_id, contract_id, grid_position, finish_position, status, points, laps, time_ms)
SELECT gp.gp_id, c.id, x.grid, x.finish, x.status, x.pts, 63, NULL
FROM gp
JOIN seasons s ON s.id=gp.season_id
JOIN contracts c ON c.season_id=s.id
JOIN drivers d   ON d.id=c.driver_id
JOIN (
  VALUES
    ('VER',1,1,'Finished',25.0),
    ('NOR',3,2,'Finished',18.0),
    ('LEC',2,3,'Finished',15.0),
    ('PIA',4,4,'Finished',12.0),
    ('SAI',5,5,'Finished',10.0),
    ('PER',6,6,'Finished',8.0),
    ('HAM',7,7,'Finished',6.0),
    ('RUS',8,8,'Finished',4.0),
    ('ALO',9,9,'Finished',2.0),
    ('RIC',10,10,'Finished',1.0)
) AS x(code, grid, finish, status, pts)
ON d.code = x.code;

-- ============================================================================
-- 4) VIEWS (Driver & Constructor standings)
-- ============================================================================

CREATE OR REPLACE VIEW driver_standings AS
SELECT
  s.year AS season_year,
  d.code,
  d.first_name || ' ' || d.last_name AS driver_name,
  t.name AS team_name,
  SUM(r.points) AS points
FROM results r
JOIN contracts c  ON r.contract_id = c.id
JOIN drivers d    ON c.driver_id   = d.id
JOIN teams t      ON c.team_id     = t.id
JOIN grands_prix g ON r.gp_id      = g.id
JOIN seasons s    ON g.season_id   = s.id
GROUP BY s.year, d.code, driver_name, t.name;

CREATE OR REPLACE VIEW constructor_standings AS
SELECT
  s.year AS season_year,
  t.name AS team_name,
  SUM(r.points) AS points
FROM results r
JOIN contracts c  ON r.contract_id = c.id
JOIN teams t      ON c.team_id     = t.id
JOIN grands_prix g ON r.gp_id      = g.id
JOIN seasons s    ON g.season_id   = s.id
GROUP BY s.year, t.name;

CREATE OR REPLACE VIEW race_winners AS
SELECT
  s.year AS season_year,
  g.round,
  g.name AS grand_prix,
  d.code AS winner_code,
  d.first_name || ' ' || d.last_name AS winner_name,
  t.name AS team_name
FROM results r
JOIN contracts c ON r.contract_id=c.id
JOIN drivers d   ON c.driver_id=d.id
JOIN teams t     ON c.team_id=t.id
JOIN grands_prix g ON r.gp_id=g.id
JOIN seasons s     ON s.id=g.season_id
WHERE r.finish_position = 1;

-- ============================================================================
-- 5) EXAMPLE QUERIES (copy-paste to test)
-- ============================================================================

-- A) Top 5 drivers 2024
-- SELECT * FROM driver_standings WHERE season_year=2024 ORDER BY points DESC LIMIT 5;

-- B) Constructor standings 2024
-- SELECT * FROM constructor_standings WHERE season_year=2024 ORDER BY points DESC;

-- C) Winners per round 2024
-- SELECT * FROM race_winners WHERE season_year=2024 ORDER BY round;

-- D) Points per GP for Lando Norris (code NOR) in 2024
-- SELECT g.round, g.name, r.points
-- FROM results r
-- JOIN contracts c ON r.contract_id=c.id
-- JOIN drivers d ON c.driver_id=d.id
-- JOIN grands_prix g ON r.gp_id=g.id
-- JOIN seasons s ON g.season_id=s.id
-- WHERE s.year=2024 AND d.code='NOR'
-- ORDER BY g.round;

-- E) Validate uniqueness: one result per driver per GP
-- SELECT g.name, d.code, COUNT(*) c
-- FROM results r
-- JOIN contracts c2 ON r.contract_id=c2.id
-- JOIN drivers d ON c2.driver_id=d.id
-- JOIN grands_prix g ON r.gp_id=g.id
-- GROUP BY g.name, d.code
-- HAVING COUNT(*)>1;

-- ============================================================================
-- 6) TIPS
-- - To add Qualifying, Penalties, PitStops, Sprint: create new tables with FK to gp_id/contract_id.
-- - To support mid-season driver swaps, add contract start/end dates and relax UNIQUE(season_id, driver_id).
-- ============================================================================
