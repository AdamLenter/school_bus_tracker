class ChangeBusRouteNumberBackToName < ActiveRecord::Migration[6.1]
  def change
    rename_column :bus_routes, :number, :name
  end
end
