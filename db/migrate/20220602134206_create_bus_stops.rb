class CreateBusStops < ActiveRecord::Migration[6.1]
  def change
    create_table :bus_stops do |t|
      t.integer :bus_route_id
      t.string :location_description
      t.time :expected_pick_up_time
      t.time :expected_drop_off_time

      t.timestamps
    end
  end
end
