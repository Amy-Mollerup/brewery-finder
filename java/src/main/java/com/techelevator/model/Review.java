package com.techelevator.model;

public class Review {

    private Long id;
    private Integer rating;
    private String review;

    public Review(Long id, Integer rating, String review) {
        this.id = id;
        this.rating = rating;
        this.review = review;
    }

    public Review() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}
