package com.techelevator.model;
import java.util.List;
import java.util.Map;

public class Brewery {
    private long breweryId;
    private String breweryName;
    private String breweryAddress;
    private List<Beer> beerList;
    private Map<Integer, String> breweryHours;

    public Brewery(String breweryName, String breweryAddress, List<Beer> beerList, Map<Integer, String> breweryHours) {
        this.breweryName = breweryName;
        this.breweryAddress = breweryAddress;
        this.beerList = beerList;
        this.breweryHours = breweryHours;
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

    public String getBreweryAddress() {
        return breweryAddress;
    }

    public void setBreweryAddress(String breweryAddress) {
        this.breweryAddress = breweryAddress;
    }

    public List<Beer> getBeerList() {
        return beerList;
    }

    public void setBeerList(List<Beer> beerList) {
        this.beerList = beerList;
    }

    public Map<Integer, String> getBreweryHours() {
        return breweryHours;
    }

    public void setBreweryHours(Map<Integer, String> breweryHours) {
        this.breweryHours = breweryHours;
    }
}

