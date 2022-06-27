class CreateDailyBusRouteStartTime < ActiveRecord::Migration[6.1]
  def change
   add_column :daily_routes, :route_start_time, :time
  end
end
