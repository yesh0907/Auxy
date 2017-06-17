class Record < ApplicationRecord
  serialize :symptoms, Array

  validates_presence_of :created_by, :condition, :symptoms
end
