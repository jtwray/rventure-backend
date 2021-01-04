const db = require("../../data/dbConfig.js");

module.exports = {
  find,
  findBy,
  findById,
  add,
  findListingsNotReservedOnDate,
  findListingsByPrice,
};

function findListingsNotReservedOnDate(startDate, endDate) {
  // let vacancies,notbooked;
  // [...vacancies,..notbooked]
  return db("reservation as r")
    .join("listing as l", "r.listing_id", "l.id")
    .where("r.listing_id", null)
    .orWhereNotBetween("r.start_date", [startDate, endDate])
    .andWhereNotBetween("r.end_date", [startDate, endDate])
    .select("r.*", "l.*");
}
// .raw(`SELECT r.*,l.* WHERE r.listing_id IS NULL or r."startDate" not between '${startDate}' and '${endDate}' and r."endDate" not between '${startDate}' and '${endDate}' order by r."startDate"`)
// return db.raw(`SELECT  r.*,l.* FROM listing as l LEFT JOIN reservation as r ON l.id = r.listing_id WHERE r.listing_id IS NULL or r."startDate" not between '${startDate}' and '${endDate}' and r."endDate" not between '${startDate}' and '${endDate}' order by r."startDate"`)
function find() {
  return db("rv").select("id", "username", "password");
}

function findListingsByPrice(min_price, max_price) {
  return db("listing as l")
    .join("amenities as a", "l.id", "a.listing_id")
    .whereBetween("l.price", [min_price, max_price])
    .select("l.*", "a.*");
}

function find() {
  return db("rv").select("id", "username", "password");
}

function findBy(prop, filter) {
  let table = prop.toString();
  return db(table).where(filter);
}

function findById(id) {
  console.log(id);
  return db("rv").where("id", id).first();
}

function add(rv) {
  return db("rv")
    .insert(rv, "id")
    .then(([id]) => {
      return findById(id);
    });
}
