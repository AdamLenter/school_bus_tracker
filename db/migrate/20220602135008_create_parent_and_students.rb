class CreateParentAndStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :parent_and_students do |t|
      t.integer :parent_id
      t.integer :student_id

      t.timestamps
    end
  end
end
