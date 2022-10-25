class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :shoe_id, :shoe_review
  belongs_to :shoe
end
