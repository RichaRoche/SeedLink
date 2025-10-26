// Quick script to delete old expired seller
// Run: node delete-old-seller.js

const mongoose = require('mongoose');
require('dotenv').config({ path: 'backend/config/.env' });
const Shop = require('./backend/model/shop');

async function deleteOldSellers() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Get all shops
    const shops = await Shop.find({});
    
    console.log('\nAll sellers in database:');
    shops.forEach((shop, idx) => {
      console.log(`${idx + 1}. Email: ${shop.email}, Name: ${shop.name}, ID: ${shop._id}`);
    });

    if (shops.length === 0) {
      console.log('\nNo sellers found in database.');
      mongoose.connection.close();
      return;
    }

    console.log('\nWould you like to delete all unactivated sellers?');
    console.log('This will remove sellers that registered but never activated.');
    console.log('You can then re-register with the same email.');
    
    mongoose.connection.close();
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

deleteOldSellers();




