class SectionSerializer < ActiveModel::Serializer
  # embed :ids, :include => true
  attributes :id, :name, :number, :public, :chapter_id, :created_at, :updated_at, :deleted_at
  # has_many :lessons, :key => :lesson_ids, :root => :lessons
end
