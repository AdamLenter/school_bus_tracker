class BusStopSerializer < ActiveModel::Serializer
  attributes :id, :bus_route_id, :location_description, :expected_drop_off_time, :expected_pick_up_time

  belongs_to :bus_route
end
