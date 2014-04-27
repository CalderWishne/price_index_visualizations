class IndicesController < ApplicationController

	def min_max
		puts "ajax params: "
		min_max = [Index.min(params[:year].to_i), Index.max(params[:year].to_i)]
		puts min_max
		min_max
		render json: min_max
	end
end