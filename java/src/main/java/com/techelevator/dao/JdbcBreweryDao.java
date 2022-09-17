package com.techelevator.dao;


import com.techelevator.model.Brewery;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;


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
        results.beforeFirst();
        while(results.next()) {
            Brewery brewery = mapRowToBrewery(results);
            brewery.setBreweryHours(getHours(brewery.getBreweryId()));
            breweries.add(brewery);
        }

        return breweries;
    }

    @Override
    public Brewery getBreweryById(long breweryId) {
        String sql = "SELECT * FROM breweries WHERE id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
        Brewery brewery = new Brewery();
        if (results.next()) {
            brewery = mapRowToBrewery(results);
            brewery.setBreweryHours(getHours(breweryId));
        }
        return brewery;
    }

    @Override
    public List<Brewery> getBreweryByBrewer(long brewerId) {
        String sql = "select * from breweries Where brewer = ? ORDER BY id";
        List<Brewery> breweries = new ArrayList<>();
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, brewerId);
        while (results.next()){
            Brewery brewery = new Brewery();
            brewery = mapRowToBrewery(results);
            brewery.setBreweryHours(getHours(brewery.getBreweryId()));
            breweries.add(brewery);
        }
        return breweries;
    }

    @Override
    public Brewery getBreweryByName(String breweryName) throws Exception {
        for (Brewery brewery : this.findAll()) {
            if( brewery.getBreweryName().toLowerCase().equals(breweryName.toLowerCase())) {
                if(brewery.getBrewer() == 0){
                    brewery.setBrewer(null);
                }
                return brewery;
            }
        }
        throw new Exception(breweryName + "not found");
    }

    @Override
    public boolean create(Brewery brewery) {
        boolean breweryCreated = false;

        String sql = "insert into breweries (name, street, city, state, post_code, phone, website, brewer, image, description, active) values (?,?,?,?,?,?,?,?,?,?,?)";
        try {
            jdbcTemplate.update(sql, brewery.getBreweryName(),
                    brewery.getBreweryState(), brewery.getBreweryCity(), brewery.getBreweryState(),
                    brewery.getBreweryPostCode(), brewery.getPhoneNumber(), brewery.getWebsite(),
                    brewery.getBrewer(), brewery.getImage(), brewery.getDescription(), brewery.isActive());
            String newSql = "select * from breweries where name = ? AND street = ? AND city = ? AND state = ?";
            SqlRowSet results = jdbcTemplate.queryForRowSet(newSql, brewery.getBreweryName(),
                    brewery.getBreweryStreet(),brewery.getBreweryCity(),brewery.getBreweryState());
            long id = 0;
            if (results.next()){
                Brewery brewery1 = mapRowToBrewery(results);
                id = brewery1.getBreweryId();
            }
            if(!createHours(id, brewery.getBreweryHours())){
                throw new Exception();
            }
            breweryCreated = true;
        }catch (Exception e){
            breweryCreated = false;
        }
        return breweryCreated;
    }

    @Override
    public Map<Integer, String[]> getHours(long breweryId) {
        String sql = "SELECT * FROM brewery_hours WHERE brewery_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, breweryId);
        Map<Integer, String[]> hours = new HashMap<>();
        while(results.next()){
            hours.put(results.getInt("day_id"), new String[]{results.getString("open"), results.getString("close")});
        }
        return hours;
    }

    @Override
    public boolean createHours(Long breweryId, Map<Integer, String[]> newHours) {

        String[] sunday = {"",""};
        String[] monday = {"",""};
        String[] tuesday = {"",""};
        String[] wednesday = {"",""};
        String[] thursday = {"",""};
        String[] friday = {"",""};
        String[] saturday = {"",""};
        if(!newHours.isEmpty()) {
            sunday = newHours.get(0);
            monday = newHours.get(1);
            tuesday = newHours.get(2);
            wednesday = newHours.get(3);
            thursday = newHours.get(4);
            friday = newHours.get(5);
            saturday = newHours.get(6);
        }

        String sql =
                "INSERT INTO brewery_hours (brewery_id, day_id, open, close) " +
                        "VALUES" +
                        "(?, 0, ?, ?), (?, 1, ?, ?), (?, 2, ?, ?), (?, 3, ?, ?), (?, 4, ?, ?), (?, 5, ?, ?), (?, 6, ?, ?)";

        try{
            jdbcTemplate.update(sql, breweryId, sunday[0], sunday[1], breweryId, monday[0], monday[1], breweryId, tuesday[0], tuesday[1],
                    breweryId, wednesday[0], wednesday[1], breweryId, thursday[0], thursday[1], breweryId, friday[0], friday[1], breweryId, saturday[0], saturday[1]);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public boolean updateHours(Long breweryId, Map<Integer, String[]> newHours) {
        try{
            String[] sunday = newHours.get(0);
            String[] monday = newHours.get(1);
            String[] tuesday = newHours.get(2);
            String[] wednesday = newHours.get(3);
            String[] thursday = newHours.get(4);
            String[] friday = newHours.get(5);
            String[] saturday = newHours.get(6);

            String sql = "BEGIN TRANSACTION; " +
                    "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 0;" +
                    "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 1;" +
                    "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 2;" +
                    "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 3;" +
                    "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 4;" +
                    "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 5;" +
                    "UPDATE brewery_hours " + "SET open = ?, close = ?" + "Where brewery_id = ? AND day_id = 6;" +
                    "COMMIT TRANSACTION";


            jdbcTemplate.update(sql, sunday[0], sunday[1], breweryId, monday[0], monday[1], breweryId, tuesday[0], tuesday[1], breweryId,
                    wednesday[0], wednesday[1], breweryId, thursday[0], thursday[1], breweryId, friday[0], friday[1], breweryId, saturday[0], saturday[1], breweryId);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public boolean updateBrewery(Brewery brewery) {

        String sql = "UPDATE breweries " +
                "SET name = ?, street = ?, city = ?, state = ?, post_code = ?, phone = ?, website = ?, brewer = ?, image = ?, description = ?, active = ?" +
                "WHERE id = ?";
        try {
            Long brewer = null;
            if (brewery.getBrewer()==0){
                brewery.setBrewer(null);
            }
            jdbcTemplate.update(sql, brewery.getBreweryName(), brewery.getBreweryStreet(), brewery.getBreweryCity(),
                    brewery.getBreweryState(), brewery.getBreweryPostCode(),brewery.getPhoneNumber(), brewery.getWebsite(), brewery.getBrewer(), brewery.getImage(),
                    brewery.getDescription(), brewery.isActive(), brewery.getBreweryId());
            updateHours(brewery.getBreweryId(), brewery.getBreweryHours());
            return true;
        }
        catch (Exception e) {
            return false;
        }
    }

    @Override
    public void delete(long id) {
        String sql = "Delete from breweries Where id = ?; Delete from brewery_hours where brewery_id =?";
        jdbcTemplate.update(sql, id, id);

    }

    private Brewery mapRowToBrewery(SqlRowSet rs) {
        Brewery brewery = new Brewery();
        brewery.setBreweryId(rs.getInt("id"));
        brewery.setBreweryName(rs.getString("name"));
        brewery.setBreweryStreet(rs.getString("street"));
        brewery.setBreweryCity(rs.getString("city"));
        brewery.setBreweryState(rs.getString("state"));
        brewery.setBreweryPostCode(rs.getString("post_code"));
        brewery.setPhoneNumber(rs.getString("phone"));
        brewery.setWebsite(rs.getString("website"));
        brewery.setDescription(rs.getString("description"));
        brewery.setImage(rs.getString("image"));
        brewery.setActive(rs.getBoolean("active"));
        if (rs.getLong("brewer") == 0){
            brewery.setBrewer(null);
        }else{
            brewery.setBrewer(rs.getLong("brewer"));
        }

        return brewery;
    }

}
