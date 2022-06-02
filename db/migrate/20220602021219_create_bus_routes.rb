class CreateBusRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :bus_routes do |t|
      t.string :name
      t.integer :bus_id
      t.integer :school_id

      t.timestamps
    end
  end
end
