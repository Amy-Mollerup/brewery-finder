package com.techelevator.dao;

import com.techelevator.model.Beer;
import java.util.List;

public interface BeerDao {

    List<Beer> listBeerByBrewery(Long BreweryId);

    Beer getBeerByName(String beerName);

    boolean createBeerWithBrewery(String name, double abv, String type, String description, String image, Long breweryId);

    boolean createBeerWithoutBrewery(String name, double abv, String type, String description, String image);

    void deleteBeer(Long beerId);

}
