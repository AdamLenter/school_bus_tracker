class ChangeSchoolNameToSchool < ActiveRecord::Migration[6.1]
  def change
    rename_column :schools, :school_name, :name
  end
end
