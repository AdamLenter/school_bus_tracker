class AdultContactsController < ApplicationController
    before_action :authorize

    def show
        user = User.find_by(session[:user_id])
        byebug
    end

end
