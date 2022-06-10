class ChangeBusRouteIdToBusId < ActiveRecord::Migration[6.1]
  def change
    rename_column :drivers_and_buses, :bus_route_id, :bus_id
  end
end
