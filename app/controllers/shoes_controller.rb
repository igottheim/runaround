class ShoesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    
    def index
        shoes = Shoe.all
        render json: shoes, status: :ok
    end

    def show
        shoe = Shoe.find(params[:id])
        render json: shoe, status: :ok
    end

    def update
        shoe = Shoe.find(params[:id])
        shoe.update!(shoe_params)

        render json: shoe, status: :ok
    end

    def create
        shoe = Shoe.create!(shoe_params)
        render json: shoe, status: :created
    end

    def destroy
        shoe = Shoe.find(params[:id])
        shoe.reviews.destroy
        shoe.destroy

        head :no_content
    end



    private 

    def render_not_found
        render json: {error: "Shoe Not Found"}, status: :not_found
    end

    def record_invalid(invalid)

        render json: {errors: invalid.record.errors.full_messages}, status: :not_found
    end

    def shoe_params
        params.permit(:name, :price)
    end
end
