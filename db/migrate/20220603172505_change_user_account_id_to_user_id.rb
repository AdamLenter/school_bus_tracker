class ChangeUserAccountIdToUserId < ActiveRecord::Migration[6.1]
  def change
    rename_column :parents, :user_account_id, :user_id
  end
end
