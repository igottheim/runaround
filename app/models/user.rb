class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :shoes, through: :reviews

    validates :username, uniqueness: true
    validates :username, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :password, confirmation:true
    validates :password_confirmation, presence:true

end
