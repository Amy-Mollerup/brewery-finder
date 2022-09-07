package com.techelevator.controller;

import com.techelevator.dao.BreweryDao;
import com.techelevator.model.Brewery;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
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

    @GetMapping(value = "/breweries/{id}")
    public Brewery getBreweryById(@PathVariable long id) {
        Brewery brewery = breweryDao.getBreweryById(id);
        return brewery;
    }

//    @GetMapping(value = "breweries/{name}")
//    public Brewery getBreweryByName(String name) throws Exception {
//        Brewery brewery = breweryDao.getBreweryByName(name);
//        return brewery;
//    }
    @GetMapping(value = "/breweries/named/{name}")
    public Brewery getBreweryByName(String name) throws Exception {
        Brewery brewery = breweryDao.getBreweryByName(name);
        return brewery;
    }

    @PostMapping(value = "/breweries")
    public Boolean createBrewery(@RequestBody Brewery brewery) {
        return breweryDao.create(brewery.getBreweryName(), brewery.getBreweryStreet(), brewery.getBreweryCity(), brewery.getBreweryState(),
                brewery.getBreweryPostCode(), brewery.getBreweryHours());
    }

    @PutMapping(value = "/breweries/{id}/hours")
    public void updateHours(@PathVariable long id, @RequestBody Map<Integer, String[]> newHours){
        if (breweryDao.getBreweryById(id).getBreweryHours().isEmpty()){
            breweryDao.createHours(id, newHours);
        }
        else {
            breweryDao.updateHours(id,newHours);
        }
    }

}
