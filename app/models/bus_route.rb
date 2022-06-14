class BusRoute < ApplicationRecord
    belongs_to :bus
    belongs_to :school
    has_many :bus_stops
    has_many :daily_routes
end
