class CreateShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :shoes do |t|
      t.string :name
      t.integer :price
      t.string :image_url

      t.timestamps
    end
  end
end
