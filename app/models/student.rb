class Student < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :adult_contact_id, presence: true
    validates :bus_stop_id, presence: true
    
    belongs_to :adult_contact
    belongs_to :bus_stop
end
