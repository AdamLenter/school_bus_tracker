class AdultContact < ApplicationRecord
    belongs_to :user
    has_many :students
end
