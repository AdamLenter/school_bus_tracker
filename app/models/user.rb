class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true

    validates :password, presence: true
    has_one :adult_contact
    has_many :students, through: :adult_contact
    has_many :driver_buses, through: :adult_contact
    has_many :buses, through: :driver_buses
    has_many :bus_routes, through: :buses
end
