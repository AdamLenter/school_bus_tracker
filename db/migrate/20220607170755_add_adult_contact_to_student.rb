class AddAdultContactToStudent < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :adult_contact_id, :integer
  end
end
