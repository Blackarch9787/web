// StudentDAO.java
import java.sql.*;

public class StudentDAO {
    public static void updateScore(int studentId, int score) {
        try (Connection con = DatabaseConnection.initializeDatabase();
             PreparedStatement ps = con.prepareStatement("UPDATE students SET score=? WHERE id=?")) {
            ps.setInt(1, score);
            ps.setInt(2, studentId);
            ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
