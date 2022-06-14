class AdultContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_id, :parent, :driver, :students, :buses
  
  belongs_to :user
  has_many :students
  has_many :driver_buses
  has_many :buses
end
