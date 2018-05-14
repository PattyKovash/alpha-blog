class CreateArticles2 < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :image_url
      t.text :description
      t.text :content
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end
end
