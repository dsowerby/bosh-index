var boshRecipes = [];
var bishBashBoshRecipes = [

    { location: 'Bish Bash Bosh (Waterstones exclusive) p. ii', name: 'Thai Green Curry', type: ''},
    { location: 'Bish Bash Bosh (Waterstones exclusive) p. iv', name: 'Moreish Moussaka', type: ''},
    { location: 'Bish Bash Bosh (Waterstones exclusive) p. viii', name: 'Xim Xim', type: ''},
    { location: 'Bish Bash Bosh (Waterstones exclusive) p. xi', name: 'Cauliflower Alfredo', type: ''},
    { location: 'Bish Bash Bosh (Waterstones exclusive) p. xii', name: 'Baked BBQ Taquitos', type: ''},
    { location: 'Bish Bash Bosh (Waterstones exclusive) p. xv', name: 'Cinnamon Swirls', type: ''},

    { location: 'Bish Bash Bosh p. 28', name: 'One-Tray Pasanda', type: 'curry indian'},
    { location: 'Bish Bash Bosh p. 31', name: 'Turbo Tortila', type: ''},
    { location: 'Bish Bash Bosh p. 32', name: 'Super-Speedy Spaghetti', type: ''},
    { location: 'Bish Bash Bosh p. 35', name: 'Tom Kha', type: 'asian'},
    { location: 'Bish Bash Bosh p. 36', name: 'Vietnamese Sticky Tofu', type: 'asian'},
    { location: 'Bish Bash Bosh p. 39', name: 'Faux Gras', type: 'fois gras'},
    { location: 'Bish Bash Bosh p. 41', name: 'American Classic Sandwich', type: ''},
    { location: 'Bish Bash Bosh p. 42', name: 'English Ploughman\'s Sandwich', type: ''},
    { location: 'Bish Bash Bosh p. 42', name: 'Indian-Style Chutney Sandwich', type: ''},
    { location: 'Bish Bash Bosh p. 43', name: 'Home-Made Melty Cheese', type: ''},
    { location: 'Bish Bash Bosh p. 44', name: 'Singapore Fried Vermicelli', type: ''},
    { location: 'Bish Bash Bosh p. 47', name: 'Guacajacks', type: ''},
    { location: 'Bish Bash Bosh p. 47', name: 'Home-made Chilli Oil', type: ''},
    { location: 'Bish Bash Bosh p. 48', name: 'Quick Quesadillas', type: ''},
    { location: 'Bish Bash Bosh p. 50', name: 'Bangin\' Burgers', type: ''},
    { location: 'Bish Bash Bosh p. 51', name: 'L.A. Guacburger', type: ''},
    { location: 'Bish Bash Bosh p. 54', name: 'Broccauliflower Cheese', type: ''},
    { location: 'Bish Bash Bosh p. 57', name: 'Aubergine Katsu', type: ''},
    { location: 'Bish Bash Bosh p. 58', name: 'Greek Gyros', type: ''},
    { location: 'Bish Bash Bosh p. 60', name: 'Piri Piri Chorizo Bake', type: ''},
    { location: 'Bish Bash Bosh p. 61', name: 'Easy Chorizo', type: ''},
    { location: 'Bish Bash Bosh p. 64', name: 'Speedy Hoisin Mushrooms', type: ''},
    { location: 'Bish Bash Bosh p. 68', name: 'Bún Bò Hué', type: ''},
    { location: 'Bish Bash Bosh p. 70', name: 'Ian\'s Delightful Daal & Roti', type: ''},
    { location: 'Bish Bash Bosh p. 74', name: 'Curry House Jalfrezi', type: ''},
    { location: 'Bish Bash Bosh p. 77', name: 'Ultimate Falafel Wrap', type: ''},
    { location: 'Bish Bash Bosh p. 78', name: 'Falafels', type: ''},
    { location: 'Bish Bash Bosh p. 78', name: '3-ingredients Flatbreads', type: ''},
    { location: 'Bish Bash Bosh p. 79', name: 'Chilli Jam', type: ''},
    { location: 'Bish Bash Bosh p. 80', name: 'Holy Trinity Louisiana Gumbo', type: ''},
    { location: 'Bish Bash Bosh p. 83', name: 'Tofish Finger Sandwich', type: ''},
    { location: 'Bish Bash Bosh p. 84', name: 'Mashy Mashy Peas', type: ''},
    { location: 'Bish Bash Bosh p. 84', name: 'Speedy Tartare Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 87', name: 'Giant BLT', type: ''},
    { location: 'Bish Bash Bosh p. 88', name: 'Sweet Potato Tikka Masala', type: 'indian curry'},
    { location: 'Bish Bash Bosh p. 91', name: 'Mini Mushroom Pies', type: ''},
    { location: 'Bish Bash Bosh p. 92', name: 'Pulled Jackfruit Sandwich', type: ''},
    { location: 'Bish Bash Bosh p. 95', name: 'Bosh! Bangers with Mash & Quick Onion Gravy', type: ''},
    { location: 'Bish Bash Bosh p. 95', name: 'Bosh! Bangers', type: ''},
    { location: 'Bish Bash Bosh p. 96', name: 'Incredible Mash', type: ''},
    { location: 'Bish Bash Bosh p. 97', name: 'Quick Onion Gravy', type: ''},
    { location: 'Bish Bash Bosh p. 98', name: 'Roast Sweet Potato Tagine', type: ''},
    { location: 'Bish Bash Bosh p. 101', name: 'Dough 3-ways', type: ''},
    { location: 'Bish Bash Bosh p. 102', name: 'Margherita Pizza', type: ''},
    { location: 'Bish Bash Bosh p. 104', name: 'Cheeseburger Dough Balls', type: ''},
    { location: 'Bish Bash Bosh p. 107', name: 'Kebabish Tandoori Special', type: ''},
    { location: 'Bish Bash Bosh p. 108', name: 'Shephard\'s Pie', type: ''},
    { location: 'Bish Bash Bosh p. 112', name: 'Classic Lasagne', type: ''},
    { location: 'Bish Bash Bosh p. 115', name: 'Seaside Roll with salsa verde & New Potatoes', type: ''},
    { location: 'Bish Bash Bosh p. 116', name: 'Pan-Fried Seitan Steak with Secret Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 117', name: 'Café de Paris Secret Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 121', name: 'Henry\'s Biryani with Coriander Chutney', type: ''},
    { location: 'Bish Bash Bosh p. 122', name: 'Coriander Chutney', type: ''},
    { location: 'Bish Bash Bosh p. 123', name: 'Easy Peasy Roast Dinner', type: ''},
    { location: 'Bish Bash Bosh p. 126', name: 'Pulled Jackfruit', type: ''},
    { location: 'Bish Bash Bosh p. 126', name: 'Roasted Root Vegetables', type: ''},
    { location: 'Bish Bash Bosh p. 127', name: 'Herb Oil', type: ''},
    { location: 'Bish Bash Bosh p. 127', name: 'Red Wine Gravy', type: ''},
    { location: 'Bish Bash Bosh p. 128', name: 'Ultimate Nut Roast', type: ''},
    { location: 'Bish Bash Bosh p. 130', name: 'Bosh Xmas', type: ''},
    { location: 'Bish Bash Bosh p. 134', name: 'Christmas Cris-Cross', type: ''},
    { location: 'Bish Bash Bosh p. 137', name: 'Brussels Sprouts with Maple Mushrooms', type: ''},
    { location: 'Bish Bash Bosh p. 137', name: 'Baners in Blankets', type: ''},
    { location: 'Bish Bash Bosh p. 138', name: 'Clementine Roasted Root Vegetables', type: ''},
    { location: 'Bish Bash Bosh p. 141', name: 'Crispy, Fluffy, Perfect Roast Potatoes', type: ''},
    { location: 'Bish Bash Bosh p. 142', name: 'Ulitimate Roast Stuffing Balls', type: ''},
    { location: 'Bish Bash Bosh p. 143', name: 'Perfect Gravy', type: ''},
    { location: 'Bish Bash Bosh p. 144', name: 'Strawberry Daiquiri Slushy', type: ''},
    { location: 'Bish Bash Bosh p. 144', name: 'Naughty Agua Fresca', type: ''},
    { location: 'Bish Bash Bosh p. 145', name: 'Cheeky Mango Lassi', type: ''},
    { location: 'Bish Bash Bosh p. 145', name: 'Fruity Sangria', type: ''},
    { location: 'Bish Bash Bosh p. 150', name: 'Camembosh Hedgehog', type: ''},
    { location: 'Bish Bash Bosh p. 153', name: 'Sushi Cupcakes', type: ''},
    { location: 'Bish Bash Bosh p. 154', name: 'Loaded Potato Nachos', type: ''},
    { location: 'Bish Bash Bosh p. 155', name: 'Sour Cream', type: ''},
    { location: 'Bish Bash Bosh p. 155', name: 'Quick Salsa', type: ''},
    { location: 'Bish Bash Bosh p. 155', name: 'Green Chilli Guacamole', type: ''},
    { location: 'Bish Bash Bosh p. 158', name: 'Satay Summer Rolls', type: ''},
    { location: 'Bish Bash Bosh p. 160', name: 'Wild West Wings', type: ''},
    { location: 'Bish Bash Bosh p. 161', name: 'De La Seol Chilli Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 161', name: 'Wild West Chilli Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 165', name: 'Party Poppers with Bosh! BBQ Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 166', name: 'Bosh! BBQ Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 169', name: 'Big Bad Bhajis with Spicy Tomato Chutney', type: ''},
    { location: 'Bish Bash Bosh p. 170', name: 'BBQ Beans with Mushrrom Burnt Ends', type: ''},
    { location: 'Bish Bash Bosh p. 173', name: 'Notting Hill Patties', type: ''},
    { location: 'Bish Bash Bosh p. 174', name: 'Texan Potato Salad', type: ''},
    { location: 'Bish Bash Bosh p. 177', name: 'Crumchy Cali Slaw', type: ''},
    { location: 'Bish Bash Bosh p. 178', name: 'Double-Cooked Rosemary Chips with Quick Aioli', type: ''},
    { location: 'Bish Bash Bosh p. 180', name: 'Roast Sweet Potato Mash', type: ''},
    { location: 'Bish Bash Bosh p. 181', name: 'Roast Beetroot Mash', type: ''},
    { location: 'Bish Bash Bosh p. 181', name: 'Mustard Mash', type: ''},
    { location: 'Bish Bash Bosh p. 186', name: 'Orange, Fennel & Watercress Salad', type: ''},
    { location: 'Bish Bash Bosh p. 189', name: 'Thanksgiving Salad', type: ''},
    { location: 'Bish Bash Bosh p. 190', name: 'Spicy Thai Salad', type: ''},
    { location: 'Bish Bash Bosh p. 193', name: 'Spinach & Ricotta Zucchinioli', type: ''},
    { location: 'Bish Bash Bosh p. 194', name: 'Mega Mezze Platter', type: ''},
    { location: 'Bish Bash Bosh p. 195', name: 'Kofta', type: ''},
    { location: 'Bish Bash Bosh p. 195', name: 'Tabbouleh', type: ''},
    { location: 'Bish Bash Bosh p. 196', name: 'Batata Harra (Spicy Potatoes)', type: ''},
    { location: 'Bish Bash Bosh p. 196', name: 'Lemon & Coriander Hummus', type: ''},
    { location: 'Bish Bash Bosh p. 197', name: 'Baba Ganoush', type: ''},
    { location: 'Bish Bash Bosh p. 201', name: 'Bang Bang Noodle Salad', type: ''},
    { location: 'Bish Bash Bosh p. 202', name: 'Romesco Salad', type: ''},
    { location: 'Bish Bash Bosh p. 205', name: 'Crunchy Carnival Salad', type: ''},
    { location: 'Bish Bash Bosh p. 206', name: 'Green Breakfast Smoothies', type: ''},
    { location: 'Bish Bash Bosh p. 207', name: 'Piri Piri Protein Lunchbox', type: ''},
    { location: 'Bish Bash Bosh p. 208', name: 'Home-Made Sambal Chilli Sauce', type: ''},
    { location: 'Bish Bash Bosh p. 208', name: 'Home-Made Tumeric Hummus', type: ''},
    { location: 'Bish Bash Bosh p. 209', name: 'Easy Tomato Pasta with Griddled Greens', type: ''},
    { location: 'Bish Bash Bosh p. 214', name: 'Banana Bread Doughnuts', type: 'donuts'},
    { location: 'Bish Bash Bosh p. 216', name: 'Classic Chocolate', type: 'ice cream'},
    { location: 'Bish Bash Bosh p. 217', name: 'Banofee with Caramel Sauce', type: 'ice cream'},
    { location: 'Bish Bash Bosh p. 218', name: 'Clean Slate Vanilla', type: 'ice cream'},
    { location: 'Bish Bash Bosh p. 222', name: 'New York-Style Baked Strawberry Cheesecake', type: ''},
    { location: 'Bish Bash Bosh p. 224', name: 'Banana Chocolate Swirl Pie', type: ''},
    { location: 'Bish Bash Bosh p. 228', name: 'Empire Biscuits', type: ''},
    { location: 'Bish Bash Bosh p. 231', name: 'Banana Bread Blondies', type: ''},
    { location: 'Bish Bash Bosh p. 232', name: 'Bakewell Tart', type: ''},
    { location: 'Bish Bash Bosh p. 233', name: 'Bosh! Quick Custard', type: ''},
    { location: 'Bish Bash Bosh p. 233', name: 'Poached Rhubarb', type: ''},
    { location: 'Bish Bash Bosh p. 236', name: 'Mini Bnoffee Meringues', type: ''},
    { location: 'Bish Bash Bosh p. 238', name: 'Chocolate Mirror Cake', type: ''},
    { location: 'Bish Bash Bosh p. 242', name: 'Lemon Drizle Loaf Cake', type: ''},
    { location: 'Bish Bash Bosh p. 245', name: 'Classic Victoria Sponge', type: ''},
    { location: 'Bish Bash Bosh p. 247', name: 'Knickerbocker Glory', type: ''},
    { location: 'Bish Bash Bosh p. 248', name: 'Banana Syrup', type: ''},
    { location: 'Bish Bash Bosh p. 248', name: 'Chocolate Syrup', type: ''},
    { location: 'Bish Bash Bosh p. 248', name: 'Candied Peanuts', type: ''},
    { location: 'Bish Bash Bosh p. 249', name: 'Raspberry Syrup', type: ''},
    { location: 'Bish Bash Bosh p. 249', name: 'Soft Whipped Cream', type: ''},
    { location: 'Bish Bash Bosh p. 250', name: 'Yule Log', type: ''},
    { location: 'Bish Bash Bosh p. 252', name: 'Notella Christmas Tree', type: ''},
    { location: 'Bish Bash Bosh p. 258', name: 'Big Breakfast Bagel', type: ''},
    { location: 'Bish Bash Bosh p. 260', name: 'Almod Croissants', type: ''},
    { location: 'Bish Bash Bosh p. 261', name: 'Chocolate Croissants', type: ''},
    { location: 'Bish Bash Bosh p. 265', name: 'Nuevos Rancheros', type: ''},
    { location: 'Bish Bash Bosh p. 266', name: 'Lushy Nut Butter', type: ''},
    { location: 'Bish Bash Bosh p. 269', name: 'French Toast', type: ''},
    { location: 'Bish Bash Bosh p. 270', name: 'Baking Tray Breakfast', type: ''},
    { location: 'Bish Bash Bosh p. 273', name: 'Cinnamon Swirl Pancakes', type: ''},
    { location: 'Bish Bash Bosh p. 274', name: 'Maple & Pecan Pastries', type: ''},
];
var boshHealthyVeganRecipes = [
    { location: 'BOSH! Healthy Vegan p. 67', name: 'Ultimate Veg Tacos', type: 'lighter mexican'},
    { location: 'BOSH! Healthy Vegan p. 69', name: 'Tofu Yaki BOSH!', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 70', name: 'Puttanesca Potato Stew', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 73', name: 'Healthy Saag Paneer', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 75', name: 'Nasi Goreng', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 76', name: 'Keema Aloo', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 79', name: 'Spicy Sichuan-Style Shiitake Stir-Fry', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 80', name: 'Tom Yummo Soup', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 83', name: 'Mixed Veg Katsu Curry', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 84', name: 'Crispy Tofu Satay Bites', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 86', name: 'Indian Spiced Tomato Soup', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 89', name: 'Mushroom Soup', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 90', name: 'Spicy Lentil Soup', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 93', name: 'Zingy Watermelon Salad', type: 'lighter'},
    { location: 'BOSH! Healthy Vegan p. 97', name: 'Niçoise Salad', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 98', name: 'BOSH! Burnt Eggplant', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 101', name: 'Satay Salad', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 103', name: 'Caesar Salad', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 104', name: 'Middle Eastern Spiced Chickpea Salad', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 107', name: 'Salsa Verde Couscous', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 108', name: 'Rainbow Stir-Fry', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 111', name: 'Oven-Roasted “Salmon” Tofu Steaks', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 112', name: 'Green Shakshuka', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 115', name: 'BBQ Portobello & Potato Salad', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 117', name: 'Super Sushi Salad', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 118', name: 'Jerk Jackfruit Salad \'n\' Beans', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 120', name: 'Thai Tempeh Salad', type: 'greener'},
    { location: 'BOSH! Healthy Vegan p. 125', name: 'Braised Jack Chili', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 127', name: 'Feijoada & Slaw', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 128', name: 'Hearty, Herby Stew', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 131', name: 'Jammin\' Jambalaya', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 133', name: 'Bangin\' Bolognese', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 134', name: '“Chorizo” Pasta', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 137', name: 'Pasta e Fagioli', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 138', name: 'BBQ Sloppy Jackets', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 141', name: 'Total Protein Chili', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 142', name: 'Thai No-Fishcakes', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 144', name: 'Goan-Style Curry', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 147', name: 'Asian-Style Risotto', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 148', name: 'Cat\'s Curryflower', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 150', name: 'Emj\'s Hearty Hotpot', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 153', name: 'Sunny Sri Lankan Curry', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 154', name: 'Salad Lasagna', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 159', name: 'Easy & Healthy Roast Dinner', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 163', name: 'Meaty Mushroom Pie', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 165', name: 'Healthier Pizza Dough', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 166', name: 'Pepperoni & Pesto Pizza', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 168', name: 'Texas BBQ Pizza', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 169', name: 'BBQ Bourbon Sauce', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 172', name: 'Hoisin Jackfruit Pizza', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 173', name: 'Hoisin Sauce', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 175', name: 'Legendary Rendang', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 178', name: 'Not-That-Naughty Burger with Frisbee Fries', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 182', name: 'Meatballs with Mash & Gravy', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 186', name: 'Crispy, Sticky Tofu with Bok Choy Wok-Tossed Rice', type: 'heartier'},
    { location: 'BOSH! Healthy Vegan p. 191', name: 'Anna\'s Blueberry Toast Loaf', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 193', name: 'Chocolate & Banana Muffins', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 194', name: 'Salted Caramel Apple Crumble & Custard', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 197', name: 'Banana & Chocolate Mousse', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 198', name: 'Bakewell BOSH! Balls', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 198', name: 'Cookie Dough BOSH! Balls', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 199', name: 'BOSH! Brownie Balls', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 203', name: 'Jacked Oat Bars', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 204', name: 'Banana Berry Ice Cream', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 207', name: 'PB&J Thumbprint Cookies', type: 'treats'},
    { location: 'BOSH! Healthy Vegan p. 210', name: 'Green Goddess Smoothie', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 210', name: 'Berry Boost Smoothie', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 211', name: 'Banana, Oat & Nut Smoothie', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 214', name: 'Charlie\'s Sausage Scramble', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 217', name: 'Tropical Overnight Oats', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 219', name: 'Mexi Breakfast', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 220', name: 'Maple Pecan Granola', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 223', name: 'Barcelona Breakfast Burrito', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 224', name: 'BOSH! Bars', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 227', name: 'Breakfast of Champignons', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 229', name: 'Summer Berry Granola Bowl', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 230', name: 'Healthy Banana French Toast', type: 'breakfast' },
    { location: 'BOSH! Healthy Vegan p. 232', name: 'Garden Party Breakfast Bowl', type: 'breakfast' },
];
var speedyBoshRecipes = [
    { location: 'Speedy Bosh p. 29', name: 'Cheat\'s Toad in the Hole with Curry Gravy', type: 'british' },
    { location: 'Speedy Bosh p. 30', name: 'Aubergine & Lentil Meatball Pasta', type: 'italian' },
    { location: 'Speedy Bosh p. 32', name: 'Deep, Dark & Smoky Chilli', type: 'meixcan' },
    { location: 'Speedy Bosh p. 36', name: 'Black Olive Pesto Pasta', type: 'italian' },
    { location: 'Speedy Bosh p. 39', name: 'Cauliflower Schnitzel - 3 ways', type: '' },
    { location: 'Speedy Bosh p. 42', name: 'Gochujang Schnitzel with Rice & Kimchi', type: '' },
    { location: 'Speedy Bosh p. 43', name: 'Paprika Schnitzel with Mass & Watercress', type: '' },
    { location: 'Speedy Bosh p. 44', name: 'Ivory Coast Squash & Peanut Stew', type: '' },
    { location: 'Speedy Bosh p. 46', name: 'Robinson\'s Rarebit', type: '' },
    { location: 'Speedy Bosh p. 48', name: 'Frying Pan Samosa Pie', type: 'indian british' },
    { location: 'Speedy Bosh p. 51', name: 'Butternut Squash Carbonara with Crispy Sage', type: 'italian'},
    { location: 'Speedy Bosh p. 52', name: 'Thanksgiving Roast', type: 'roots parsnips sweet potato pecan pie corn red cabbage cranberry ' },
    { location: 'Speedy Bosh p. 52 (part of Thanksgiving Roast)', name: 'Sweet Potato & Pecan Pie', type: '' },
    { location: 'Speedy Bosh p. 52 (part of Thanksgiving Roast)', name: 'Maple Roasted Roots', type: '' },
    { location: 'Speedy Bosh p. 52 (part of Thanksgiving Roast)', name: 'Buttered Corn & Parsley', type: '' },
    { location: 'Speedy Bosh p. 52 (part of Thanksgiving Roast)', name: 'Red Cabbage & Cranberry Dressing', type: '' },
    { location: 'Speedy Bosh p. 52 (part of Thanksgiving Roast)', name: 'Pan-fried Seitan', type: '' },
    { location: 'Speedy Bosh p. 57', name: 'Lemon, Courgette & Crispy Caper Pasta', type: 'british ' },
    { location: 'Speedy Bosh p. 58', name: 'Green Shepard\'s Pie', type: 'british' },
    { location: 'Speedy Bosh p. 61', name: 'Happy Chick\'n Parmo', type: 'chicken chickun parmigiana italian' },
    { location: 'Speedy Bosh p. 62', name: 'Henry\'s 30 Minute Lasagne', type: 'italian' },
    { location: 'Speedy Bosh p. 64', name: 'Greens Gratin', type: 'vegetables' },
    { location: 'Speedy Bosh p. 66', name: 'Moroccan Jackfruit Stew', type: '' },
    { location: 'Speedy Bosh p. 68', name: 'Crispy Jacket Potato', type: 'vegetables' },
    { location: 'Speedy Bosh p. 73', name: 'Lizzie\'s Lemon & Artichoke Risotto', type: 'italian' },
    { location: 'Speedy Bosh p. 74', name: 'Crispy Mushroom Soup', type: '' },
    { location: 'Speedy Bosh p. 76', name: 'Potato & Pickle Upside Down Pie', type: 'british' },
    { location: 'Speedy Bosh p. 78', name: 'Black Bean Mole with Salsa', type: 'mexican' },
    { location: 'Speedy Bosh p. 80', name: 'Red Wine Cassoulet', type: 'french sausages' },
    { location: 'Speedy Bosh p. 83', name: 'Salsa Gnocchi', type: 'french sausages' },
    { location: 'Speedy Bosh p. 84', name: 'Super Meaty Spag Bol', type: 'spaghetti bolognese italian' },
    { location: 'Speedy Bosh p. 86', name: 'Theasby\'s Tempeh Toastie', type: '' },
    { location: 'Speedy Bosh p. 88', name: 'Ultimate Vegan Mac & Cheese', type: 'american' },
    { location: 'Speedy Bosh p. 91', name: 'Goulash & Dumplings', type: 'hungarian' },
    { location: 'Speedy Bosh p. 92', name: 'Simple One-Pot Spaghetti', type: 'italian' },
    { location: 'Speedy Bosh p. 97', name: 'Speedy Restaurant Ramen', type: 'asian' },
    { location: 'Speedy Bosh p. 98', name: 'Got-No-Beef Rendang', type: 'asian ' },
    { location: 'Speedy Bosh p. 101', name: 'Jackfruit Rendang Burger', type: 'asian ' },
    { location: 'Speedy Bosh p. 102', name: 'Beetroot & Lentil Burger', type: '' },
    { location: 'Speedy Bosh p. 105', name: 'Butter Tofu Curry', type: 'indian' },
    { location: 'Speedy Bosh p. 106', name: 'Jackfruit Shawarma', type: '' },
    { location: 'Speedy Bosh p. 109', name: 'Luxurious Rice Pilaf', type: 'indian curry' },
    { location: 'Speedy Bosh p. 109', name: 'Quick Tandoori Kebabs', type: '' },
    { location: 'Speedy Bosh p. 109', name: 'Mushroom Keema Rice', type: '' },
    { location: 'Speedy Bosh p. 115', name: 'Cheat\'s Black Dal', type: 'indian curry' },
    { location: 'Speedy Bosh p. 116', name: 'Indonesian Yellow Curry', type: '' },
    { location: 'Speedy Bosh p. 118', name: 'Cheatball Mariana Sub', type: 'meatball italian' },
    { location: 'Speedy Bosh p. 121', name: 'Thai Green Curry Bowls', type: 'indian'},
    { location: 'Speedy Bosh p. 122', name: 'Big Red Peanut Noodles', type: 'indian ' },
    { location: 'Speedy Bosh p. 124', name: 'Quick Fried Biryani', type: 'indian' },
    { location: 'Speedy Bosh p. 126', name: 'Speedy Laksa', type: 'soup asian' },
    { location: 'Speedy Bosh p. 128', name: 'Sloppy Joe Dogs', type: ' american ' },
    { location: 'Speedy Bosh p. 130', name: 'Sticky Sichuan Tofu', type: 'asian' },
    { location: 'Speedy Bosh p. 132', name: 'Potato Chaat with Crispy Chickpeas', type: ' indian' },
    { location: 'Speedy Bosh p. 135', name: 'Spicy Dan Dan Noodles', type: ' chinese asian' },
    { location: 'Speedy Bosh p. 139', name: 'BBQ Tempeh Ribs', type: ' chinese asian' },
    { location: 'Speedy Bosh p. 142', name: 'Quick Mezze Platter', type: '' },
    { location: 'Speedy Bosh p. 143', name: 'Beetroot, Tahini & Dill Dip', type: '' },
    { location: 'Speedy Bosh p. 143', name: 'Muhammara', type: '' },
    { location: 'Speedy Bosh p. 143', name: 'Pea, Feta & Mint Dip', type: '' },
    { location: 'Speedy Bosh p. 143', name: 'Crudités, Dolmades, Picked Chillies & Flatbreads', type: '' },
    { location: 'Speedy Bosh p. 146', name: 'Chimichurri Seitan Fajitas', type: '' },
    { location: 'Speedy Bosh p. 149', name: 'Naan Tikka Pizza', type: 'italian'},
    { location: 'Speedy Bosh p. 150', name: 'Spicy Stuffed Aubergines', type: '' },
    { location: 'Speedy Bosh p. 152', name: 'Street Food Tacos - 3 Ways', type: '' },
    { location: 'Speedy Bosh p. 152', name: 'Indonesian Cauliflower Tacos', type: '' },
    { location: 'Speedy Bosh p. 152', name: 'King Oyster Mushroom Tacos', type: '' },
    { location: 'Speedy Bosh p. 153', name: 'Tartare Sauce Fysh Tacos', type: ' fish' },
    { location: 'Speedy Bosh p. 157', name: 'Vietnamese Crispy Pancakes', type: '' },
    { location: 'Speedy Bosh p. 159', name: 'Speedy Pizza - 3 ways', type: 'italian'},
    { location: 'Speedy Bosh p. 159', name: 'Artichoke \'Nduja Pizza', type: 'italian'},
    { location: 'Speedy Bosh p. 162', name: 'Tex-Mex Pizza', type: 'italian'},
    { location: 'Speedy Bosh p. 162', name: 'Brocolli & Sausage Pizza', type: 'italian'},
    { location: 'Speedy Bosh p. 163', name: 'Speedy Tapas Platter', type: 'italian'},
    { location: 'Speedy Bosh p. 164', name: 'Quick Tortilla', type: 'italian'},
    { location: 'Speedy Bosh p. 164', name: 'Padrón Peppers', type: 'italian'},
    { location: 'Speedy Bosh p. 165', name: 'Marinated Olives & Almonds', type: 'italian'},
    { location: 'Speedy Bosh p. 165', name: 'Catalan Spinach, Chickpea & Garlic', type: 'italian'},
    { location: 'Speedy Bosh p. 168', name: 'Tofu Satay Kebabs with Fresh Herbs', type: '' },
    { location: 'Speedy Bosh p. 170', name: 'Rainbow Falafel', type: '' },
    { location: 'Speedy Bosh p. 170', name: 'Falafel Base Mix', type: '' },
    { location: 'Speedy Bosh p. 170', name: 'Tahini & Garlic Dipping Sauce', type: '' },
    { location: 'Speedy Bosh p. 171', name: 'Green Falafel', type: '' },
    { location: 'Speedy Bosh p. 171', name: 'Squash Falafel', type: '' },
    { location: 'Speedy Bosh p. 172', name: 'Smoky Aubergine Falafel', type: '' },
    { location: 'Speedy Bosh p. 172', name: 'Beetroot Falafel', type: '' },
    { location: 'Speedy Bosh p. 174', name: 'Best Friends\' Dippy Platter', type: '' },
    { location: 'Speedy Bosh p. 174 (part of Best Friends\' Dippy Platter)', name: 'Caramalised Onion, Carrot & Cumin Dip', type: '' },
    { location: 'Speedy Bosh p. 174 (part of Best Friends\' Dippy Platter)', name: 'Red Lentil Hummus', type: '' },
    { location: 'Speedy Bosh p. 174 (part of Best Friends\' Dippy Platter)', name: 'Artichoke & Kale Dip', type: '' },
    { location: 'Speedy Bosh p. 179', name: 'Roasted Thai Brocolli with Peanut and Coriander Rice Salad', type: 'asian vegetables' },
    { location: 'Speedy Bosh p. 180', name: 'Smashed Cucumber, Watermelon & Sesame Salad', type: '' },
    { location: 'Speedy Bosh p. 182', name: 'Green Bean & Sugar Snap Asian Salad', type: '' },
    { location: 'Speedy Bosh p. 185', name: 'Asparagus & Herb Tabbouleh', type: '' },
    { location: 'Speedy Bosh p. 186', name: 'Salt & Pepper Tofu', type: '' },
    { location: 'Speedy Bosh p. 189', name: 'Broccoli & Mango Miso Salad', type: '' },
    { location: 'Speedy Bosh p. 190', name: 'Red Pepper Couscous Salad', type: '' },
    { location: 'Speedy Bosh p. 192', name: 'Taco Salad', type: '' },
    { location: 'Speedy Bosh p. 195', name: 'Chimichurri Couscous', type: '' },
    { location: 'Speedy Bosh p. 196', name: 'Teriyaki Tempeh', type: '' },
    { location: 'Speedy Bosh p. 198', name: 'Winter Roots Salad', type: '' },
    { location: 'Speedy Bosh p. 201', name: 'Tumeric-Roasted Cauli Wedges', type: '' },
    { location: 'Speedy Bosh p. 202', name: 'Crispy Baby Corn Salad', type: '' },
    { location: 'Speedy Bosh p. 207', name: 'Banana Microwave Cake', type: 'dessert ' },
    { location: 'Speedy Bosh p. 208', name: 'Cronuts', type: 'donuts dessert' },
    { location: 'Speedy Bosh p. 210', name: 'Fruit & Nut Cornflake Cakes', type: 'dessert' },
    { location: 'Speedy Bosh p. 211', name: 'Rice Krispie Donuts', type: 'dessert' },
    { location: 'Speedy Bosh p. 214', name: 'Spice Dust Chocolate Truffles', type: 'dessert' },
    { location: 'Speedy Bosh p. 217', name: 'Ice Cream Tiramisu', type: 'dessert' },
    { location: 'Speedy Bosh p. 218', name: 'Coffee Caramel Tearer Sharer', type: 'dessert' },
    { location: 'Speedy Bosh p. 221', name: 'Spectaculoos Coconut Ganache', type: 'dessert' },
    { location: 'Speedy Bosh p. 222', name: 'D\'s Gooey Chocolate Ganache', type: 'dessert' },
    { location: 'Speedy Bosh p. 224', name: 'Creamy Lime Pie', type: 'dessert' },
    { location: 'Speedy Bosh p. 226', name: 'Millionaire\'s Shortbread', type: 'dessert' },
    { location: 'Speedy Bosh p. 229', name: 'Portuguese Custard Tart', type: 'dessert' },
    { location: 'Speedy Bosh p. 230', name: 'Rocky BOSH Bars', type: 'dessert' },
    { location: 'Speedy Bosh p. 232', name: 'Red Velvet Sorbet', type: 'dessert' },
    { location: 'Speedy Bosh p. 234', name: 'Frying Pan Cookie', type: 'dessert' },
    { location: 'Speedy Bosh p. 239', name: 'Blueberry Cheesecake Shake', type: 'dessert' },
    { location: 'Speedy Bosh p. 240', name: 'My Body\'s A Temple Elixir', type: 'dessert' },
    { location: 'Speedy Bosh p. 243', name: 'G & Tea Spritz', type: 'dessert' },
    { location: 'Speedy Bosh p. 243', name: 'Peanut Ice Coffee', type: 'dessert' },
    { location: 'Speedy Bosh p. 244', name: 'Rosé Sangria', type: 'drink' },
    { location: 'Speedy Bosh p. 246', name: 'Deep South Dirty Martini', type: 'drink' },
    { location: 'Speedy Bosh p. 248', name: 'Margarita Fizz', type: 'drink' },
    { location: 'Speedy Bosh p. 251', name: 'De La Seoul Bloody Mary', type: 'drink' },
    { location: 'Speedy Bosh p. 252', name: 'Bitter Sweet Peachy Bellini', type: 'drink' },
    { location: 'Speedy Bosh p. 254', name: 'PBJ Coloda', type: 'drink' },
    { location: 'Speedy Bosh p. 256', name: 'Drunken Hot Chocolate', type: 'drink' },
    { location: 'Speedy Bosh p. 261', name: 'Berry Buckwheat Pancake Stack', type: 'breakfast' },
    { location: 'Speedy Bosh p. 262', name: 'Breakfast Hash Tacos', type: 'breakfast' },
    { location: 'Speedy Bosh p. 264', name: 'Em-J\'s Miracle Morning Porridge', type: 'breakfast' },
    { location: 'Speedy Bosh p. 264', name: 'Chocolate Orange Porridge', type: 'breakfast' },
    { location: 'Speedy Bosh p. 264', name: 'Em-J\'s Miracle Morning Porridge', type: 'breakfast' },
    { location: 'Speedy Bosh p. 265', name: 'Peanut Butter Power Porridge', type: 'breakfast' },
    { location: 'Speedy Bosh p. 265', name: 'Super-Seeded Porridge', type: 'breakfast' },
    { location: 'Speedy Bosh p. 268', name: 'Greens & Caper Crumb', type: 'breakfast' },
    { location: 'Speedy Bosh p. 271', name: 'Frances\' PBJ Pop Tarts', type: 'breakfast' },
    { location: 'Speedy Bosh p. 272', name: 'Kinda Salmon & Cream Cheese Bagels', type: 'breakfast' },
    { location: 'Speedy Bosh p. 274', name: 'Giant Breakfast Muffin', type: 'breakfast' },
    { location: 'Speedy Bosh p. 277', name: 'Fran\'s Fruit & Fibre Flapjacks', type: 'breakfast' },
];