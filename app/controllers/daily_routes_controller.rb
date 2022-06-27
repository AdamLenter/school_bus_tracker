class DailyRoutesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def create
        daily_route = DailyRoute.find_by(daily_route_params)
        
        if(!daily_route)
            daily_route = DailyRoute.create!(daily_route_params)
        end

        render json: daily_route, status: :ok
    end

    def where 
        daily_route = DailyRoute.find_by(daily_route_params)
        render json: daily_route, status: :ok
    end

    private

    def daily_route_params
        params.permit(:date, :bus_route_id, :adult_contact_id, :to_or_from_school, :route_start_time)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
