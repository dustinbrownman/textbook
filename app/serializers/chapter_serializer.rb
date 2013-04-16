class ChapterSerializer < ActiveModel::Serializer
  embed :ids, :include => true
  attributes :id, :name, :number, :public, :created_at, :updated_at, :deleted_at
  has_many :sections, :key => :section_ids, :root => :sections
end
