package com.techelevator.model;

public class Beer {
    private Long beerId;
    private String beerName;
    private double beerABV;
    private String beerType;
    private String beerDescription;
    private String beerImage;
    private Long brewery;

    public Beer(String beerName, double beerABV, String beerType, String beerDescription, String beerImage) {
        this.beerName = beerName;
        this.beerABV = beerABV;
        this.beerType = beerType;
        this.beerDescription = beerDescription;
        this.beerImage = beerImage;
    }
    public Beer(){

    }

    public Long getBrewery() {
        return brewery;
    }

    public void setBrewery(Long brewery) {
        this.brewery = brewery;
    }

    public Long getBeerId() {
        return beerId;
    }

    public void setBeerId(Long beerId) {
        this.beerId = beerId;
    }

    public String getBeerName() {
        return beerName;
    }

    public void setBeerName(String beerName) {
        this.beerName = beerName;
    }

    public double getBeerABV() {
        return beerABV;
    }

    public void setBeerABV(double beerABV) {
        this.beerABV = beerABV;
    }

    public String getBeerType() {
        return beerType;
    }

    public void setBeerType(String beerType) {
        this.beerType = beerType;
    }

    public String getBeerDescription() {
        return beerDescription;
    }

    public void setBeerDescription(String beerDescription) {
        this.beerDescription = beerDescription;
    }

    public String getBeerImage() {
        return beerImage;
    }

    public void setBeerImage(String beerImage) {
        this.beerImage = beerImage;
    }
}
