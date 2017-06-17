class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :sex, :age

  has_many :records
end
