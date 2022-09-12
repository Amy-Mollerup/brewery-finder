package com.techelevator.model;
import java.util.List;
import java.util.Map;

public class Brewery {
    private long breweryId;
    private String breweryName;
    private String breweryStreet;
    private String breweryCity;
    private String breweryState;
    private String breweryPostCode;
    private String phoneNumber;
    private String website;
    private List<Beer> beerList;
    private Map<Integer, String[]> breweryHours;
    private Long brewer;
    private String description;
    private String image;

    public Brewery() {

    }

    public Brewery(long breweryId, String breweryName, String breweryStreet, String breweryCity, String breweryState, String breweryPostCode, String phoneNumber, String website, List<Beer> beerList, Map<Integer, String[]> breweryHours, Long brewer, String description, String image) {
        this.breweryId = breweryId;
        this.breweryName = breweryName;
        this.breweryStreet = breweryStreet;
        this.breweryCity = breweryCity;
        this.breweryState = breweryState;
        this.breweryPostCode = breweryPostCode;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.beerList = beerList;
        this.breweryHours = breweryHours;
        this.brewer = brewer;
        this.description = description;
        this.image = image;
    }

    public long getBreweryId() {
        return breweryId;
    }

    public void setBreweryId(long breweryId) {
        this.breweryId = breweryId;
    }

    public Long getBrewer() {
        return brewer;
    }

    public void setBrewer(Long brewer) {
        this.brewer = brewer;
    }

    public String getWebsite() {return website;}

    public void setWebsite(String website) {this.website = website;}

    public String getPhoneNumber() {return phoneNumber;}

    public void setPhoneNumber(String phoneNumber) {this.phoneNumber = phoneNumber;}

    public String getBreweryName() {
        return breweryName;
    }

    public void setBreweryName(String breweryName) {
        this.breweryName = breweryName;
    }

    public String getBreweryStreet() {
        return breweryStreet;
    }

    public void setBreweryStreet(String breweryStreet) {
        this.breweryStreet = breweryStreet;
    }

    public String getBreweryCity() {
        return breweryCity;
    }

    public void setBreweryCity(String breweryCity) {
        this.breweryCity = breweryCity;
    }

    public String getBreweryState() {
        return breweryState;
    }

    public void setBreweryState(String breweryState) {
        this.breweryState = breweryState;
    }

    public String getBreweryPostCode() {
        return breweryPostCode;
    }

    public void setBreweryPostCode(String breweryPostCode) {
        this.breweryPostCode = breweryPostCode;
    }

    public List<Beer> getBeerList() {
        return beerList;
    }

    public void setBeerList(List<Beer> beerList) {
        this.beerList = beerList;
    }

    public Map<Integer, String[]> getBreweryHours() {
        return breweryHours;
    }

    public void setBreweryHours(Map<Integer, String[]> breweryHours) {
        this.breweryHours = breweryHours;
    }

    public String getDescription() {return description;}

    public void setDescription(String description) {this.description = description;}

    public String getImage() {return image;}

    public void setImage(String image) {this.image = image;}

}
