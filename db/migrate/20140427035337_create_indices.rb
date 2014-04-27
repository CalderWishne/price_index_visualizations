class CreateIndices < ActiveRecord::Migration
  def change
    create_table :indices do |t|
      t.integer :year
      t.float :index
      t.integer :state_record_id

      t.timestamps
    end
  end
end
