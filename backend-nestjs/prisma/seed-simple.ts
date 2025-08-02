import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting to seed database...');

  // Clear existing data in correct order
  await prisma.consultation.deleteMany();
  await prisma.quotation.deleteMany();
  await prisma.quotationRequest.deleteMany();
  await prisma.service.deleteMany();
  await prisma.user.deleteMany();

  console.log('🗑️  Cleared existing data');

  // Create users - matching exact schema fields
  const users = await Promise.all([
    // Service Providers
    prisma.user.create({
      data: {
        name: 'Alex Thompson',
        email: 'alex@techsolutions.com',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: true,
        phone: '+1-555-0101',
        location: 'San Francisco, CA',
        bio: 'Full-stack developer with 8+ years of experience in web and mobile development.',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Sarah Chen',
        email: 'sarah@designstudio.co',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: true,
        phone: '+1-555-0102',
        location: 'New York, NY',
        bio: 'Creative UI/UX designer with expertise in brand identity and web design.',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Marcus Rodriguez',
        email: 'marcus@marketingpro.net',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: true,
        phone: '+1-555-0103',
        location: 'Austin, TX',
        bio: 'Digital marketing specialist helping businesses grow through SEO and content marketing.',
      },
    }),

    // Customers
    prisma.user.create({
      data: {
        name: 'John Miller',
        email: 'john@startup.com',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: false,
        phone: '+1-555-0201',
        location: 'San Francisco, CA',
        bio: 'Founder of a tech startup looking to build our MVP.',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Jennifer Lopez',
        email: 'jennifer@boutique.shop',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: false,
        phone: '+1-555-0202',
        location: 'Miami, FL',
        bio: 'Owner of a boutique fashion store expanding to online sales.',
      },
    }),
  ]);

  console.log('👥 Created users');

  // Get providers and customers
  const providers = users.filter(user => user.isServiceProvider);
  const customers = users.filter(user => !user.isServiceProvider);

  // Create services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: 'Professional Website Development',
        description: 'Custom website development using modern technologies like React, Next.js, and Node.js.',
        category: 'Web Development',
        basePrice: 2500,
        providerId: providers[0].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'E-commerce Store Setup',
        description: 'Complete e-commerce solution with payment processing and inventory management.',
        category: 'Web Development',
        basePrice: 4500,
        providerId: providers[0].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Brand Identity Design',
        description: 'Complete brand identity package including logo design and brand guidelines.',
        category: 'Design',
        basePrice: 1800,
        providerId: providers[1].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'UI/UX Design for Web & Mobile',
        description: 'User-centered design for websites and mobile applications.',
        category: 'Design',
        basePrice: 2200,
        providerId: providers[1].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'SEO & Content Marketing Strategy',
        description: 'Comprehensive SEO audit and content strategy to boost search rankings.',
        category: 'Marketing',
        basePrice: 1500,
        providerId: providers[2].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Social Media Management',
        description: 'Full social media management including content creation and engagement.',
        category: 'Marketing',
        basePrice: 1200,
        providerId: providers[2].id,
      },
    }),
  ]);

  console.log('🛠️  Created services');

  // Create quotation requests
  const quotationRequests = await Promise.all([
    prisma.quotationRequest.create({
      data: {
        userId: customers[0].id, // John Miller
        serviceId: services[0].id, // Professional Website Development
        description: 'I need a modern, responsive website for my tech startup.',
        budget: 3000,
        location: 'San Francisco, CA',
        status: 'PENDING',
      },
    }),
    prisma.quotationRequest.create({
      data: {
        userId: customers[1].id, // Jennifer Lopez
        serviceId: services[2].id, // Brand Identity Design
        description: 'Our boutique needs a complete brand identity package.',
        budget: 2000,
        location: 'Miami, FL',
        status: 'RESPONDED',
        respondedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      },
    }),
  ]);

  console.log('📋 Created quotation requests');

  // Create quotations (responses from providers)
  const quotations = await Promise.all([
    prisma.quotation.create({
      data: {
        requestId: quotationRequests[1].id, // Jennifer's brand identity request
        providerId: providers[1].id, // Sarah Chen
        price: 1850,
        description: 'I can create a modern brand identity that resonates with your target audience.',
        estimatedDuration: '4 weeks',
        status: 'SENT',
        validUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      },
    }),
  ]);

  console.log('💬 Created quotations');

  // Summary
  console.log('\n🎉 Database seeded successfully!');
  console.log(`👥 Created ${users.length} users (${providers.length} providers, ${customers.length} customers)`);
  console.log(`🛠️  Created ${services.length} services`);
  console.log(`📋 Created ${quotationRequests.length} quotation requests`);
  console.log(`💬 Created ${quotations.length} quotations`);
  
  console.log('\n📧 Test Login Credentials:');
  console.log('Providers:');
  console.log('- alex@techsolutions.com / password123');
  console.log('- sarah@designstudio.co / password123');
  console.log('- marcus@marketingpro.net / password123');
  
  console.log('\nCustomers:');
  console.log('- john@startup.com / password123');
  console.log('- jennifer@boutique.shop / password123');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
