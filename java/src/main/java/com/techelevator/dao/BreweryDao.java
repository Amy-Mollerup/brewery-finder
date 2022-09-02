package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.Brewery;

import java.util.List;
import java.util.Map;

public interface BreweryDao {

    List<Brewery> findAll();

    Brewery getBreweryById(int breweryId);

    Brewery getBreweryByName(String breweryName) throws Exception;

    boolean create(String name, String Address, List<Beer> beers, Map<Integer, String> breweryHours);

    void updateHours(Map<Integer, String> newHours);

}
