require 'factory_girl_rails'
require 'ffaker'

FactoryGirl.create :author
FactoryGirl.create :student
8.times {FactoryGirl.create :lesson}
