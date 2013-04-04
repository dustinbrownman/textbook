class LessonSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :number, :public, :section_id, :created_at, :updated_at, :deleted_at
end
