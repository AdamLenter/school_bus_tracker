class ChangeBusRouteNameToNumber < ActiveRecord::Migration[6.1]
  def change
    rename_column :bus_routes, :name, :number
  end
end
