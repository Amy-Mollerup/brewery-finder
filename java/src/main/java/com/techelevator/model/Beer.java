package com.techelevator.model;

import java.util.List;

public class Beer {
    private Long beerId;
    private String beerName;
    private double beerABV;
    private String beerType;
    private String beerDescription;
    private String beerImage;
    private Long brewery;
    private List<Review> reviews;

    public Beer(String beerName, double beerABV, String beerType, String beerDescription, String beerImage) {
        this.beerName = beerName;
        this.beerABV = beerABV;
        this.beerType = beerType;
        this.beerDescription = beerDescription;
        this.beerImage = beerImage;
    }
    public Beer(){

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

    public Long getBrewery() {
        return brewery;
    }

    public void setBrewery(Long brewery) {
        this.brewery = brewery;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
    public Long getBeerId() {
        return beerId;
    }
}
