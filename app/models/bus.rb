class Bus < ApplicationRecord
    has_many :bus_routes
    has_many :schools, through: :bus_routes
end
