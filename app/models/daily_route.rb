class DailyRoute < ApplicationRecord
    belongs_to :adult_contact
    belongs_to :bus_route
    has_many :bus_stops
    has_many :daily_route_messages
end
