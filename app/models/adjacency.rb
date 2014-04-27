class Adjacency < ActiveRecord::Base
	belongs_to :parent, class_name: "StateRecord"
	belongs_to :child, class_name: "StateRecord"
end
