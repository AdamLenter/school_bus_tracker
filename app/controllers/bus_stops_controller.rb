class BusStopsController < ApplicationController
    def index
        bus_stops = BusStop.all
        render json: bus_stops 
    end
end
