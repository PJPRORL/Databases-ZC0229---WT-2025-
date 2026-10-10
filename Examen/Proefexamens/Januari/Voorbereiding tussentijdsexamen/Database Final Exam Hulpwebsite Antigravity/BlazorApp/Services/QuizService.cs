using System.Net.Http.Json;
using System.Text.Json.Serialization;

namespace DatabaseStudyGuide.Services
{
    public class QuizDetail
    {
        public int Id { get; set; }
        [JsonPropertyName("chapterId")]
        public string ChapterId { get; set; } = "";
        public string Category { get; set; } = "";
        public string Topic { get; set; } = "";
        [JsonPropertyName("question")]
        public string QuestionText { get; set; } = "";
        public List<string> Options { get; set; } = new();
        public int Correct { get; set; }
        public string Explanation { get; set; } = "";
    }

    public class QuizData
    {
        public List<QuizDetail> Questions { get; set; } = new();
    }

    public class QuizService
    {
        private readonly HttpClient _http;
        private List<QuizDetail> _allQuestions = new();

        public QuizService(HttpClient http)
        {
            _http = http;
        }

        public async Task LoadQuestionsAsync()
        {
            if (_allQuestions.Count > 0) return;
            try
            {
                var data = await _http.GetFromJsonAsync<QuizData>("questions.json");
                if (data?.Questions != null)
                {
                    _allQuestions = data.Questions;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error loading questions: {ex.Message}");
            }
        }

        public List<QuizDetail> GetRandomQuestions(int count)
        {
            if (_allQuestions.Count == 0) return new List<QuizDetail>();
            
            var rnd = new Random();
            return _allQuestions.OrderBy(x => rnd.Next()).Take(count).ToList();
        }

        public List<QuizDetail> GetAllQuestions() => _allQuestions;
    }
}
