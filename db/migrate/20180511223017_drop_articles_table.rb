class DropArticlesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :articles
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
