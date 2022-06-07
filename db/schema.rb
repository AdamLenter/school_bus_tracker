# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_07_211801) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adult_contacts", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "parent"
    t.boolean "driver"
  end

  create_table "bus_routes", force: :cascade do |t|
    t.string "name"
    t.integer "bus_id"
    t.integer "school_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bus_stops", force: :cascade do |t|
    t.integer "bus_route_id"
    t.string "location_description"
    t.time "expected_pick_up_time"
    t.time "expected_drop_off_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "buses", force: :cascade do |t|
    t.integer "number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "daily_route_messages", force: :cascade do |t|
    t.integer "daily_route_id"
    t.string "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "daily_route_stop_times", force: :cascade do |t|
    t.integer "daily_route_id"
    t.integer "bus_stop_id"
    t.time "pick_up_or_drop_off_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "daily_routes", force: :cascade do |t|
    t.date "date"
    t.integer "route_id"
    t.string "to_or_from_school"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "drivers_and_bus_routes", force: :cascade do |t|
    t.integer "adult_contact_id"
    t.integer "bus_route_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "bus_stop_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "adult_contact_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
