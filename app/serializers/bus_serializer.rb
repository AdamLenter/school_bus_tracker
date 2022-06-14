class BusSerializer < ActiveModel::Serializer
  attributes :id, :number, :bus_routes

  has_many :bus_routes
end
