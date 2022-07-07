class AddMessageTimeToDailyRouteMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :daily_route_messages, :message_time, :time
  end
end
