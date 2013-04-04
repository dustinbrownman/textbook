class RenameContentToBody < ActiveRecord::Migration
  def change
    rename_column :lessons, :content, :body
  end
end
