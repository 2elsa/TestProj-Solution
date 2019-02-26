namespace CodingTest.Models
{
    public class GradeLetterAndCount
    {
        public GradeLetterAndCount()
        {
        }
        public GradeLetterAndCount(string letter, int count)
        {
            GradeLetter = letter;
            TotalStudents = count;
        }
        public string GradeLetter { get; set; }
        public int TotalStudents { get; set; }
    }
}
