// QuestionDAO.java
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class QuestionDAO {
    public static List<Question> getQuestions() {
        List<Question> questions = new ArrayList<>();

        try (Connection con = DatabaseConnection.initializeDatabase();
             Statement stmt = con.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM exams")) {

            while (rs.next()) {
                questions.add(new Question(rs.getInt("id"), rs.getString("question"), rs.getString("option1"),
                    rs.getString("option2"), rs.getString("option3"), rs.getString("option4"), rs.getInt("answer")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return questions;
    }
}
