class DriverBusSerializer < ActiveModel::Serializer
  attributes :id, :adult_contact_id, :bus_id, :bus
  
  belongs_to :adult_contact
  belongs_to :bus
end
