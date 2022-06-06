class DropTableDrivers < ActiveRecord::Migration[6.1]
  def change
    drop_table :drivers
  end
end
