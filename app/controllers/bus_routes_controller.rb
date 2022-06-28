class BusRoutesController < ApplicationController
    before_action :authorize

    def index
        bus_routes = BusRoute.all
        render json: bus_routes 
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
