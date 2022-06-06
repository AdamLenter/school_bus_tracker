class ChangeParentsAndStudentsForeignKey < ActiveRecord::Migration[6.1]
  def change
    rename_column :parents_and_students, :parent_id, :adult_contact_id
  end
end
