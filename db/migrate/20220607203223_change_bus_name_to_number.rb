class ChangeBusNameToNumber < ActiveRecord::Migration[6.1]
  def change
    rename_column :buses, :bus_name, :number
  end
end
