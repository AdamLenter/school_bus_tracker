class SpecialController < ApplicationController
    def create
        user = User.create(user_params)
        if user.valid?
           user.adult_contact = AdultContact.create(adult_contact_params)
           render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def adult_contact_params
        params.permit(:first_name, :last_name, :parent, :driver)
    end
        
end