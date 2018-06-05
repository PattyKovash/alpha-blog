# frozen_string_literal:true

# Article model
class Article < ApplicationRecord
  validates :title,
    presence: true,
    length: { minimum: 3, maximum: 50 }
  validates :description,
    presence: true,
    length: { minimum: 10, maximum: 300 }

  def self.search(term)
    if term
      where('title LIKE ? OR description LIKE ?', "%#{term}%", "%#{term}%").order('created_at DESC')
    else
      all
    end
  end
end
