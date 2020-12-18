const db = require("../../data/dbConfig.js");

// 'landowner' & 'listing'

module.exports = {

  reserveListing,
  find,
  findByPatron,
  findByListing,
  findReservationsByQuery,
  findReservationsByPatronID,
  remove,
  update,
  updateById,
};

function find(prop) {
  const table = prop.toString();
  return db(table);
}


function findById(id) {
    console.log(id);
    return db("listing").where("id", id).first();
  }
  
// all reservations by rv userid
function findByPatron(prop, filter) {

    const table = prop.toString();
    return db(table).where("rvowner_id", filter);
  }
// all reservations by listing_id
function findByListing(prop, filter) {

    const table = prop.toString();
    return db(table).where("listing_id", filter);
  }




//reservation(s) by user id and listingiD
function findReservationsByQuery(query) { 
    return db("reservation as r")
    .join("listing as l","r.listing_id","l.id").where('r.rvowner_id',query)
    .select('l.id','l.photo','l.city','l.state','l.zip','l.price','l.title','l.lat','l.lon',
query);}

function findReservationsByPatronID(patronID) { 
    return db("reservation as r")
    .join("listing as l","r.listing_id","l.id").where('r.rvowner_id',patronID)
    .select('l.*','r.*');
}
  
    /**
  query is an object of key value pairs 
  the where(~mixed~) syntax breaks the query object down
   into "where a and b and c.." constraints
  knex.where({k:v,k2:v2,k3:v3})===where k=v and k2=v2 and k3=v3 
*/
  

//create new reservation by listingid and rvownerid
function reserveListing(reservationObj, tableprop) {
    const table = tableprop.toString();
    return db(table)
      .insert(reservationObj, "id")
      .then(([id]) => {
        return db(table).where("id", id);
      });
  }

function findReservationsAvailableforDates(){}

function findReservationsByListing(id) {
  return db("reservation")
    .join("listing", "listing.id", "reservation.listing_id")
    .select(
      "reservation.date",
      "listing.title",
      "reservation.id"
    )
    .where("reservation.listing_id", id)
    .orderBy("listing.id", "asc");
}

function findReservationsByOwner(id) {return db("listing").where("landowner_id",id)}
   

function reserveListing(newinsert, tableprop) {
    const table = tableprop.toString();
    console.log("newlistingmodel:", newinsert);
    console.error();
    return db(table)
      .insert(newinsert, "id")
      .then(([id]) => {
        console.log("listingid-afterAdd's-Findby", id);
        console.error();
        return findById(id);
      });
  }
function remove(prop, id) {
  const table = prop.toString();
  return db(table).where("id", id).del();
}

function update(id, changes, prop) {
  const table = prop.toString();
  return db(table).where({ id }).update(changes, "*");
}

function updateById(changes, id, prop) {
  const table = prop.toString();
  console.log("id", id);
  const listID = Number(id);
  console.log("listID", listID);
  return findBy(table, id).then((r) => r.update(changes));
  // .then(()=>findBy('listing',id))
}

// function update (id,changes) {
//   return
//      db('listing')
//       .where('id', id)
//       .update(changes)
//       .then(() => findBy('listing',id))
// }

// function update (id, changes, prop) {
// const table = prop.toString()
//   return
//      db(table)
//       .where("id", id)
//       .update(changes)
//       .then(() => findBy(table, id))
// }
