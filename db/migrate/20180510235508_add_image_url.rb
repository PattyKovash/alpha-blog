class AddImageUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :image_url, :text
  end
end
