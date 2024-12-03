// ExamServlet.java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ExamServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Question> questions = QuestionDAO.getQuestions();
        request.setAttribute("questions", questions);
        request.getRequestDispatcher("exam.jsp").forward(request, response);
    }
}
