// LoginServlet.java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.sql.*;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        try (Connection con = DatabaseConnection.initializeDatabase();
             PreparedStatement ps = con.prepareStatement("SELECT * FROM students WHERE username=? AND password=?")) {
            ps.setString(1, username);
            ps.setString(2, password);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                request.getSession().setAttribute("studentId", rs.getInt("id"));
                response.sendRedirect("ExamServlet");
            } else {
                response.getWriter().println("Invalid credentials");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
