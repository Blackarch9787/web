// SubmitServlet.java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class SubmitServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int score = 0;
        List<Question> questions = QuestionDAO.getQuestions();

        for (Question q : questions) {
            String selectedOption = request.getParameter("q" + q.getId());
            if (selectedOption != null && Integer.parseInt(selectedOption) == q.getAnswer()) {
                score++;
            }
        }

        int studentId = (int) request.getSession().getAttribute("studentId");
        StudentDAO.updateScore(studentId, score);

        request.setAttribute("score", score);
        request.setAttribute("totalQuestions", questions.size());
        request.getRequestDispatcher("result.jsp").forward(request, response);
    }
}
