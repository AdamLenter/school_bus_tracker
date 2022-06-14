class AdultContact < ApplicationRecord
    belongs_to :user
    has_many :students
    has_many :driver_buses
    has_many :buses, through: :driver_buses
    has_many :daily_routes
end
