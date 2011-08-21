task :default => [:deploy]
desc "Task Deploy"
task :deploy do
  system "git push origin master"
  system "git push heroku"
end
