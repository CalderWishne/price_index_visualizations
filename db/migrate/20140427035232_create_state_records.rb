class CreateStateRecords < ActiveRecord::Migration
  def change
    create_table :state_records do |t|
      t.string :state

      t.timestamps
    end
  end
end
