class ChangeBusNumberToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :buses, :number, 'integer USING CAST(number AS integer)'
  end
end
