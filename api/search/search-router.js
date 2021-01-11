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

router.post("/location", async (req, res) => {
  const { range, searchLocation } = req.body.searchTerms;
  let { zip, city, state, lat, lon } = searchLocation;
  console.log("req.body", req.body);
  if (zip || (city && state)) {
    let address = zip || `${city},${state}`;
    let { lat, lon } = search.convertAddressToLatLon(address);
  }
  if (lat && lon) {
    search
      .findListingByLatLonRange(lat, lon, range)
      .then((listings) => res.status(209).json({ listings }))
      .catch((err) => res.status(500).json({ error: err }));
  }

  if ((lat && !lon) || (lon && !lat)) {
    res.status(400).json({
      message: `Bad request:Client should not repeat the request without Modifications.`,
      Modifications: `Received values: latitude:${lat} longitude:${lon}.\n A complete 'latitude' and 'longitude' pair is required for a latitude/longitude query. Submit both or alter the query to search for listings using a zip code or city & state combination.  --searchListingsAvailableByLocation--.`,
    });
  }
});

module.exports = router;
