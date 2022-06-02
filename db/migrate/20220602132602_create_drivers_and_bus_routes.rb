class CreateDriversAndBusRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers_and_bus_routes do |t|
      t.integer :driver_id
      t.integer :bus_route_id

      t.timestamps
    end
  end
end
