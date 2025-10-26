// Script to make a user an admin
// Run: node make-admin.js <email>

const mongoose = require('mongoose');
require('dotenv').config({ path: 'backend/config/.env' });
const User = require('./backend/model/user');

async function makeAdmin(email) {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const user = await User.findOne({ email: email });
    
    if (!user) {
      console.log(`❌ No user found with email: ${email}`);
      console.log('Please register as a regular user first!');
      process.exit(0);
    }

    console.log(`Found user: ${user.name} (${user.email})`);
    console.log(`Current role: ${user.role}`);
    
    user.role = 'Admin';
    await user.save();
    
    console.log('✅ User updated to Admin!');
    console.log(`New role: ${user.role}`);
    console.log('\nYou can now access admin dashboard at:');
    console.log('http://localhost:3000/admin/dashboard');
    
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

const email = process.argv[2];
if (!email) {
  console.log('Usage: node make-admin.js <email>');
  console.log('Example: node make-admin.js user@example.com');
  process.exit(1);
}

makeAdmin(email);




