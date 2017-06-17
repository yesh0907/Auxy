class UsersController < ApplicationController
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  def show
    @user = User.find(params[:id])
    json_response(@user)
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation, :age, :sex)
  end
end
