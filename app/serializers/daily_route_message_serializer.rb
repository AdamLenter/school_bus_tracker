class DailyRouteMessageSerializer < ActiveModel::Serializer
  attributes :id, :daily_route_id, :message, :updated_at
end
