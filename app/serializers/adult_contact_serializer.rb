class AdultContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_id, :parent, :driver, :buses
  
  belongs_to :user
  has_many :driver_buses
  has_many :buses
  has_many :bus_stops
end
