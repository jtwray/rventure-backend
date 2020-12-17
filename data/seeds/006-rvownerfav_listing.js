
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('rvownerfav_listing').del()
    .then(function () {
      // Inserts seed entries
      return knex('rvownerfav_listing').insert(
        [{"rvowner_id":6,"listing_id":11},{"rvowner_id":11,"listing_id":10},{"rvowner_id":10,"listing_id":19},{"rvowner_id":14,"listing_id":7},{"rvowner_id":10,"listing_id":2},{"rvowner_id":9,"listing_id":14},{"rvowner_id":20,"listing_id":15},{"rvowner_id":9,"listing_id":8},{"rvowner_id":13,"listing_id":17},{"rvowner_id":7,"listing_id":7},{"rvowner_id":11,"listing_id":2},{"rvowner_id":2,"listing_id":11},{"rvowner_id":6,"listing_id":17},{"rvowner_id":13,"listing_id":19},{"rvowner_id":18,"listing_id":3},{"rvowner_id":15,"listing_id":11},{"rvowner_id":16,"listing_id":3},{"rvowner_id":10,"listing_id":9},{"rvowner_id":11,"listing_id":11},{"rvowner_id":15,"listing_id":18},{"rvowner_id":3,"listing_id":17}]
      )
    })
}
