class User < ApplicationRecord
    has_secure_password
    
    def create
        byebug
    end
end
