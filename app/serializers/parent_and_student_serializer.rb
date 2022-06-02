class ParentAndStudentSerializer < ActiveModel::Serializer
  attributes :id, :parent_id, :student_id
end
