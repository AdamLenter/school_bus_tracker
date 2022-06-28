class StudentsController < ApplicationController
    before_action :authorize

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def create
        student = Student.create!(student_params)

        render json: student, status: :created
    end

    def where
        students = Student.where(adult_contact_id: params[:adult_contact_id])
        render json: students, status: :ok
    end

    def destroy
        student = Student.find(params[:id])
        student.destroy
        head :no_content
    end

    private 

    def student_params
        params.permit(:first_name, :last_name, :bus_stop_id, :adult_contact_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end