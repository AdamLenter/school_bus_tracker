class DailyRouteStopTimesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def where
        daily_route_stop_times =DailyRouteStopTime.where(daily_route_id: params[:daily_route_id]);
        render json: daily_route_stop_times, status: :ok
    end

    def create
        daily_route_stop_time = DailyRouteStopTime.create!(daily_route_stop_params)
        render json: daily_route_stop_time, status: :created
    end

    private

    def daily_route_stop_params
        params.permit(:daily_route_id, :bus_stop_id, :pick_up_or_drop_off_time)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Route not found" }, status: :not_found
      end
    
    
end
