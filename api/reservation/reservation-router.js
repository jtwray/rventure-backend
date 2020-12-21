const router = require('express').Router()
// const Trip = require('./reservation/reserve-model.js.js');
// return a reserved trip for a matching reservation id
//  if userid = a related landowner or rvowner
// router.get('/reserve/:id', (req, res) => {
//     req.body
// })
// module.exports = router;

const Reserve = require('./reservation-model.js')

/// reservations =>get all
/// reservations =>get all and crud by id
/// fav reservations =>get all and add delete by id
// MVP
// 1. Users can register/create an account as either an **RV Owner** or a **Landowner** (web, mobile)
// 2. **Landowners** and **RV Owners** can login to the the app. (web, mobile)
// 3. **Landowners** can create, update and delete reservations of their available land. At a minimum, a reservation must include the land's location, description, price per day, and a photo. (web, mobile)
// 4. **RV Owners** can query/filter available reservations by location (at a minimum) and reserve a spot for their RV for a desired date(s) (web, mobile)
// npm run server
/// rv owners need to view reservations
/// rv owners need to create view update and deleted single reservations for the reservations by date availability
/// rv owners need to  view  and deleted all reservations for the reservations by date availability
/// rv owners need to  view  and deleted all reservations for the reservations by date availability
/// rv owners need to create view update and deleted single fav reservations single reservations for the reservations by date availability
//get all reservations all of them!
router.get('/', async (req, res) => {
  Reserve.find('reservation')
    .then(reservations => {
      reservations.length == undefined
        ? res
          .status(404)
          .json({ message: 'the reservations could not be found' })
        : reservations.length == 0
          ? res.status(200).json({ message: 'No reservations. ' })
          : res.status(200).json({ reservations })
    })
    .catch(error => {
      res.status(500).json({
        error: `there was an error on the server while attempting to retrieve the reservations.--+${error}`
      })
      console.error(error)
    })
})

// all reservations by userid
router.get('/:rvid', async (req, res) => {

  Reserve.findReservationsByPatronID(req.params.rvid)
    .then(reservations => {
      reservations.length == undefined
        ? res
          .status(404)
          .json({ message: 'the reservations could not be found' })
        : reservations.length == 0
          ? res.status(200).json({ message: 'No reservations returned for this user. ' })
          : res.status(200).json({ reservations })
    })
    .catch(error => {
      res.status(500).json({
        error: `there was an error on the server while attempting to retrieve the reservations.--+${error}`
      })
      console.error(error)
    })
})
//api.reserve.rvid12/listingid5 put or delete on these
//api/reserve/tvid get all reservations 
//api/reserve/tvid/fav get all fav past reservations 

// reservation by req.params.id rvowner_id & listing_id

router.get('/:rvid/listing/:listingid', async (req, res) => {
  Reserve.findReservationByQuery({"rvowner_id": req.params.rvid,"listing_id":req.params.listingid})
    .then(singlereservation => {
      singlereservation.length == 0 || undefined
        ? res
          .status(404)
          .json({ message: 'the reservation could not be found' })
        : res.status(200).json({ singlereservation })
    })
    .catch(error => {
      res.status(500).json({ message: error })
      console.error(error)
    })
})

//get reservation by pg defined index returns data rvid listingid
router.get('/:id', async (req, res) => {
  Reserve.findBy('reservation', req.params.id)
    .then(singlereservation => {
      singlereservation.length == 0 || undefined
        ? res
          .status(404)
          .json({ message: 'the reservation could not be found' })
        : res.status(200).json({ singlereservation })
    })
    .catch(error => {
      res.status(500).json({ message: error })
      console.error(error)
    })
})

//  add new reservation by req.body
router.post('/', async (req, res) => {
  let {rvowner_id,listing_id}=req.body
 console.log('lets add a reservation',req.body)
  Reserve.reserveListing(req.body, 'reservation')
    .then(reservationUp => {
      res.status(201).json({ 'newreservation added': reservationUp })
    })
    .catch(error => {
      res.status(500).json({ error: 'thatdidnt work my friend' })
      console.error(error)
    })
})

router.put('/:id', (req, res) => {
  Reserve.update(req.params.id, req.body, 'reservation')
    .then(updatedreservation => {
      updatedreservation.length == 0 || undefined
        ? res
          .status(404)
          .json({ message: 'the reservation could not be found' })
        : res.status(200).json({
          message: 'reservation updated successfully',
          updatedreservation
        })
    })
    .catch(error => {
      console.log('PUT /api/user/:id Error', error)
      res
        .status(500)
        .json({ error: 'We ran into an error updating the reservation' })
    })
})

router.delete('/:id', (req, res) => {
  Reserve.remove('reservation', req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The reservation has been nuked' })
      } else {
        res.status(404).json({ message: 'The reservation could not be found' })
      }
    })
    .catch(error => {
      // log error to server
      console.log(error)
      res.status(500).json({
        message: 'Error removing the reservation'
      })
    })
})

module.exports = router
