class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_one :adult_contact
end
