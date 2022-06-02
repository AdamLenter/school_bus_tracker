class CreateDailyRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_routes do |t|
      t.date :date
      t.integer :route_id
      t.string :to_or_from_school

      t.timestamps
    end
  end
end
