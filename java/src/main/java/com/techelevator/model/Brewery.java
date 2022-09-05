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
    private List<Beer> beerList;
    private Map<Integer, String[]> breweryHours;

    public Brewery(String breweryName, String breweryStreet, String breweryCity, String breweryState, String breweryPostCode, List<Beer> beerList, Map<Integer, String[]> breweryHours) {
        this.breweryName = breweryName;
        this.breweryStreet = breweryStreet;
        this.breweryCity = breweryCity;
        this.breweryState = breweryState;
        this.breweryPostCode = breweryPostCode;
        this.beerList = beerList;
        this.breweryHours = breweryHours;
    }

    public Brewery() {

    }

    public long getBreweryId() {
        return breweryId;
    }

    public void setBreweryId(long breweryId) {
        this.breweryId = breweryId;
    }

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
}

