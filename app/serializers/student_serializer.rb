class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bus_stop_id

  belongs_to :adult_contact
end
