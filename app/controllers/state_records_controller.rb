class StateRecordsController < ApplicationController

	def get_record
		puts "params[:state]: " + params[:state]
		puts "in database: " 
		p StateRecord.find_by(state: params[:state]).inspect
		state_record = { 
			state: params[:state], 
			indices: StateRecord.find_by(state: params[:state]).indices
		}
		p state_record.inspect
		render json: state_record
	end



end