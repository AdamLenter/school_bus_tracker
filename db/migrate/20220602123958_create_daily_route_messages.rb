class CreateDailyRouteMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_route_messages do |t|
      t.integer :daily_route_id
      t.string :message

      t.timestamps
    end
  end
end
