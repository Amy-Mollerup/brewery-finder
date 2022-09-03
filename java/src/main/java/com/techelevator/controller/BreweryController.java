package com.techelevator.controller;

import com.techelevator.dao.BreweryDao;
import com.techelevator.model.Brewery;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BreweryController {
    private BreweryDao breweryDao;

    public BreweryController(BreweryDao breweryDao) {
        this.breweryDao = breweryDao;
    }

    @GetMapping(value = "/breweries")
    public List<Brewery> getAllBreweries() {
        List<Brewery> breweries = breweryDao.findAll();
        return breweries;
    }
}
