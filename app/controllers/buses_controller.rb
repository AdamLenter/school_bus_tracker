class BusesController < ApplicationController
    before_action :authorize

    def index
        buses = Bus.all.order("number")
        render json: buses 
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end