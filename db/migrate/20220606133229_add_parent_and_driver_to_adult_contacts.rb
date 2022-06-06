class AddParentAndDriverToAdultContacts < ActiveRecord::Migration[6.1]
  def change
    add_column :adult_contacts, :parent, :boolean
    add_column :adult_contacts, :driver, :boolean
  end
end
