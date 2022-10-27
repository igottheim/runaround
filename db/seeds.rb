# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(first_name: "Ian", last_name: "Gottheim", username: "iansruns", password: "ian", password_confirmation:"ian")
User.create(first_name: "Felicia", last_name: "Gottheim",username: "feliciaruns", password: "cool", password_confirmation:"cool")
User.create(first_name: "Parry", last_name: "Huang",username: "Parrycool", password: "bubbletea", password_confirmation:"bubbletea")
User.create(first_name: "Leon", last_name: "Wong",username: "Leon25", password: "codemaster", password_confirmation: "codemaster")

Shoe.create(name: "Saucony Endorphin Speed 2", price: 160.00, image_url: "https://s7d4.scene7.com/is/image/WolverineWorldWide/S20688-25_1?wid=1600&hei=1320&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72")
Shoe.create(name: "Nike Air Zoom Alphafly NEXT%", price: 250.00, image_url: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/c34f29ca-b26a-4b6f-b8ca-769ce37e5ef3/alphafly-next.jpg")
Shoe.create(name: "Hoka Mach5", price: 140.00, image_url: "https://cdn.runningshoesguru.com/wp-content/uploads/2022/08/Hoka-Mach-5-pic-14-768x431.jpeg")
Shoe.create(name: "Hoka Rocket X", price: 200.00, image_url: "https://www.hoka.com/dw/image/v2/BDJD_PRD/on/demandware.static/-/Sites-HOKA-US-master/default/dw1c272872/images/transparent/1113532-EBBC_1.jpg?sw=1110&sh=1141&sm=fit&sfrm=png&bgcolor=f7f7f9")

Review.create(user_id:1, shoe_id:1, shoe_review: "This shoe is great for everyday use. It looks awesome too!")
Review.create(user_id:1, shoe_id:2, shoe_review: "This shoe is great for everyday use. It looks awesome too!")
Review.create(user_id:3, shoe_id:1, shoe_review: "This shoe makes me run so fast. I can't stop moving and grooving!")
Review.create(user_id:2, shoe_id:3, shoe_review: "This shoe is great for everyday use. It looks awesome too!")
Review.create(user_id:1, shoe_id:4, shoe_review: "Wow so cool")

puts "seed done"