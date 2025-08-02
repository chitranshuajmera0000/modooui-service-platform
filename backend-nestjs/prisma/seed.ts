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

  // Create users
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
        bio: 'Full-stack developer with 8+ years of experience in web and mobile development. Specialized in React, Node.js, and cloud solutions.',
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
        bio: 'Creative UI/UX designer with expertise in brand identity, web design, and user experience optimization. 6 years in the industry.',
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
        bio: 'Digital marketing specialist helping businesses grow through SEO, content marketing, and social media strategies.',

      },
    }),
    prisma.user.create({
      data: {
        name: 'Emily Watson',
        email: 'emily@contentcreator.io',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: true,
        phone: '+1-555-0104',
        location: 'Seattle, WA',
        bio: 'Professional content writer and copywriter with expertise in blog posts, website copy, and technical documentation.',

      },
    }),
    prisma.user.create({
      data: {
        name: 'David Kim',
        email: 'david@mobilefirst.dev',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: true,
        phone: '+1-555-0105',
        location: 'Los Angeles, CA',
        bio: 'Mobile app developer specializing in React Native and Flutter. Built 20+ apps for startups and enterprises.',

      },
    }),
    prisma.user.create({
      data: {
        name: 'Lisa Anderson',
        email: 'lisa@bizstrategy.com',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: true,
        phone: '+1-555-0106',
        location: 'Chicago, IL',
        bio: 'Business consultant with MBA and 10+ years helping companies optimize operations and growth strategies.',

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
        bio: 'Founder of a tech startup looking to build our MVP and establish our digital presence.',

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
        bio: 'Owner of a boutique fashion store expanding to online sales and digital marketing.',

      },
    }),
    prisma.user.create({
      data: {
        name: 'Robert Taylor',
        email: 'robert@restaurant.biz',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: false,
        phone: '+1-555-0203',
        location: 'Austin, TX',
        bio: 'Restaurant owner looking to modernize our ordering system and improve customer experience.',

      },
    }),
    prisma.user.create({
      data: {
        name: 'Amanda White',
        email: 'amanda@nonprofit.org',
        password: await bcrypt.hash('password123', 10),
        isServiceProvider: false,
        phone: '+1-555-0204',
        location: 'Portland, OR',
        bio: 'Director of a non-profit organization seeking to improve our online presence and donor engagement.',

      },
    }),
  ]);

  console.log('👥 Created users');

  // Get providers and customers
  const providers = users.filter(user => user.isServiceProvider);
  const customers = users.filter(user => !user.isServiceProvider);

  // Create services
  const services = await Promise.all([
    // Alex Thompson's services
    prisma.service.create({
      data: {
        name: 'Professional Website Development',
        description: 'Custom website development using modern technologies like React, Next.js, and Node.js. Includes responsive design, SEO optimization, and content management system.',
        category: 'Web Development',
        basePrice: 2500,
        providerId: providers[0].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'E-commerce Store Setup',
        description: 'Complete e-commerce solution with payment processing, inventory management, order tracking, and customer dashboard. Built with Shopify or custom development.',
        category: 'Web Development',
        basePrice: 4500,
        providerId: providers[0].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'API Development & Integration',
        description: 'RESTful API development, third-party integrations, database design, and cloud deployment. Perfect for mobile apps and web applications.',
        category: 'Web Development',
        basePrice: 3000,
        providerId: providers[0].id,
      },
    }),

    // Sarah Chen's services
    prisma.service.create({
      data: {
        name: 'Brand Identity Design',
        description: 'Complete brand identity package including logo design, color palette, typography, business cards, and brand guidelines. Professional and memorable branding.',
        category: 'Design',
        basePrice: 1800,
        providerId: providers[1].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'UI/UX Design for Web & Mobile',
        description: 'User-centered design for websites and mobile applications. Includes wireframes, prototypes, user testing, and final designs optimized for conversion.',
        category: 'Design',
        basePrice: 2200,
        providerId: providers[1].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Website Redesign & Optimization',
        description: 'Transform your existing website with modern design, improved user experience, and conversion optimization. Includes A/B testing and analytics setup.',
        category: 'Design',
        basePrice: 2800,
        providerId: providers[1].id,
      },
    }),

    // Marcus Rodriguez's services
    prisma.service.create({
      data: {
        name: 'SEO & Content Marketing Strategy',
        description: 'Comprehensive SEO audit, keyword research, content strategy, and monthly content creation to boost your search rankings and organic traffic.',
        category: 'Marketing',
        basePrice: 1500,
        providerId: providers[2].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Social Media Management',
        description: 'Full social media management including content creation, posting schedule, community engagement, and monthly analytics reports for all major platforms.',
        category: 'Marketing',
        basePrice: 1200,
        providerId: providers[2].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Google Ads & PPC Management',
        description: 'Strategic Google Ads campaigns with keyword research, ad creation, landing page optimization, and ongoing management to maximize ROI.',
        category: 'Marketing',
        basePrice: 2000,
        providerId: providers[2].id,
      },
    }),

    // Emily Watson's services
    prisma.service.create({
      data: {
        name: 'Blog Content Writing',
        description: 'High-quality blog posts and articles tailored to your industry and audience. SEO-optimized content that drives traffic and engagement.',
        category: 'Writing',
        basePrice: 500,
        providerId: providers[3].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Website Copywriting',
        description: 'Compelling website copy that converts visitors into customers. Includes homepage, about page, service pages, and call-to-action optimization.',
        category: 'Writing',
        basePrice: 800,
        providerId: providers[3].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Technical Documentation',
        description: 'Clear and comprehensive technical documentation for software, APIs, and user manuals. Perfect for SaaS companies and tech startups.',
        category: 'Writing',
        basePrice: 1200,
        providerId: providers[3].id,
      },
    }),

    // David Kim's services
    prisma.service.create({
      data: {
        name: 'Cross-Platform Mobile App',
        description: 'Native-quality mobile applications for iOS and Android using React Native or Flutter. Includes app store submission and basic maintenance.',
        category: 'Mobile Development',
        basePrice: 8000,
        providerId: providers[4].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'App Store Optimization (ASO)',
        description: 'Optimize your mobile app for better visibility in app stores. Includes keyword research, description optimization, and icon/screenshot design.',
        category: 'Mobile Development',
        basePrice: 600,
        providerId: providers[4].id,
      },
    }),

    // Lisa Anderson's services
    prisma.service.create({
      data: {
        name: 'Business Strategy Consultation',
        description: 'Comprehensive business analysis and strategic planning sessions to identify growth opportunities and optimize operations for success.',
        category: 'Consulting',
        basePrice: 2500,
        providerId: providers[5].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Digital Transformation Consulting',
        description: 'Help traditional businesses adopt digital tools and processes. Includes technology assessment, implementation roadmap, and change management.',
        category: 'Consulting',
        basePrice: 3500,
        providerId: providers[5].id,
      },
    }),

    // Additional services for variety
    prisma.service.create({
      data: {
        name: 'WordPress Website Development',
        description: 'Professional WordPress websites with custom themes, plugins, and content management. Perfect for small businesses and blogs.',
        category: 'Web Development',
        basePrice: 1200,
        providerId: providers[0].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Logo Design & Branding',
        description: 'Custom logo design with multiple concepts, revisions, and final files in all formats. Quick turnaround for startups and rebrands.',
        category: 'Design',
        basePrice: 400,
        providerId: providers[1].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Email Marketing Campaigns',
        description: 'Strategic email marketing campaigns including template design, automation setup, and performance tracking to boost customer retention.',
        category: 'Marketing',
        basePrice: 800,
        providerId: providers[2].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Press Release Writing',
        description: 'Professional press releases for product launches, company announcements, and media outreach. Includes distribution strategy.',
        category: 'Writing',
        basePrice: 300,
        providerId: providers[3].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Mobile App UI Design',
        description: 'Beautiful, user-friendly mobile app interfaces designed for iOS and Android. Includes wireframes, mockups, and design system.',
        category: 'Mobile Development',
        basePrice: 1500,
        providerId: providers[4].id,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Market Research & Analysis',
        description: 'Comprehensive market research including competitor analysis, customer surveys, and industry trends to inform business decisions.',
        category: 'Consulting',
        basePrice: 1800,
        providerId: providers[5].id,
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
        description: 'I need a modern, responsive website for my tech startup. We need a professional landing page, about us section, services page, and contact form. The design should be clean and modern with a focus on converting visitors to leads.',
        budget: 3000,
        location: 'San Francisco, CA',
        status: 'PENDING',
      },
    }),
    prisma.quotationRequest.create({
      data: {
        userId: customers[1].id, // Jennifer Lopez
        serviceId: services[1].id, // E-commerce Store Setup
        description: 'Looking to redesign our boutique store website. Current site looks outdated and doesn\'t convert well. Need modern e-commerce functionality with payment processing and inventory management.',
        budget: 5000,
        location: 'Miami, FL',
        status: 'PENDING',
      },
    }),
    prisma.quotationRequest.create({
      data: {
        userId: customers[2].id, // Robert Taylor
        serviceId: services[3].id, // Brand Identity Design
        description: 'Our restaurant needs a complete brand identity. We\'re opening a new location and want fresh, modern branding that appeals to young professionals. Need logo, colors, and marketing materials.',
        budget: 2000,
        location: 'Austin, TX',
        status: 'RESPONDED',
        respondedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      },
    }),
    prisma.quotationRequest.create({
      data: {
        userId: customers[3].id, // Amanda White
        serviceId: services[6].id, // SEO & Content Marketing Strategy
        description: 'Our non-profit organization needs help with digital marketing and SEO. We want to increase our online visibility to attract more donors and volunteers. Currently our website gets very little traffic.',
        budget: 1800,
        location: 'Portland, OR',
        status: 'PENDING',
      },
    }),
    prisma.quotationRequest.create({
      data: {
        userId: customers[2].id, // Robert Taylor
        serviceId: services[12].id, // Cross-Platform Mobile App
        description: 'We need a mobile app for our restaurant that allows customers to place orders for pickup and delivery. Should integrate with our existing POS system and include loyalty program features.',
        budget: 10000,
        location: 'Austin, TX',
        status: 'PENDING',
      },
    }),
    prisma.quotationRequest.create({
      data: {
        userId: customers[1].id, // Jennifer Lopez
        serviceId: services[10].id, // Website Copywriting
        description: 'Looking for ongoing website copywriting for our boutique. Need product descriptions, category pages, and blog content that drives sales and improves SEO rankings.',
        budget: 1000,
        location: 'Miami, FL',
        status: 'ACCEPTED',
        respondedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      },
    }),
  ]);

  console.log('📋 Created quotation requests');

  // Create quotations (responses from providers)
  const quotations = await Promise.all([
    prisma.quotation.create({
      data: {
        requestId: quotationRequests[2].id, // Robert's brand identity request
        providerId: providers[1].id, // Sarah Chen
        price: 1850,
        description: 'I\'d love to work on your restaurant branding! I have extensive experience with hospitality brands and can create a modern identity that resonates with your target audience. The package includes logo design, color palette, business cards, menu design, and social media templates.',
        estimatedDuration: '4 weeks',
        status: 'ACCEPTED',
        validUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      },
    }),
    prisma.quotation.create({
      data: {
        requestId: quotationRequests[5].id, // Jennifer's copywriting request
        providerId: providers[3].id, // Emily Watson
        price: 950,
        description: 'Perfect! I specialize in fashion and retail copywriting. I can help you create compelling product descriptions and engaging blog content that drives both traffic and sales. My writing style adapts to your brand voice perfectly.',
        estimatedDuration: 'Monthly ongoing',
        status: 'ACCEPTED',
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      },
    }),
    prisma.quotation.create({
      data: {
        requestId: quotationRequests[0].id, // John's website request
        providerId: providers[0].id, // Alex Thompson
        price: 2800,
        description: 'I can build a professional, modern website for your startup using Next.js and React. The package includes responsive design, SEO optimization, contact forms, blog section, and analytics integration. I\'ll also provide basic maintenance for the first 3 months.',
        estimatedDuration: '6 weeks',
        status: 'SENT',
        validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      },
    }),
    prisma.quotation.create({
      data: {
        requestId: quotationRequests[1].id, // Jennifer's e-commerce request
        providerId: providers[0].id, // Alex Thompson
        price: 4200,
        description: 'I can create a beautiful e-commerce store for your boutique with modern design and full functionality. Includes payment processing, inventory management, order tracking, mobile optimization, and integration with your preferred payment gateways.',
        estimatedDuration: '8 weeks',
        status: 'SENT',
        validUntil: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      },
    }),
    prisma.quotation.create({
      data: {
        requestId: quotationRequests[4].id, // Robert's mobile app request
        providerId: providers[4].id, // David Kim
        price: 9500,
        description: 'I can build a comprehensive mobile app for your restaurant with ordering, payment processing, loyalty program, and POS integration. The app will be built using React Native for both iOS and Android, with a modern, user-friendly interface.',
        estimatedDuration: '12 weeks',
        status: 'SENT',
        validUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      },
    }),
  ]);

  console.log('💬 Created quotations');

  // Create some consultations for accepted quotations
  const consultations = await Promise.all([
    prisma.consultation.create({
      data: {
        userId: customers[2].id, // Robert Taylor
        quotationId: quotations[0].id, // Sarah's brand identity quotation
        scheduledDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        status: 'SCHEDULED',
        notes: 'Initial brand discovery session to discuss vision, target audience, and design preferences.',
        meetingType: 'Video Call',
      },
    }),
    prisma.consultation.create({
      data: {
        userId: customers[1].id, // Jennifer Lopez
        quotationId: quotations[1].id, // Emily's copywriting quotation
        scheduledDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Tomorrow
        status: 'SCHEDULED',
        notes: 'Content strategy session to understand brand voice, target customers, and content requirements.',
        meetingType: 'Phone Call',
      },
    }),
  ]);

  console.log('📅 Created consultations');

  // Summary
  console.log('\n🎉 Database seeded successfully!');
  console.log(`👥 Created ${users.length} users (${providers.length} providers, ${customers.length} customers)`);
  console.log(`🛠️  Created ${services.length} services across multiple categories`);
  console.log(`📋 Created ${quotationRequests.length} quotation requests`);
  console.log(`💬 Created ${quotations.length} quotations`);
  console.log(`📅 Created ${consultations.length} consultations`);
  
  console.log('\n📧 Test Login Credentials:');
  console.log('Providers:');
  console.log('- alex@techsolutions.com / password123 (Web Developer)');
  console.log('- sarah@designstudio.co / password123 (UI/UX Designer)');
  console.log('- marcus@marketingpro.net / password123 (Marketing Specialist)');
  console.log('- emily@contentcreator.io / password123 (Content Writer)');
  console.log('- david@mobilefirst.dev / password123 (Mobile Developer)');
  console.log('- lisa@bizstrategy.com / password123 (Business Consultant)');
  
  console.log('\nCustomers:');
  console.log('- john@startup.com / password123 (Startup Founder)');
  console.log('- jennifer@boutique.shop / password123 (Boutique Owner)');
  console.log('- robert@restaurant.biz / password123 (Restaurant Owner)');
  console.log('- amanda@nonprofit.org / password123 (Non-profit Director)');

  console.log('\n📊 Data Overview:');
  console.log('- Quotation Requests: PENDING (4), RESPONDED (1), ACCEPTED (1)');
  console.log('- Quotations: SENT (3), ACCEPTED (2)');
  console.log('- Consultations: SCHEDULED (2)');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
