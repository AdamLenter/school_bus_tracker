class AdultContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_id, :parent, :driver
  
  belongs_to :user
end
