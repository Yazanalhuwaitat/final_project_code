Dir[File.join(Rails.root, "db", "seeds", "*.rb")].sort.each do |seed|
  puts "seeding - #{seed}. loading seeds, for real!"
  load seed
end

### PUT YOUR SEEDS BELOW THIS LINE:

user_1=User.find_or_create_by!(id: 1, email: 'admin@zenhr.com') do |user|
  user.password = 'password'
  user.role = 'admin'
end

user_2=User.find_or_create_by!(id: 2, email: 'user_1@zenhr.com') do |user|
  user.password = 'password'
  user.role = 'member'
end

user_3=User.find_or_create_by!(id: 3, email: 'user_2@zenhr.com') do |user|
  user.password = 'password'
  user.role = 'member'
end


blog_1=Blog.find_or_create_by!( id: 1, user_id: 2, title: 'blog title 1', body: 'blog body 1' )
blog_2=Blog.find_or_create_by!( id: 2, user_id: 3, title: 'blog title 2', body: 'blog body 2' )
blog_3=Blog.find_or_create_by!( id: 3, user_id: 3, title: 'blog title 3', body: 'blog body 3' )


tag_1=Tag.find_or_create_by!( id: 1, name: 'Funny' )
tag_2=Tag.find_or_create_by!( id: 2, name: 'Professional' )


blog_1.tags << Tag.find([1, 2])  
blog_2.tags << Tag.find(2)       # blog 2 has Professional
