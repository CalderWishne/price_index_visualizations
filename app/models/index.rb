class Index < ActiveRecord::Base
	belongs_to :state_record

	def self.min(year)
		self.indices_for(year).map(&:index).min
	end

	def self.max(year)
		self.indices_for(year).map(&:index).max		
	end

	def self.indices_for(year)
		self.all.select { |idx_obj| idx_obj.year == year }
	end


end
