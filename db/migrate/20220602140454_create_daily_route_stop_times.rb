class CreateDailyRouteStopTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_route_stop_times do |t|
      t.integer :daily_route_id
      t.integer :bus_stop_id
      t.time :pick_up_or_drop_off_time

      t.timestamps
    end
  end
end
