package fr.epita.timeoutAirlineBookingSystem.web.dto;

public class ClientDTO {
    private Long id;
    private Long userId;
    private String passportNo;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getPassportNo() { return passportNo; }
    public void setPassportNo(String passportNo) { this.passportNo = passportNo; }
}
