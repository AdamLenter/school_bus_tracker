class ChangeDriversAndBusRoutesForeignKey < ActiveRecord::Migration[6.1]
  def change
    rename_column :drivers_and_bus_routes, :driver_id, :adult_contact_id;
  end
end
