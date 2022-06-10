class ChangeDriversAndBusRoutesToDriversAndBuses < ActiveRecord::Migration[6.1]
  def change
    rename_table :drivers_and_bus_routes, :drivers_and_buses
  end
end
