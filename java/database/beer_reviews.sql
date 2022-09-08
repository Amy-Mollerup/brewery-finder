-- Table: public.beer_reviews

-- DROP TABLE IF EXISTS public.beer_reviews;

CREATE TABLE IF NOT EXISTS public.beer_reviews
(
    review_id integer NOT NULL DEFAULT nextval('beer_reviews_review_id_seq'::regclass),
    beer_id integer NOT NULL,
    review character varying COLLATE pg_catalog."default",
    rating integer,
    CONSTRAINT beer_reviews_pkey PRIMARY KEY (review_id),
    CONSTRAINT beer_id FOREIGN KEY (beer_id)
        REFERENCES public.beers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.beer_reviews
    OWNER to postgres;