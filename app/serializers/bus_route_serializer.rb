class BusRouteSerializer < ActiveModel::Serializer
  attributes :id, :name, :bus_id, :school_id, :school

  belongs_to :bus
  belongs_to :school
end
