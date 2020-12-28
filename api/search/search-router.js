const router = require("express").Router();
const search = require("./search-model.js");

router.post("/dates", (req, res) => {
  const { start_date, end_date } = req.body.searchTerms;
  if (!start_date || !end_date) {
    res.status(400).json({
      message: `Bad request:Client should not repeat the request without Modifications.`,
      Modifications: `Received values: start_date:${start_date} end_date:${end_date}.\nBoth 'start_date' and 'end_date' are required for request --searchListingsAvailableByDate--.`,
    });
  }
  search
    .findListingsNotReservedOnDate(start_date, end_date)
    .then((listings) =>
      listings.length === undefined
        ? res.status(404).json({ message: "the listings could not be found" })
        : listings.length === 0
        ? res
            .status(204)
            .json({ message: "No Listings matching these criteria." })
        : res.status(200).json({ listings: listings, count: listings.length })
    )
    .catch((err) => {
      res.status(500).json({
        error: `There was an error on the server while attempting to search for listings with those parameters. --${err}.`,
      });
    });
});

router.post("/price", (req, res) => {
  const { min_price, max_price } = req.body.searchTerms;
  if (!min_price || !max_price) {
    res.status(400).json({
      message: `Bad request:Client should not repeat the request without Modifications.`,
      Modifications: `Received values: min_price:${min_price} max_price:${max_price}.\nBoth 'min_price' and 'max_price' are required for request --searchListingsAvailableByPrice--.`,
    });
  }
  console.log({ min_price }, { max_price });
  search
    .findListingsByPrice(min_price, max_price)
    .then((listings) =>
      listings.length === undefined
        ? res.status(404).json({ message: "the listings could not be found" })
        : listings.length === 0
        ? res
            .status(204)
            .json({ message: "No Listings matching these criteria." })
        : res.status(200).json({ listings: listings, count: listings.length })
    )
    .catch((err) => {
      res.status(500).json({
        error: `There was an error on the server while attempting to search for listings with those parameters. --${err}.`,
      });
    });
});

router.post("/location", (req, res) => {
	const { within, location } = req.body.searchTerms;
	const {lat,lon,zip,city,state}=location;
	
if(lat&& !lon || lon&& !lat){  res.status(400).json({
	message: `Bad request:Client should not repeat the request without Modifications.`,
	Modifications: `Received values: latitude:${lat} longitude:${lon}.\n A complete 'latitude' and 'longitude' pair is required for a latitude/longitude query. Submit both or alter the query to search for listings using a zip code or city & state combination.  --searchListingsAvailableByLocation--.`,
});
}
  location.zip ? "" : "";
  location.city ? "" : "";
  location.state ? "" : "";
  location.lat ? "" : "";
	location.lon ? "" : "";
	

	{/**
	check for lat/lon,range
	if present 
	plug in to db helper model with the range or range = 50 miles

	if lat/lon not present  
	checkfor city/state/zip

	plug those into 3rd party HERE API

	use resulting lat/lon with provided or default range in dbhelper=model


	*/}
  if (!min_price || !max_price) {
  
  console.log({ min_price }, { max_price });
  search
    .findListingsByPrice(min_price, max_price)
    .then((listings) =>
      listings.length === undefined
        ? res.status(404).json({ message: "the listings could not be found" })
        : listings.length === 0
        ? res
            .status(204)
            .json({ message: "No Listings matching these criteria." })
        : res.status(200).json({ listings: listings, count: listings.length })
    )
    .catch((err) => {
      res.status(500).json({
        error: `There was an error on the server while attempting to search for listings with those parameters. --${err}.`,
      });
    });
});

module.exports = router;

{
  /**

uper

UNDERSTAND
search by location:
 - lat/lon or
 - zipcode or
 - city/state

need to convert the provided data into lat/lon
 either e=convert on client or server side

client side
2 unknowns:
 - network speed/strength is it high latency 2g/3g vs high speed wifi or 4g / 5g
 - client pc/phone strength low ram no ram etc
	-- thinking its a small enough computation this is a nonfactor unless need to reach 3rd party apis then definitely use server side

 server side very predictable latency and compute strength

 transferring a small data footprint
	gather data and convert on backend
	
 

PLAN
take the inputs and convert them to lat lon on the servern uin 3rd party api

send gathered data to backend and convert to lat lon

search database for any listings within provided range of deciphered lat/lon

gather zip|city,state|lat/lon

convert to lat/lon with 3rd party api

retrieve listings withing provided radius of computed lat/lon

EXECUTE

REVIEW/REFACTOR

*/
}
