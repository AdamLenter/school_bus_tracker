class Bus < ApplicationRecord
    has_many :bus_routes
    has_many :schools, through: :bus_routes
    has_many :driver_buses
    has_many :adult_contacts, through: :driver_buses
end
