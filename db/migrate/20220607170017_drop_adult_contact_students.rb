class DropAdultContactStudents < ActiveRecord::Migration[6.1]
  def change
    drop_table :adult_contact_students
  end
end
