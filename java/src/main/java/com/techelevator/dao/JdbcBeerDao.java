package com.techelevator.dao;

import com.techelevator.model.Beer;
import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBeerDao implements BeerDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcBeerDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Beer> getAllBeers() {
        String sql = "select * from beers order by id";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        List<Beer> beers = new ArrayList<>();
        while (results.next()){
            Beer beer = mapRowToBeer(results);
            beer.setReviews(getReviews(beer.getBeerId()));
            beers.add(beer);
        }
        return beers;
    }

    @Override
    public List<Beer> listBeerByBrewery(Long BreweryId) {
        List<Beer> beers = new ArrayList<>();
        String sql = "select * from beers where brewery = ? order by id";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, BreweryId);

        while (results.next()){
            Beer beer = mapRowToBeer(results);
            beer.setReviews(getReviews(beer.getBeerId()));
            beers.add(beer);
        }

        return beers;
    }

    @Override
    public Beer getBeerById(long id) {
        String sql = "select * from beers where id = ?";
        Beer beer = new Beer();

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, id);
        while (results.next()){
            beer = mapRowToBeer(results);
            beer.setReviews(getReviews(beer.getBeerId()));
        }

        return beer;
    }

    @Override
    public Beer getBeerByName(String beerName) {
        String sql = "select * from beers where name = ?";
        Beer beer = new Beer();

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, beerName);
        while (results.next()){
            beer = mapRowToBeer(results);
            beer.setReviews(getReviews(beer.getBeerId()));
        }

        return beer;
    }

    @Override
    public boolean createBeerWithBrewery(String name, double abv, String type, String description, String image, Long breweryId) {

        String sql = "insert into beers (name, abv, type, description, image, brewery) values(?,?,?,?,?,?)";
        try {
            jdbcTemplate.update(sql, name, abv, type, description, image, breweryId);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }


    @Override
    public boolean createBeerWithoutBrewery(String name, double abv, String type, String description, String image) {

        String sql = "insert into beers (name, abv, type, description, image) values(?,?,?,?,?)";
        try {
            jdbcTemplate.update(sql, name, abv, type, description, image);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

    @Override
    public boolean updateBeer(Beer beer) {
        String sql = "update beers " +
                    "set name = ?, abv = ?, type = ?, description = ?, image = ?, brewery = ? " +
                    "where id = ?";

        try {
            jdbcTemplate.update(sql, beer.getBeerName(), beer.getBeerABV(), beer.getBeerType(), beer.getBeerDescription(),
                    beer.getBeerImage(), beer.getBrewery(), beer.getBeerId());
            return true;
        }
        catch (Exception e){
            System.err.println(e.getMessage());
            return false;
        }
    }

    @Override
    public void deleteBeer(Long beerId) {
        String sql = "delete from beers where id = ?";
        jdbcTemplate.update(sql, beerId);

    }

    @Override
    public boolean reviewBeer(Long beerId, String review, Integer rating) {
        String sql = "insert into beer_reviews (beer_id, review, rating) values (?,?,?)";
        try{
            jdbcTemplate.update(sql, beerId, review, rating);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Review> getReviews(Long beerId) {
        List<Review> reviews = new ArrayList<>();
        String sql = "select * from beer_reviews where beer_id = ?";
        SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, beerId);
        while (rs.next()){
            Review review = new Review();
            review.setId(rs.getLong("review_id"));
            review.setReview(rs.getString("review"));
            review.setRating(rs.getInt("rating"));

            reviews.add(review);
        }
        return reviews;
    }

    private Beer mapRowToBeer(SqlRowSet rs) {
        Beer beer = new Beer();
        beer.setBeerId(rs.getLong("id"));
        beer.setBeerName(rs.getString("name"));
        beer.setBeerABV(rs.getDouble("abv"));
        beer.setBeerDescription(rs.getString("description"));
        beer.setBeerType(rs.getString("type"));
        beer.setBeerImage(rs.getString("image"));
        beer.setBrewery(rs.getLong("brewery"));

        return beer;
    }
}
