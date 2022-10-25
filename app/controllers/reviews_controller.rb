class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
        
    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end
    
        def show
            review = Review.find(params[:id])
            render json: review, status: :ok
        end
    
        def update
            review = Review.find(params[:id])
            review.update!(review_params)
    
            render json: review, status: :ok
        end
    
        def create
            review = Review.create!(review_params)
            render json: review, status: :created
        end
    
        def destroy
            review = Review.find(params[:id])
            review.destroy
            head :no_content
        end
    
    
    
        private 
    
        def render_not_found
            render json: {error: "Shoe Not Found"}, status: :not_found
        end
    
        def record_invalid(invalid)
    
            render json: {errors: invalid.record.errors.full_messages}, status: :not_found
        end
    
        def review_params
            params.permit(:user_id, :shoe_id, :shoe_review)
        end
end
