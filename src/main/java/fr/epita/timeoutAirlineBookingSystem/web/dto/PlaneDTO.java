package fr.epita.timeoutAirlineBookingSystem.web.dto;

public class PlaneDTO {
    private Long planeId;
    private String brand;
    private String model;
    private int manufacturingYear;

    public PlaneDTO() {}

    public PlaneDTO(Long planeId, String brand, String model, int manufacturingYear) {
        this.planeId = planeId;
        this.brand = brand;
        this.model = model;
        this.manufacturingYear = manufacturingYear;
    }

    public Long getPlaneId() { return planeId; }
    public void setPlaneId(Long planeId) { this.planeId = planeId; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public int getManufacturingYear() { return manufacturingYear; }
    public void setManufacturingYear(int manufacturingYear) { this.manufacturingYear = manufacturingYear; }
}
