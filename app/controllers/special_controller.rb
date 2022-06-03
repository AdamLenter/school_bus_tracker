class SpecialController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
            if params[:user_type] === "Parent"
                user.parent = Parent.create(parent_driver_params)
            else
                user.driver = Driver.create(parent_driver_params)
            end
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def parent_driver_params
        params.permit(:first_name, :last_name)
    end
        
end