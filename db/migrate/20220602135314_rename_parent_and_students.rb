class RenameParentAndStudents < ActiveRecord::Migration[6.1]
  def change
    rename_table :parent_and_students, :parents_and_students
  end
end
