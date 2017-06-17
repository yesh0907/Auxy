class ChangeUserField < ActiveRecord::Migration[5.1]
  def change
    rename_column :records, :user_id, :created_by
  end
end
