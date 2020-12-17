exports.seed = function (knex) {
  return knex('reservation')
    .del()
    .then(function () {
      return knex('reservation').insert([
        {"rvowner_id":20,"listing_id":15,"date":"2022-09-08"},
      {"rvowner_id":4,"listing_id":19,"date":"2020-11-11"},
      {"rvowner_id":4,"listing_id":7,"date":"2021-12-28"},
      {"rvowner_id":4,"listing_id":18,"date":"2022-06-25"},
      {"rvowner_id":12,"listing_id":19,"date":"2022-02-25"},
      {"rvowner_id":11,"listing_id":10,"date":"2019-06-18"},
      {"rvowner_id":10,"listing_id":8,"date":"2020-07-18"},
      {"rvowner_id":4,"listing_id":1,"date":"2020-12-09"},
      {"rvowner_id":10,"listing_id":13,"date":"2020-09-29"},
      {"rvowner_id":5,"listing_id":7,"date":"2019-03-05"},
      {"rvowner_id":20,"listing_id":10,"date":"2021-07-31"},
      {"rvowner_id":5,"listing_id":9,"date":"2021-09-05"},
      {"rvowner_id":8,"listing_id":10,"date":"2019-10-16"},
      {"rvowner_id":15,"listing_id":7,"date":"2020-07-20"},
      {"rvowner_id":13,"listing_id":7,"date":"2020-11-19"},
      {"rvowner_id":3,"listing_id":14,"date":"2019-11-30"},
      {"rvowner_id":16,"listing_id":9,"date":"2020-03-14"},
      {"rvowner_id":15,"listing_id":5,"date":"2019-12-16"},
      {"rvowner_id":13,"listing_id":17,"date":"2022-08-10"},
      {"rvowner_id":11,"listing_id":9,"date":"2021-05-05"},
      {"rvowner_id":8,"listing_id":15,"date":"2022-10-20"},
      {"rvowner_id":9,"listing_id":10,"date":"2021-11-18"},
      {"rvowner_id":5,"listing_id":13,"date":"2021-05-28"},
      {"rvowner_id":1,"listing_id":7,"date":"2019-12-27"},
      {"rvowner_id":8,"listing_id":1,"date":"2020-11-22"},
      {"rvowner_id":8,"listing_id":15,"date":"2021-02-08"},
      {"rvowner_id":17,"listing_id":5,"date":"2022-03-15"}])
    })
}
