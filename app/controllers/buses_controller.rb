class BusesController < ApplicationController
    def index
        buses = Bus.all
        render json: buses 
    end
end