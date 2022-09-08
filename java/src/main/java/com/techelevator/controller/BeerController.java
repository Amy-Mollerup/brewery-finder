package com.techelevator.controller;

import com.techelevator.dao.BeerDao;
import com.techelevator.model.Beer;
import com.techelevator.model.Review;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class BeerController {

    private BeerDao beerDao;

    public BeerController(BeerDao beerDao){
        this.beerDao = beerDao;
    }

    @GetMapping(value = "/{breweryId}/beers")
    public List<Beer> getBeerByBrewery(@PathVariable long breweryId) {
        List<Beer> beers = beerDao.listBeerByBrewery(breweryId);
        return beers;
    }

    @GetMapping(value = "/beer/{name}")
    public Beer getBeer(@PathVariable String name){
        Beer beer = beerDao.getBeerByName(name);
        return beer;
    }

    @GetMapping(value = "/beer/{id}/reviews")
    public List<Review> getReviews(@PathVariable Long id){
        return beerDao.getReviews(id);
    }

    @PostMapping(value = "/beer")
    public boolean addBeer(@RequestBody Beer beer){
        boolean beerAdded = false;

       if (beer.getBrewery() != null){
        beerAdded = beerDao.createBeerWithBrewery(beer.getBeerName(), beer.getBeerABV(), beer.getBeerType(),
        beer.getBeerDescription(), beer.getBeerImage(), beer.getBrewery());
    }
       else {
           beerAdded = beerDao.createBeerWithoutBrewery(beer.getBeerName(), beer.getBeerABV(), beer.getBeerType(),
                   beer.getBeerDescription(), beer.getBeerImage());
       }
       return beerAdded;
    }

    @PostMapping(value = "/beer/{id}/reviews")
    public boolean reviewBeer(@PathVariable long id, @RequestBody Review review){
        return beerDao.reviewBeer(id, review.getReview(), review.getRating());
    }

    @PutMapping(value = "/beer/{id}")
    public boolean updateBeer(@PathVariable long id, @RequestBody Beer beer){
        return beerDao.updateBeer(beer);
    }

    @DeleteMapping(value = "/beer/{id}")
    public void deleteBeer(@PathVariable long id){
        beerDao.deleteBeer(id);
    }


}
