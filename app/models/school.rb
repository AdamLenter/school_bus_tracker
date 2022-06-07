class School < ApplicationRecord
    has_many :bus_routes
    has_many :buses, through: :bus_routes
end
