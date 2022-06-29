class DailyRouteSerializer < ActiveModel::Serializer
  attributes :id, :adult_contact_id, :bus_route_id, :date, :route_start_time, :to_or_from_school

  has_many :daily_route_messages
end
