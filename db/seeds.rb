require 'csv'


class PriceIndexCSVParser
	attr_reader :file, :years_arr
	def initialize(file)
		puts "in initialize"
		@file = file
		@years_arr = (1991..2010).to_a.map(&:to_s)
	end

	def parse
		puts 'in parse'
		CSV.foreach(file,
	                 headers: true,
	                 # header_converters: :symbol,
	                 # converters: :all
	               ) do |row|
			puts row['State']
			# byebug
	      state_record = StateRecord.create(state: row['State'].strip)
	      years_arr.each do |year|
	      	state_record.indices << Index.create(year: year.to_i, index: row[year].to_f)
	      end
	  end
    end
 end

 parser = PriceIndexCSVParser.new("db/price_index_data.csv")
 parser.parse