copy breweries
from "paste path to breweries.csv here"
delimiter ','
CSV;

SELECT SETVAL
((SELECT PG_GET_SERIAL_SEQUENCE('breweries', 'id')), (SELECT (MAX(id) + 1) FROM breweries), FALSE);