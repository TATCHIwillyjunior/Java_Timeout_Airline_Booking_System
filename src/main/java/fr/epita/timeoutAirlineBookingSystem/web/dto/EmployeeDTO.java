package fr.epita.timeoutAirlineBookingSystem.web.dto;

public class EmployeeDTO {
    private Long id;
    private Long userId;
    private String employeeNo;
    private String profession;
    private String title;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getEmployeeNo() { return employeeNo; }
    public void setEmployeeNo(String employeeNo) { this.employeeNo = employeeNo; }

    public String getProfession() { return profession; }
    public void setProfession(String profession) { this.profession = profession; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
}
