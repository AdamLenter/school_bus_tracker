class BusesController < ApplicationController
    def index
        buses = Bus.all.order("number")
        render json: buses 
    end
end