package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.Brewery;

import java.util.List;
import java.util.Map;

public interface BreweryDao {

    List<Brewery> findAll();

    Brewery getBreweryById(long breweryId);

    Brewery getBreweryByName(String breweryName) throws Exception;

    boolean create(String name, String street, String city, String state, String postCode, Map<Integer, String[]> breweryHours);

    Map<Integer, String[]> getHours(long breweryId);

    void createHours(Long breweryId, Map<Integer, String[]> newHours);

    void updateHours(Long breweryId, Map<Integer, String[]> newHours);
}
