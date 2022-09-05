package com.techelevator.dao;


import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class JdbcBreweryDao implements BreweryDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcBreweryDao(JdbcTemplate jdbcTemplate){ this.jdbcTemplate = jdbcTemplate; }
    @Override
    public List<Brewery> findAll() {
        List<Brewery> breweries = new ArrayList<>();
        String sql = "select * from breweries";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Brewery brewery = mapRowToBrewery(results);
            breweries.add(brewery);
        }

        return breweries;
    }

    @Override
    public Brewery getBreweryById(int breweryId) {
        String sql = "SELECT * FROM breweries WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
        if(results.next()) {
            return mapRowToBrewery(results);
        } else {
            throw new RuntimeException("breweryId "+breweryId+" was not found.");
        }
    }

    @Override
    public Brewery getBreweryByName(String breweryName) throws Exception {
        for (Brewery brewery : this.findAll()) {
            if( brewery.getBreweryName().toLowerCase().equals(breweryName.toLowerCase())) {
                return brewery;
            }
        }
        throw new Exception(breweryName + "not found");
    }
    // need to change brewery format to match database format and then finish writing sql call
    @Override
    public boolean create(String name, String street, String city, String state, String postCode, Map<Integer, String> breweryHours) {
        boolean breweryCreated = false;

        String sql = "insert into breweries (name, street, city, state, post_code,) values(?,?,?,?,?)";

        return false;
    }

    @Override
    public void updateHours(Map<Integer, String> newHours) {

    }

    private Brewery mapRowToBrewery(SqlRowSet rs) {
        Brewery brewery = new Brewery();
        brewery.setBreweryId(rs.getInt("id"));
        brewery.setBreweryName(rs.getString("name"));
        brewery.setBreweryStreet(rs.getString("street"));
        brewery.setBreweryCity(rs.getString("city"));
        brewery.setBreweryState(rs.getString("state"));
        brewery.setBreweryPostCode(rs.getString("post_code"));
        return brewery;
    }
}
