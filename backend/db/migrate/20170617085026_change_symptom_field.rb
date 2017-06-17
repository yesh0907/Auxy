class ChangeSymptomField < ActiveRecord::Migration[5.1]
  def change
    change_column :records, :symptoms, :text
  end
end
