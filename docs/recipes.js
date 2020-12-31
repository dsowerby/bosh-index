var boshRecipes = [];
var bishBashBoshRecipe = [];
var boshHealthyVeganRecipe = [];
var speedyBoshRecipes = [
    { location: 'Speedy Bosh p. 29', name: 'Cheat\'s Toad in the Hole with Curry Gravy', type: '' },
    { location: 'Speedy Bosh p. 30', name: 'Aubergine & Lentil Meatball Pasta', type: '' },
    { location: 'Speedy Bosh p. 32', name: 'Deep, Dark & Smoky Chilli', type: '' },
    { location: 'Speedy Bosh p. 36', name: 'Black Olive Pesto Pasta', type: '' },
    { location: 'Speedy Bosh p. 39', name: 'Cauliflower Schnitzel - 3 ways', type: '' },
    { location: 'Speedy Bosh p. 44', name: 'Ivory Coast Squash & Peanut Stew', type: '' },
    { location: 'Speedy Bosh p. 48', name: 'Frying Pan Samosa Pie', type: '' },
    { location: 'Speedy Bosh p. 51', name: 'Butternut Squash Carbonara with Crispy Sage', type: ''},
    { location: 'Speedy Bosh p. 52', name: 'Thanksgiving Roast', type: '' },
    { location: 'Speedy Bosh p. 58', name: 'Green Shepard\'s Pie', type: '' },
    { location: 'Speedy Bosh p. 61', name: 'Happy Chick\'n Parmo', type: 'chicken chickun parmigiana ' },
    { location: 'Speedy Bosh p. 62', name: 'Henry\'s 30 Minute Lasagne', type: '' },
    { location: 'Speedy Bosh p. 64', name: 'Greens Gratin', type: '' },
    { location: 'Speedy Bosh p. 68', name: 'Crispy Jacket Potato', type: '' },
    { location: 'Speedy Bosh p. 73', name: 'Lizzie\'s Lemon & Artichoke Risotto', type: '' },
    { location: 'Speedy Bosh p. 74', name: 'Crispy Mushroom Soup', type: '' },
    { location: 'Speedy Bosh p. 76', name: 'Potato & Pickle Upside Down Pie', type: '' },
    { location: 'Speedy Bosh p. 78', name: 'Black Bean Mole with Salsa', type: '' },
    { location: 'Speedy Bosh p. 80', name: 'Red Wine Cassoulet', type: '' },
    { location: 'Speedy Bosh p. 84', name: 'Super Meaty Spag Bol', type: 'spaghetti bolognese ' },
    { location: 'Speedy Bosh p. 88', name: 'Ultimate Vegan Mac & Cheese', type: '' },
    { location: 'Speedy Bosh p. 91', name: 'Goulash & Dumplings', type: '' },
    { location: 'Speedy Bosh p. 92', name: 'Simple One-Pot Spaghetti', type: '' },
    { location: 'Speedy Bosh p. 97', name: 'Speedy Restaurant Ramen', type: '' },
    { location: 'Speedy Bosh p. 102', name: 'Beetroot & Lentil Burger', type: '' },
    { location: 'Speedy Bosh p. 118', name: 'Cheatball Mariana Sub', type: 'meatball ' },
    { location: 'Speedy Bosh p. 121', name: 'Thai Green Curry Bowls', type: ''},
    { location: 'Speedy Bosh p. 124', name: 'Quick Fried Biryani', type: '' },
    { location: 'Speedy Bosh p. 126', name: 'Speedy Laksa', type: 'soup ' },
    { location: 'Speedy Bosh p. 149', name: 'Naan Tikka Pizza', type: ''},
    { location: 'Speedy Bosh p. 159', name: 'Speedy Pizza - 3 ways', type: ''},
    { location: 'Speedy Bosh p. 168', name: 'Tofu Satay Kebabs with Fresh Herbs', type: '' },
    { location: 'Speedy Bosh p. 170', name: 'Rainbow Falafel', type: '' },
    { location: 'Speedy Bosh p. 174', name: 'Best Friends\' Dippy Platter', type: '' },
    { location: 'Speedy Bosh p. 207', name: 'Banana Microwave Cake', type: '' },
    { location: 'Speedy Bosh p. 211', name: 'Rice Krispie Donuts', type: '' },
    { location: 'Speedy Bosh p. 214', name: 'Spice Dust Chocolate Truffles', type: '' },
    { location: 'Speedy Bosh p. 221', name: 'Spectaculoos Coconut Ganache', type: '' },
    { location: 'Speedy Bosh p. 222', name: 'D\'s Gooey Chocolate Ganache', type: '' },
    { location: 'Speedy Bosh p. 232', name: 'Red Velvet Sorbet', type: '' },
    { location: 'Speedy Bosh p. 234', name: 'Frying Pan Cookie', type: '' },
    { location: 'Speedy Bosh p. 244', name: 'Rosé Sangria', type: '' },
    { location: 'Speedy Bosh p. 246', name: 'Margarita Fizz', type: '' },
    { location: 'Speedy Bosh p. 251', name: 'De La Seoul Bloody Mary', type: '' },
];