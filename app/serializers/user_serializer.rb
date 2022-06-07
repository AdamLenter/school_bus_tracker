class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_one :adult_contact
  has_many :students, through: :adult_contact
end
