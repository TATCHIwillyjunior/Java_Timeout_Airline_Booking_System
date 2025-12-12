package fr.epita.timeoutAirlineBookingSystem;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class TestJDBC_connection {

        public static void main(String[] args) {
            String url = "jdbc:postgresql://localhost:5432/timeout_airline_booking";
            String user = "postgres";
            String password = "user";

            try (Connection conn = DriverManager.getConnection(url, user, password);
                 Statement stmt = conn.createStatement();
                 ResultSet rs = stmt.executeQuery("SELECT version()")) {

                if (rs.next()) {
                    System.out.println("PostgreSQL version: " + rs.getString(1));
                    System.out.println("Yes I am connected");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }


}
