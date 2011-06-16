require "rubygems"
require "rake"

task :default => [:deploy]

task :deploy do
  git push origin master
  git push heroku
end
