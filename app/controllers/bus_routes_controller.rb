class BusRoutesController < ApplicationController
    def index
        bus_routes = BusRoute.all
        render json: bus_routes 
    end
end
