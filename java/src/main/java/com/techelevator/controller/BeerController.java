package com.techelevator.controller;

import com.techelevator.dao.BeerDao;
import com.techelevator.model.Beer;
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

    @RequestMapping(value = "/{breweryId}/beers", method = RequestMethod.GET)
    public List<Beer> getBeerByBrewery(@PathVariable long breweryId) {
        List<Beer> beers = beerDao.listBeerByBrewery(breweryId);
        return beers;
    }

    @RequestMapping(value = "/beer/{name}", method = RequestMethod.GET)
    public Beer getBeer(@PathVariable String name){
        Beer beer = beerDao.getBeerByName(name);
        return beer;
    }

    @RequestMapping(value = "/beer", method = RequestMethod.POST)
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

    @DeleteMapping(value = "/beer/{id}")
    public void deleteBeer(@PathVariable long id){
        beerDao.deleteBeer(id);
    }
}
