class Shoe < ApplicationRecord

    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :name, uniqueness: true
    validates :price, presence: true
    validates :price,  numericality: { only_float: true }
    validates :image_url, presence: true


end
