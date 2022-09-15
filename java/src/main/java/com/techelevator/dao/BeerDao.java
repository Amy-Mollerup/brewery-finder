package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.Review;

import java.util.List;

public interface BeerDao {

    List<Beer> getAllBeers();

    List<Beer> listBeerByBrewery(Long BreweryId);

    Beer getBeerById(long id);

    Beer getBeerByName(String beerName);

    boolean createBeerWithBrewery(String name, double abv, String type, String description, String image, Long breweryId);

    boolean createBeerWithoutBrewery(String name, double abv, String type, String description, String image);

    boolean updateBeer(Beer beer);

    void deleteBeer(Long beerId);

    boolean reviewBeer(Long beerId, String review, Integer rating);

    List<Review> getReviews(Long beerId);

}
