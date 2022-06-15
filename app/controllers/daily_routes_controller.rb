class DailyRoutesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def create
        daily_route = DailyRoute.create!(daily_route_params);
        render json: daily_route, status: :created
    end

    private

    def daily_route_params
        params.permit(:date, :bus_route_id, :adult_contact_id, :to_or_from_school)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end