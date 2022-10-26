class Review < ApplicationRecord
    belongs_to :shoe
    belongs_to :user

    validates :shoe_review, presence: true

end
