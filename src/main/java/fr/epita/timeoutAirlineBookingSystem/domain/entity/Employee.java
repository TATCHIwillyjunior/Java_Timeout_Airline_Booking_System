package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Employee_Id")
    private Long employeeId;

    @OneToOne(optional = false, fetch = FetchType.EAGER)
    @Fetch(FetchMode.JOIN)
    @JoinColumn(name = "User_Id", unique = true, nullable = false,
            foreignKey = @ForeignKey(name = "fk_employee_user"))
    private User user;

    @Column(name = "EmployeeNo", unique = true, nullable = false)
    private String employeeNo;   // business identifier

    @Column(name = "Profession", nullable = false)
    private String profession;

    @Column(name = "Title")
    private String title;

    // JPA requires a no-arg constructor
    public Employee() {}

    // All-args constructor
    public Employee(Long employeeId, User user, String employeeNo,
                    String profession, String title) {
        this.employeeId = employeeId;
        this.user = user;
        this.employeeNo = employeeNo;
        this.profession = profession;
        this.title = title;
    }

    // Getters and setters
    public Long getEmployeeId() { return employeeId; }
    public void setEmployeeId(Long employeeId) { this.employeeId = employeeId; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public String getEmployeeNo() { return employeeNo; }
    public void setEmployeeNo(String employeeNo) { this.employeeNo = employeeNo; }

    public String getProfession() { return profession; }
    public void setProfession(String profession) { this.profession = profession; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
}
