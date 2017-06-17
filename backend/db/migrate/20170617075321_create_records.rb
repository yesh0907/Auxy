class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.references :user
      t.string :condition
      t.text :symptoms

      t.timestamps
    end
  end
end
