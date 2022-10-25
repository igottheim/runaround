class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
        
    def index
        users = User.all
        render json: users, status: :ok
    end
    
        def show
            user = User.find(params[:id])
            render json: user, status: :ok
        end
    
        def update
            user = User.find(params[:id])
            user.update!(user_params)
    
            render json: user, status: :ok
        end
    
        def create

            def create
              user = User.create!(user_params)
              session[:user_id] = user.id
              render json: user, status: :created
            end
        end
    
        def destroy
            user = User.find(params[:id])
            user.reviews.destroy
            user.destroy
    
            head :no_content
        end
    
    
    
        private 
    
        def render_not_found
            render json: {error: "User Not Found"}, status: :not_found
        end
    
        def record_invalid(invalid)
    
            render json: {errors: invalid.record.errors.full_messages}, status: :not_found
        end
    
        def user_params
            params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
        end
end
