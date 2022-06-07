class RenameParentsAndStudentsTable < ActiveRecord::Migration[6.1]
  def change
    rename_table :parents_and_students, :adult_contact_students
  end
end
