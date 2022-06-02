class DailyRouteStopTimeSerializer < ActiveModel::Serializer
  attributes :id, :daily_route_id, :bus_stop_id, :pick_up_or_drop_off_time
end
