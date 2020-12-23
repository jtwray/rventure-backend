exports.seed = function (knex) {
  return knex('reservation')
    .del()
    .then(function () {
      return knex('reservation').insert(
    [
      {'rvowner_id':20,'listing_id':15,'start_date':'2022-09-08','end_date':'2022-09-13'},
    {'rvowner_id':4,'listing_id':19,'start_date':'2020-11-11','end_date':'2020-11-16'},
    {'rvowner_id':4,'listing_id':7,'start_date':'2021-12-28','end_date':'2022-01-02'},
    {'rvowner_id':4,'listing_id':18,'start_date':'2022-06-25','end_date':'2022-06-30'},
    {'rvowner_id':12,'listing_id':19,'start_date':'2022-02-25','end_date':'2022-02-28'},
    {'rvowner_id':11,'listing_id':10,'start_date':'2019-06-18','end_date':'2019-06-23'},
    {'rvowner_id':10,'listing_id':8,'start_date':'2020-07-18','end_date':'2020-07-23'},
    {'rvowner_id':4,'listing_id':1,'start_date':'2020-12-09','end_date':'2020-12-14'},
    {'rvowner_id':10,'listing_id':13,'start_date':'2020-09-27','end_date':'2020-09-30'},
    {'rvowner_id':5,'listing_id':7,'start_date':'2019-03-05','end_date':'2019-03-10'},
    {'rvowner_id':20,'listing_id':10,'start_date':'2021-07-31','end_date':'2021-08-06'},
    {'rvowner_id':5,'listing_id':9,'start_date':'2021-09-05','end_date':'2021-09-10'},
    {'rvowner_id':8,'listing_id':10,'start_date':'2019-10-16','end_date':'2019-10-21'},
    {'rvowner_id':15,'listing_id':7,'start_date':'2020-07-20','end_date':'2020-07-25'},
    {'rvowner_id':13,'listing_id':7,'start_date':'2020-11-19','end_date':'2020-11-24'},
    {'rvowner_id':3,'listing_id':14,'start_date':'2019-11-30','end_date':'2019-12-03'},
    {'rvowner_id':16,'listing_id':9,'start_date':'2020-03-14','end_date':'2020-03-19'},
    {'rvowner_id':15,'listing_id':5,'start_date':'2019-12-16','end_date':'2019-12-21'},
    {'rvowner_id':13,'listing_id':17,'start_date':'2022-08-10','end_date':'2022-08-15'},
    {'rvowner_id':11,'listing_id':9,'start_date':'2021-05-05','end_date':'2021-05-10'},
    {'rvowner_id':8,'listing_id':15,'start_date':'2022-10-20','end_date':'2022-10-25'},
    {'rvowner_id':9,'listing_id':10,'start_date':'2021-11-18','end_date':'2021-11-23'},
    {'rvowner_id':5,'listing_id':13,'start_date':'2021-05-28','end_date':'2021-06-03'},
    {'rvowner_id':1,'listing_id':7,'start_date':'2019-12-27','end_date':'2020-12-02'},
    {'rvowner_id':8,'listing_id':1,'start_date':'2020-11-22','end_date':'2020-11-27'},
    {'rvowner_id':8,'listing_id':15,'start_date':'2021-02-08','end_date':'2021-02-13'},
    {'rvowner_id':17,'listing_id':5,'start_date':'2022-03-15','end_date':'2022-03-20'}
  ]      
      )
    })
}
