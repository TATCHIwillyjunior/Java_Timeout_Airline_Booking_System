package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "planes")
public class Plane {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Plane_Id")  // maps to SQL column User_Id
    private Long planeId;

    @Column(name = "Brand", nullable = false)
    private String brand;

    @Column(name = "Model", nullable = false)
    private String model;

    @Column(name = "ManufacturingYear", nullable = false)
    private int manufacturingYear;

    // JPA requires a no-arg constructor
    public Plane() {}

    // All-args constructor
    public Plane(Long planeId, String brand, String model, int manufacturingYear) {
        this.planeId = planeId;
        this.brand = brand;
        this.model = model;
        this.manufacturingYear = manufacturingYear;
    }

    // Getters and setters
    public Long getPlaneId() { return planeId; }
    public void setPlaneId(Long planeId) { this.planeId = planeId; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }

    public int getManufacturingYear() { return manufacturingYear; }
    public void setManufacturingYear(int manufacturingYear) { this.manufacturingYear = manufacturingYear; }
}
