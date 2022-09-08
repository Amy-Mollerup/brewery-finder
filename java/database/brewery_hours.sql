-- Table: public.brewery_hours

-- DROP TABLE IF EXISTS public.brewery_hours;

CREATE TABLE IF NOT EXISTS public.brewery_hours
(
    brewery_id integer NOT NULL,
    day_id integer NOT NULL,
    open character varying COLLATE pg_catalog."default",
    close character varying COLLATE pg_catalog."default",
    CONSTRAINT pk_brewery_day PRIMARY KEY (brewery_id, day_id),
    CONSTRAINT brewery FOREIGN KEY (brewery_id)
        REFERENCES public.breweries (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.brewery_hours
    OWNER to postgres;