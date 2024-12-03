// DatabaseConnection.java
import java.sql.*;

public class DatabaseConnection {
    public static Connection initializeDatabase() throws SQLException, ClassNotFoundException {
        String url = "jdbc:mysql://localhost:3306/ExamSystem";
        String user = "root";
        String password = "password";

        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(url, user, password);
    }
}
