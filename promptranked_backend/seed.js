const sequelize = require('./config/database');
const Prompt = require('./models/Prompt');

const seedData = [
  {
    title: 'Funny Cat Joke',
    content: 'Write a joke about a cat who loves lasagna.',
    category: 'Humor',
    upvotes: 10,
    downvotes: 2
  },
  {
    title: 'Professional Email',
    content: 'Draft a polite email declining a job offer.',
    category: 'Business',
    upvotes: 5,
    downvotes: 0
  },
  {
    title: 'Sci-Fi Story Starter',
    content: 'In a world where gravity reverses every hour...',
    category: 'Creative Writing',
    upvotes: 15,
    downvotes: 5
  },
  {
    title: 'Controversial Opinion',
    content: 'Pineapple belongs on pizza.',
    category: 'Debate',
    upvotes: 2,
    downvotes: 20
  }
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Reset database
    console.log('Database synced (force: true).');

    await Prompt.bulkCreate(seedData);
    console.log('Database seeded successfully!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
