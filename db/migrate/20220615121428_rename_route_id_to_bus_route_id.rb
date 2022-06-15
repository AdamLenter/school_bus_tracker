class RenameRouteIdToBusRouteId < ActiveRecord::Migration[6.1]
  def change
    rename_column :daily_routes, :route_id, :bus_route_id
  end
end
