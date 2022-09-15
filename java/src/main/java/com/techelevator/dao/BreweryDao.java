package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.Brewery;
import com.techelevator.model.User;

import java.util.List;
import java.util.Map;

public interface BreweryDao {

    List<Brewery> findAll();

    Brewery getBreweryById(long breweryId);

    List<Brewery> getBreweryByBrewer(long brewerId);

    Brewery getBreweryByName(String breweryName) throws Exception;

    boolean create(Brewery brewery);

    Map<Integer, String[]> getHours(long breweryId);

    boolean createHours(Long breweryId, Map<Integer, String[]> newHours);

    boolean updateHours(Long breweryId, Map<Integer, String[]> newHours);

    boolean updateBrewery(Brewery brewery);



}

