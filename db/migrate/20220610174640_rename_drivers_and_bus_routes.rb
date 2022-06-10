class RenameDriversAndBusRoutes < ActiveRecord::Migration[6.1]
  def change
    rename_table :drivers_and_buses, :driver_buses
  end
end
