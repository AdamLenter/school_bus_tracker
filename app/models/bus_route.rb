class BusRoute < ApplicationRecord
    belongs_to :bus
    belongs_to :school
    has_many :bus_stops
end
