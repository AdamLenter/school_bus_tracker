class UsersController < ApplicationController
    before_action :authorize
    
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: ['adult_contact', 'adult_contact.buses', 'buses.bus_routes']
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end