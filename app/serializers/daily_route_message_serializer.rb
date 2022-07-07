class DailyRouteMessageSerializer < ActiveModel::Serializer
  attributes :id, :daily_route_id, :message, :message_time
end
