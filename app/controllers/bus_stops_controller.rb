class BusStopsController < ApplicationController
    before_action :authorize

    def index
        bus_stops = BusStop.all
        render json: bus_stops 
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end
