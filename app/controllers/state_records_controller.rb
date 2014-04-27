class StateRecordsController < ApplicationController

	def get_record
		state_record = { 
			state: params[:state], 
			indices: StateRecord.find_by(state: params[:state]).indices
		}
		p state_record.inspect
		render json: state_record
	end



end