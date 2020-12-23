exports.up = function (knex) {
  return knex.schema
    .createTable("rv", (tbl) => {
      tbl.increments();
      tbl.string("username", 255).notNullable().unique();
      tbl.string("email", 255).unique();
      tbl.string("contact", 255);
      tbl.string("password", 255).notNullable();
    })
    .createTable("landowner", (tbl) => {
      tbl.increments();
      tbl.string("username", 255).notNullable().unique();
      tbl.string("email", 255).unique();
      tbl.string("contact", 255);
      tbl.string("password", 255).notNullable();
    })
    .createTable("listing", (tbl) => {
      tbl.increments().unsigned();
      tbl.text("title", 255).notNullable();
      tbl.string("price", 255).notNullable();
      tbl.string("address", 255).notNullable();
      tbl.string('city',255).notNullable()
      tbl.string('state',255).notNullable()
      tbl.string('zip',255).notNullable()
      tbl.string("photo", 255);
      tbl.string("lat").notNullable();
      tbl.string("lon").notNullable();
      tbl
        .integer("landowner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("landowner")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("amenities", (tbl) => {
      tbl
        .integer("listing_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("listing")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.integer("guests");
      tbl.integer("beds");
      tbl.integer("bath");
      tbl.text("wifi", Boolean);
      tbl.text("kitchen", Boolean);
      tbl.text("heat", Boolean);
      tbl.text("water", Boolean);
      tbl.text("shower", Boolean);
      tbl.text("firepit", Boolean);
    })
    .createTable("reservation", (tbl) => {
      tbl.increments();
      tbl
        .integer("rvowner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("rv")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("listing_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("listing")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        tbl
        .date('start_date')
        .notNullable()
        tbl
        .date('end_date')
        .notNullable()
    
    })

    .createTable("landowner_listing", (tbl) => {
      tbl
        .integer("landowner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("landowner")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("listing_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("listing")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["landowner_id", "listing_id"]);
    })
    .createTable("rvownerfav_listing", (tbl) => {
      tbl
        .integer("rvowner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("rv")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("listing_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("listing")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["rvowner_id", "listing_id"]);
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("rvownerfav_listing")
    .dropTableIfExists("landowner_listing")
    .dropTableIfExists("reservation")
    .dropTableIfExists("amenities")
    .dropTableIfExists("listing")
    .dropTableIfExists("landowner")
    .dropTableIfExists("rv");
};
