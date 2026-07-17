// Party Menu Application - Static Menu Data

const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    category: "starter",
    isVeg: true,
    description: "Grilled cottage cheese marinated in Indian spices, served with mint chutney.",
    fullDescription: "Succulent cubes of cottage cheese marinated in a blend of yogurt, aromatic spices, and herbs, then grilled to perfection. This classic Indian appetizer is served hot with cooling mint chutney and lemon wedges. Perfect for starting your party on a flavorful note.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
    ingredients: [
      { name: "Paneer (Cottage Cheese)", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Lemon Juice", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    servings: "For 4 people"
  },
  {
    id: 2,
    name: "Chicken Wings",
    category: "starter",
    isVeg: false,
    description: "Crispy fried chicken wings tossed in spicy buffalo sauce.",
    fullDescription: "Golden-fried chicken wings with a crispy exterior and juicy interior, generously coated in our signature buffalo sauce. These wings pack the perfect balance of heat and flavor, making them an irresistible party favorite. Served with celery sticks and blue cheese dip.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
    ingredients: [
      { name: "Chicken Wings", quantity: "1 kg" },
      { name: "Buffalo Sauce", quantity: "1/2 cup" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Garlic Powder", quantity: "1 tsp" },
      { name: "Paprika", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black Pepper", quantity: "1/2 tsp" }
    ],
    servings: "For 4 people"
  },
  {
    id: 3,
    name: "Vegetable Spring Rolls",
    category: "starter",
    isVeg: true,
    description: "Crispy rolls filled with fresh vegetables and served with sweet chili sauce.",
    fullDescription: "Thin crispy wrappers filled with a colorful medley of shredded cabbage, carrots, bell peppers, and bean sprouts, seasoned with soy sauce and sesame oil. Deep-fried until golden and crunchy, these spring rolls are a crowd-pleasing vegetarian option served with tangy sweet chili sauce.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
    ingredients: [
      { name: "Spring Roll Wrappers", quantity: "20 sheets" },
      { name: "Cabbage (shredded)", quantity: "2 cups" },
      { name: "Carrots (julienned)", quantity: "1 cup" },
      { name: "Bean Sprouts", quantity: "1 cup" },
      { name: "Bell Peppers", quantity: "1 cup" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Sesame Oil", quantity: "1 tbsp" },
      { name: "Ginger (minced)", quantity: "1 tbsp" }
    ],
    servings: "For 5 people"
  },
  {
    id: 4,
    name: "Fish Fingers",
    category: "starter",
    isVeg: false,
    description: "Breaded fish strips fried until golden, served with tartar sauce.",
    fullDescription: "Tender white fish fillets cut into strips, coated in seasoned breadcrumbs and fried to a perfect golden crisp. The exterior is crunchy while the fish inside remains moist and flaky. Accompanied by homemade tartar sauce and lemon wedges for a delightful seafood appetizer.",
    image: "https://images.unsplash.com/photo-1580959375944-1ac5c2c6b7d4?w=800&q=80",
    ingredients: [
      { name: "White Fish Fillets", quantity: "600g" },
      { name: "Breadcrumbs", quantity: "2 cups" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Eggs", quantity: "3" },
      { name: "Paprika", quantity: "1 tsp" },
      { name: "Garlic Powder", quantity: "1 tsp" },
      { name: "Salt & Pepper", quantity: "to taste" }
    ],
    servings: "For 3 people"
  },
  {
    id: 5,
    name: "Butter Chicken",
    category: "main",
    isVeg: false,
    description: "Tender chicken in creamy tomato curry with aromatic spices.",
    fullDescription: "Succulent pieces of chicken cooked in a rich, creamy tomato-based curry infused with butter, cream, and a perfect blend of North Indian spices. This iconic dish features a velvety smooth sauce that's mildly spiced yet incredibly flavorful. Best enjoyed with naan or basmati rice.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
    ingredients: [
      { name: "Chicken (boneless)", quantity: "800g" },
      { name: "Tomato Puree", quantity: "2 cups" },
      { name: "Heavy Cream", quantity: "1 cup" },
      { name: "Butter", quantity: "4 tbsp" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Garam Masala", quantity: "2 tsp" },
      { name: "Kasuri Methi", quantity: "1 tbsp" },
      { name: "Honey", quantity: "1 tbsp" }
    ],
    servings: "For 4 people"
  },
  {
    id: 6,
    name: "Palak Paneer",
    category: "main",
    isVeg: true,
    description: "Cottage cheese cubes in creamy spinach gravy with Indian spices.",
    fullDescription: "Soft paneer cubes swimming in a vibrant, creamy spinach gravy enriched with aromatic spices. This nutritious vegetarian main course combines the earthiness of spinach with the mild flavor of cottage cheese, creating a harmonious blend that's both healthy and indulgent.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    ingredients: [
      { name: "Paneer", quantity: "400g" },
      { name: "Spinach (blanched)", quantity: "500g" },
      { name: "Onion (chopped)", quantity: "2 medium" },
      { name: "Tomatoes", quantity: "2 medium" },
      { name: "Cream", quantity: "1/2 cup" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" }
    ],
    servings: "For 4 people"
  },
  {
    id: 7,
    name: "Grilled Salmon",
    category: "main",
    isVeg: false,
    description: "Perfectly grilled salmon fillet with lemon butter sauce.",
    fullDescription: "Premium salmon fillet seasoned with herbs and grilled to perfection, topped with a luxurious lemon butter sauce. The fish is cooked until the exterior is beautifully caramelized while the inside remains moist and flaky. Garnished with fresh dill and served with seasonal vegetables.",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&q=80",
    ingredients: [
      { name: "Salmon Fillet", quantity: "4 pieces (200g each)" },
      { name: "Butter", quantity: "4 tbsp" },
      { name: "Lemon", quantity: "2" },
      { name: "Fresh Dill", quantity: "2 tbsp" },
      { name: "Garlic (minced)", quantity: "3 cloves" },
      { name: "Olive Oil", quantity: "2 tbsp" },
      { name: "Salt & Pepper", quantity: "to taste" }
    ],
    servings: "For 4 people"
  },
  {
    id: 8,
    name: "Vegetable Biryani",
    category: "main",
    isVeg: true,
    description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
    fullDescription: "A royal one-pot dish featuring long-grain basmati rice layered with seasonal vegetables, caramelized onions, and aromatic spices. Each grain is infused with saffron and cooked in the traditional dum style, creating layers of complex flavors. Served with cooling raita and crispy papad.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Mixed Vegetables", quantity: "3 cups" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Onions (fried)", quantity: "2 large" },
      { name: "Biryani Masala", quantity: "3 tbsp" },
      { name: "Saffron", quantity: "a pinch" },
      { name: "Ghee", quantity: "3 tbsp" },
      { name: "Mint & Coriander", quantity: "1/2 cup" }
    ],
    servings: "For 6 people"
  },
  {
    id: 9,
    name: "Garlic Bread",
    category: "sides",
    isVeg: true,
    description: "Toasted bread with garlic butter and herbs.",
    fullDescription: "Freshly baked baguette slices brushed with aromatic garlic butter, sprinkled with Italian herbs and parmesan cheese, then toasted until golden and crispy. The perfect accompaniment to any meal, these slices are fragrant, buttery, and utterly addictive.",
    image: "https://images.unsplash.com/photo-1573140401552-3fab0b24f8f6?w=800&q=80",
    ingredients: [
      { name: "Baguette", quantity: "1 large" },
      { name: "Butter (softened)", quantity: "1/2 cup" },
      { name: "Garlic (minced)", quantity: "6 cloves" },
      { name: "Parsley (fresh)", quantity: "3 tbsp" },
      { name: "Parmesan Cheese", quantity: "1/4 cup" },
      { name: "Italian Herbs", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ],
    servings: "For 4 people"
  },
  {
    id: 10,
    name: "Caesar Salad",
    category: "sides",
    isVeg: true,
    description: "Crisp romaine lettuce with Caesar dressing and parmesan.",
    fullDescription: "Fresh romaine lettuce leaves tossed in creamy Caesar dressing, topped with crunchy croutons and shaved parmesan cheese. This classic salad features our homemade Caesar dressing with anchovies, garlic, lemon, and egg, creating a perfect balance of flavors and textures.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80",
    ingredients: [
      { name: "Romaine Lettuce", quantity: "2 heads" },
      { name: "Parmesan Cheese", quantity: "1 cup" },
      { name: "Croutons", quantity: "1 cup" },
      { name: "Caesar Dressing", quantity: "1/2 cup" },
      { name: "Lemon Juice", quantity: "2 tbsp" },
      { name: "Black Pepper", quantity: "to taste" }
    ],
    servings: "For 4 people"
  },
  {
    id: 11,
    name: "French Fries",
    category: "sides",
    isVeg: true,
    description: "Crispy golden fries seasoned with salt and herbs.",
    fullDescription: "Hand-cut potato strips double-fried to achieve the perfect combination of crispy exterior and fluffy interior. Seasoned with sea salt and a blend of herbs, these classic fries are the ultimate comfort food side dish. Served with ketchup and mayonnaise.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
    ingredients: [
      { name: "Potatoes (large)", quantity: "6" },
      { name: "Vegetable Oil", quantity: "for frying" },
      { name: "Sea Salt", quantity: "2 tsp" },
      { name: "Black Pepper", quantity: "1 tsp" },
      { name: "Paprika", quantity: "1/2 tsp" },
      { name: "Dried Herbs", quantity: "1 tsp" }
    ],
    servings: "For 4 people"
  },
  {
    id: 12,
    name: "Coleslaw",
    category: "sides",
    isVeg: true,
    description: "Crunchy cabbage salad with creamy dressing.",
    fullDescription: "A refreshing mix of shredded cabbage, carrots, and onions tossed in a tangy, creamy dressing. This classic side dish provides a cool, crunchy contrast to rich main courses. The dressing combines mayonnaise, vinegar, and a touch of sugar for the perfect balance of flavors.",
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&q=80",
    ingredients: [
      { name: "Green Cabbage (shredded)", quantity: "4 cups" },
      { name: "Carrots (shredded)", quantity: "2 cups" },
      { name: "Mayonnaise", quantity: "3/4 cup" },
      { name: "White Vinegar", quantity: "2 tbsp" },
      { name: "Sugar", quantity: "1 tbsp" },
      { name: "Salt & Pepper", quantity: "to taste" }
    ],
    servings: "For 6 people"
  },
  {
    id: 13,
    name: "Chocolate Lava Cake",
    category: "desert",
    isVeg: true,
    description: "Warm chocolate cake with molten chocolate center.",
    fullDescription: "Decadent individual chocolate cakes with a gooey, molten chocolate center that flows out when you cut into it. Baked to perfection with a delicate crust and served warm with a scoop of vanilla ice cream. This indulgent dessert is a chocolate lover's dream come true.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    ingredients: [
      { name: "Dark Chocolate", quantity: "200g" },
      { name: "Butter", quantity: "100g" },
      { name: "Eggs", quantity: "4" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Flour", quantity: "1/4 cup" },
      { name: "Cocoa Powder", quantity: "2 tbsp" },
      { name: "Vanilla Extract", quantity: "1 tsp" }
    ],
    servings: "For 4 people"
  },
  {
    id: 14,
    name: "Tiramisu",
    category: "desert",
    isVeg: true,
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
    fullDescription: "An elegant Italian dessert featuring layers of espresso-soaked ladyfinger biscuits and rich mascarpone cream, dusted with cocoa powder. This sophisticated dessert combines the robust flavor of coffee with the smooth, creamy texture of mascarpone, creating an unforgettable taste experience.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    ingredients: [
      { name: "Mascarpone Cheese", quantity: "500g" },
      { name: "Ladyfinger Biscuits", quantity: "24 pieces" },
      { name: "Espresso Coffee", quantity: "2 cups" },
      { name: "Egg Yolks", quantity: "6" },
      { name: "Sugar", quantity: "3/4 cup" },
      { name: "Cocoa Powder", quantity: "for dusting" },
      { name: "Marsala Wine", quantity: "3 tbsp" }
    ],
    servings: "For 6 people"
  },
  {
    id: 15,
    name: "Gulab Jamun",
    category: "desert",
    isVeg: true,
    description: "Soft milk dumplings soaked in sugar syrup.",
    fullDescription: "Traditional Indian sweet consisting of soft, spongy milk solid dumplings deep-fried until golden and soaked in fragrant rose-cardamom sugar syrup. These warm, syrup-drenched spheres are a beloved dessert at Indian celebrations, offering a perfect balance of sweetness and aromatic spices.",
    image: "https://images.unsplash.com/photo-1589828994446-39022f3fb731?w=800&q=80",
    ingredients: [
      { name: "Milk Powder", quantity: "2 cups" },
      { name: "All-Purpose Flour", quantity: "1/4 cup" },
      { name: "Baking Soda", quantity: "1/2 tsp" },
      { name: "Ghee", quantity: "2 tbsp" },
      { name: "Sugar", quantity: "3 cups" },
      { name: "Water", quantity: "2 cups" },
      { name: "Rose Water", quantity: "1 tsp" },
      { name: "Cardamom Powder", quantity: "1/2 tsp" }
    ],
    servings: "For 6 people"
  },
  {
    id: 16,
    name: "Cheesecake",
    category: "desert",
    isVeg: true,
    description: "Creamy cheesecake with graham cracker crust.",
    fullDescription: "A velvety smooth cheesecake with a buttery graham cracker crust, baked to perfection and chilled until set. This classic American dessert features a rich, creamy filling made with cream cheese, eggs, and vanilla. Topped with fresh berries or fruit compote for a delightful finish.",
    image: "https://images.unsplash.com/photo-1533134242192-0b4e1d8aa29e?w=800&q=80",
    ingredients: [
      { name: "Cream Cheese", quantity: "600g" },
      { name: "Graham Crackers", quantity: "2 cups (crushed)" },
      { name: "Butter (melted)", quantity: "1/2 cup" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Eggs", quantity: "3" },
      { name: "Vanilla Extract", quantity: "2 tsp" },
      { name: "Sour Cream", quantity: "1/2 cup" }
    ],
    servings: "For 8 people"
  }
];

// Filter menu items based on parameters
export const filterMenuItems = ({ category, diet, name } = {}) => {
  let filtered = [...menuItems];

  // Filter by category
  if (category && category !== 'all') {
    filtered = filtered.filter(item => item.category === category);
  }

  // Filter by diet
  if (diet && diet !== 'all') {
    if (diet === 'veg') {
      filtered = filtered.filter(item => item.isVeg === true);
    } else if (diet === 'nonveg') {
      filtered = filtered.filter(item => item.isVeg === false);
    }
  }

  // Filter by name (case-insensitive partial match)
  if (name && name.trim()) {
    const searchTerm = name.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(searchTerm)
    );
  }

  return filtered;
};

// Get menu item by ID
export const getMenuItemById = (id) => {
  return menuItems.find(item => item.id === parseInt(id));
};

export default menuItems;
