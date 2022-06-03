class ChangeDriverUserAccountIdToUserId < ActiveRecord::Migration[6.1]
  def change
    rename_column :drivers, :user_account_id, :user_id
  end
end
