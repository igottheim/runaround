class CreateSerializers < ActiveRecord::Migration[7.0]
  def change
    create_table :serializers do |t|
      t.string :Sessions

      t.timestamps
    end
  end
end
