-- Table: public.beers

-- DROP TABLE IF EXISTS public.beers;

CREATE TABLE IF NOT EXISTS public.beers
(
    id serial NOT NULL,
    name character varying COLLATE pg_catalog."default",
    abv double precision,
    type character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    image character varying COLLATE pg_catalog."default",
    brewery integer,
    CONSTRAINT beers_pkey PRIMARY KEY (id),
    CONSTRAINT brewery FOREIGN KEY (brewery)
        REFERENCES public.breweries (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.beers
    OWNER to postgres;

GRANT UPDATE, DELETE, INSERT, SELECT ON TABLE public.beers TO final_capstone_appuser;

GRANT ALL ON TABLE public.beers TO final_capstone_owner;

GRANT ALL ON TABLE public.beers TO postgres;