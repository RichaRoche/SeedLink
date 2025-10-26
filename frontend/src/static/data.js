// navigation Data
export const navItems = [
  { title: "Home", url: "/" },
  { title: "Products", url: "/products" },
  { title: "Events", url: "/events" },
  { title: "FAQ", url: "/faq" },
];

// categories data
export const categoriesData = [
  { id: 1, title: "Vegetable Seeds", image_Url: "https://cdn-icons-png.flaticon.com/128/2227/2227548.png" }, // seedling / seed
  { id: 2, title: "Grain Seeds", image_Url: "https://cdn-icons-png.flaticon.com/128/2674/2674588.png" },     // wheat / grain
  { id: 3, title: "Flower Seeds", image_Url: "https://cdn-icons-png.flaticon.com/128/3944/3944238.png" },    // flower
  { id: 4, title: "Fertilizers", image_Url: "https://cdn-icons-png.flaticon.com/128/11766/11766678.png" },     // fertilizer bag
  { id: 5, title: "Tools & Equipment", image_Url: "https://cdn-icons-png.flaticon.com/128/10381/10381193.png" },// farming tools (shovel/rake)
  { id: 6, title: "Pesticides & Insecticides", image_Url: "https://cdn-icons-png.flaticon.com/128/13922/13922632.png" }, // spray bottle
  { id: 7, title: "Animal Feed & Supplies", image_Url: "https://cdn-icons-png.flaticon.com/128/12261/12261431.png" }, // feed / animal bowl
  { id: 8, title: "Farm Accessories", image_Url: "https://cdn-icons-png.flaticon.com/128/1084/1084571.png" },   // basket / accessories
];


// product Data
export const productData = [
  {
    id: 1,
    category: "Vegetable Seeds",
    name: "Tomato Seeds - 100pcs",
    description: "High quality tomato seeds suitable for all climates.",
    image_Url: [
      { public_id: "1", url: "https://cdn-icons-png.flaticon.com/512/2920/2920442.png" },
    ],
    shop: { name: "GreenFarm Ltd", shop_avatar: { public_id: "1", url: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }, ratings: 4.5 },
    price: 5,
    discount_price: 4,
    rating: 4.5,
    total_sell: 120,
    stock: 200,
  },
  {
    id: 2,
    category: "Tools & Equipment",
    name: "Hand Hoe",
    description: "Durable hand hoe for soil preparation and gardening.",
    image_Url: [
      { public_id: "2", url: "https://cdn-icons-png.flaticon.com/512/1520/1520553.png" },
    ],
    shop: { name: "AgriTools Co", shop_avatar: { public_id: "2", url: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }, ratings: 4.2 },
    price: 15,
    discount_price: 13,
    rating: 4.2,
    total_sell: 80,
    stock: 50,
  },
  {
    id: 3,
    category: "Fertilizers",
    name: "Organic Compost",
    description: "Natural compost for healthy crop growth.",
    image_Url: [
      { public_id: "3", url: "https://cdn-icons-png.flaticon.com/512/833/833314.png" },
    ],
    shop: { name: "NatureGrow", shop_avatar: { public_id: "3", url: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }, ratings: 4.7 },
    price: 20,
    discount_price: 18,
    rating: 4.7,
    total_sell: 60,
    stock: 70,
  },
];

export const footerProductLinks = [
  { name: "About us", link: "/about" },
  { name: "Careers", link: "/carrers" },
  { name: "Store Locations" },
  { name: "Our Blog" },
  { name: "Reviews" },
];

export const footercompanyLinks = [
  { name: "Vegetable Seeds" },
  { name: "Fertilizers" },
  { name: "Tools & Equipment" },
  { name: "Pesticides & Insecticides" },
  { name: "Farm Accessories" },
];

export const footerSupportLinks = [
  { name: "FAQ" },
  { name: "Reviews" },
  { name: "Contact Us" },
  { name: "Shipping" },
  { name: "Live chat" },
];
