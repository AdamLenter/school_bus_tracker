class SchoolsController < ApplicationController
    before_action :authorize

    def index
        schools = School.all
        render json: schools 
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end