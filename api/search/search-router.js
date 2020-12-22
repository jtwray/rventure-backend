const router = require('express').Router();
const search = require('./search-model.js');

router.post('/dates', (req, res) => {
    const{start_date,end_date}=req.body;
    if(!start_date||!end_date){
        res
        .status(400)
        .json({
            message:             `Bad request:Client should not repeat the request without Modifications.`
            , Modifications: `Received values: start_date:${start_date} end_date:${end_date}.\nBoth 'start_date' and 'end_date' are required for request --searchListingsAvailableByDate--.` 
        })
    }
    search.findListingsNotReservedOnDate(start_date,end_date)
    .then(listings=> listings.length === undefined
        ? res.status(404).json({ message: "the listings could not be found" })
        : listings.length === 0
        ? res
            .status(204)
            .json({ message: "No Listings matching these criteria." })
        : res.status(200).json({ listings:listings, count:listings.length })
        ).catch(err=>{res.status(500).json({error:`There was an error on the server while attempting to search for listings with those parameters. --${err}.`})
        ,console.error(err)
    })
        })

module.exports = router