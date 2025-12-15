package fr.epita.timeoutAirlineBookingSystem.web.dto;

public class AirportDTO {
    private Long airportId;
    private String name;
    private String country;
    private String city;
    private String code;

    public AirportDTO() {}

    public AirportDTO(Long airportId, String name, String country, String city, String code) {
        this.airportId = airportId;
        this.name = name;
        this.country = country;
        this.city = city;
        this.code = code;
    }

    public Long getAirportId() { return airportId; }
    public void setAirportId(Long airportId) { this.airportId = airportId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
}
