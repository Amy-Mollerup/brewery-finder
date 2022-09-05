package com.techelevator.dao;


import com.techelevator.model.Brewery;
import org.springframework.data.relational.core.sql.In;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.nio.channels.SelectableChannel;
import java.util.ArrayList;
import java.util.HashMap;
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
            brewery.setBreweryHours(getHours(brewery.getBreweryId()));
            breweries.add(brewery);
        }

        return breweries;
    }

    @Override
    public Brewery getBreweryById(long breweryId) {
        String sql = "SELECT * FROM breweries WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
        if(results.next()) {
            Brewery brewery = mapRowToBrewery(results);
            brewery.setBreweryHours(getHours(breweryId));
            return brewery;
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

    @Override
    public boolean create(String name, String street, String city, String state, String postCode, Map<Integer, String[]> breweryHours) {
        boolean breweryCreated = false;

        String sql = "insert into breweries (name, street, city, state, post_code,) values(?,?,?,?,?)";
        try {
            jdbcTemplate.update(sql, name, street, city, state, postCode);
            sql = "select from breweries where name = ? AND street = ? AND city = ? AND state = ?";
            createHours(mapRowToBrewery(jdbcTemplate.queryForRowSet(sql,name,street,city ,state)).getBreweryId(), breweryHours);
            breweryCreated = true;
        }catch (Exception e){
            breweryCreated = false;
        }
        return breweryCreated;
    }

    @Override
    public Map<Integer, String[]> getHours(long breweryId) {
        String sql = "SELECT * FROM brewery_hours WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        Map<Integer, String[]> hours = new HashMap<>();
        while(results.next()){
            hours.put(results.getInt("day_id"), new String[]{results.getString("open"), results.getString("close")});
        }
        return hours;
    }

    @Override
    public void createHours(Long breweryId, Map<Integer, String[]> newHours) {
        String[] sunday = newHours.get(0);
        String[] monday = newHours.get(1);
        String[] tuesday = newHours.get(2);
        String[] wednesday = newHours.get(3);
        String[] thursday = newHours.get(4);
        String[] friday = newHours.get(5);
        String[] saturday = newHours.get(6);

        String sql = "BEGIN TRANSACTION; " +
                "INSERT INTO brewery_hours (brewery_id, day_id, open, close) " +
                "VALUES" +
                "(?, 0, ?, ?), (?, 1, ?, ?), (?, 2, ?, ?), (?, 3, ?, ?), (?, 4, ?, ?), (?, 5, ?, ?), (?, 6, ?, ?) " +
                "COMMIT TRANSACTION";

        jdbcTemplate.update(sql, breweryId, sunday[0], sunday[1], breweryId, monday[0], monday[1], breweryId, tuesday[0], tuesday[2],
                breweryId, wednesday[0], wednesday[1], breweryId, thursday[0], thursday[1], breweryId, friday[0], friday[1], breweryId, saturday[0], saturday[1]);
    }

    @Override
    public void updateHours(Long breweryId, Map<Integer, String[]> newHours) {
        String[] sunday = newHours.get(0);
        String[] monday = newHours.get(1);
        String[] tuesday = newHours.get(2);
        String[] wednesday = newHours.get(3);
        String[] thursday = newHours.get(4);
        String[] friday = newHours.get(5);
        String[] saturday = newHours.get(6);

        String sql = "BEGIN TRANSACTION; " +
                        "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 0" +
                        "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 1" +
                        "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 2" +
                        "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 3" +
                        "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 4" +
                        "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 5" +
                        "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 6" +
                    "COMMIT TRANSACTION";

        jdbcTemplate.update(sql, sunday[0], sunday[1], breweryId, monday[0], monday[1], breweryId, tuesday[0], tuesday[2], breweryId,
                wednesday[0], wednesday[1], breweryId, thursday[0], thursday[1], breweryId, friday[0], friday[1], breweryId, saturday[0], saturday[1], breweryId);
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
