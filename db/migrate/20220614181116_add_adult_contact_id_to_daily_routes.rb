class AddAdultContactIdToDailyRoutes < ActiveRecord::Migration[6.1]
  def change
    add_column :daily_routes, :adult_contact_id, :integer
  end
end
