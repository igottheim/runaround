# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(first_name: "Ian", last_name: "Gottheim", username: "iansruns", password: "ian")
User.create(first_name: "Felicia", last_name: "Gottheim",username: "feliciaruns", password: "cool")
User.create(first_name: "Parry", last_name: "Huang",username: "Parrycool", password: "bubbletea")
User.create(first_name: "Leon", last_name: "Wong",username: "Leon25", password: "codemaster")

Shoe.create(name: "Saucony Endorphin Speed 2", price: 160.00)
Shoe.create(name: "Nike Air Zoom Alphafly NEXT%", price: 250.00)
Shoe.create(name: "Hoka Mach5", price: 140.00)
Shoe.create(name: "Hoka Rocket X", price: 200.00)

Review.create(user_id:1, shoe_id:1, shoe_review: "This shoe is great for everyday use. It looks awesome too!")
Review.create(user_id:3, shoe_id:1, shoe_review: "This shoe makes me run so fast. I can't stop moving and grooving!")

puts "seed done"