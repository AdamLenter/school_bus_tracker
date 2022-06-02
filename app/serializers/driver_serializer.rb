class DriverSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_account_id
end
