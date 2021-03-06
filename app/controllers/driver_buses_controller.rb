class DriverBusesController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        driverBus = DriverBus.create!(driver_bus_params)
        render json: driverBus, status: :created
    end

    private

    def driver_bus_params
        params.permit(:adult_contact_id, :bus_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
