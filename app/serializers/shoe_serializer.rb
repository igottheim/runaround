class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image_url

  has_many :reviews

end
