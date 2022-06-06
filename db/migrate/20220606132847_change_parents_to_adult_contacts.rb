class ChangeParentsToAdultContacts < ActiveRecord::Migration[6.1]
  def change
    rename_table :parents, :adult_contacts
  end
end
