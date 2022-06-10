class StudentsController < ApplicationController
    def create
        student = Student.create(student_params)

        render json: student, status: :created
    end

    private 

    def student_params
        params.permit(:first_name, :last_name, :bus_stop_id, :adult_contact_id)
    end
end