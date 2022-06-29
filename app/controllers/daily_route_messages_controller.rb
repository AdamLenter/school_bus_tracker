class DailyRouteMessagesController < ApplicationController
    def create
        daily_route_message = DailyRouteMessage.create(daily_route_message_params)
        render json: daily_route_message, status: :created
    end

    private
    def daily_route_message_params
        params.permit(:message, :daily_route_id)
    end

end
