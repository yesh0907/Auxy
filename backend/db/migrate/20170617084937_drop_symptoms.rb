class DropSymptoms < ActiveRecord::Migration[5.1]
  def change
    drop_table :symptoms
  end
end
