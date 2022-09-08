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
    public List<Beer> listBeerByBrewery(Long BreweryId) {
        List<Beer> beers = new ArrayList<>();
        String sql = "select * from beer where brewery = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, BreweryId);

        while (results.next()){
            Beer beer = mapRowToBeer(results);
            beer.setReviews(getReviews(beer.getBeerId()));
            beers.add(beer);
        }

        return beers;
    }

    @Override
    public Beer getBeerByName(String beerName) {
        String sql = "select * from beers where name = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, beerName);
        Beer beer = mapRowToBeer(results);
        beer.setReviews(getReviews(beer.getBeerId()));
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
    public void deleteBeer(Long beerId) {
        String sql = "delete from beers where id = ?";
        jdbcTemplate.update(sql, beerId);

    }

    @Override
    public boolean reviewBeer(Long beerId, String review, Integer rating) {
        String sql = "insert into beer_review (beer_id, review, rating) values (?,?,?)";
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
        String sql = "select * from beer_review where beer_id = ?";
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

        return beer;
    }
}
