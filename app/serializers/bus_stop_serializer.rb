class BusStopSerializer < ActiveModel::Serializer
  attributes :id, :bus_route_id, :location_description, :expected_drop_off_time, :expected_pick_up_time, :bus_route

  belongs_to :bus_route
  has_many :students
end
