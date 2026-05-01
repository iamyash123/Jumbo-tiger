export const modulesData = {
    'booking-onboarding': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Applications, housemate matching, digital contracts, ID verification, welcome packs, and move-in automation.',
            icon: {
                name: 'phone',
            },
            title: 'Booking & Onboarding',
            description:
                'From first enquiry to move-in day, automate the entire resident journey. Online applications, housemate matching, digital contracts, e-signatures, deposits, and move-in checklists in one seamless flow.',
            image: '/images/booking-banner.svg',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: 'Manual Onboarding Costs You Beds & Revenue',
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Scattered Applications',
                    desc: "Generic PMS tools weren't built for coliving. Shared rooms, flexible stays, per-bed billing, community events, B2B channel managers they can’t handle it. So you end up with spreadsheets filling the gaps.",
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Vetting & Approval',
                    desc: 'Reviewing applications, validating documents, and deciding who to approve takes too long when your team is switching between inboxes, spreadsheets, and disconnected tools.',
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Contract Chaos',
                    desc: 'Generating agreements, collecting signatures, and tracking status manually creates delays that slow down move-ins and frustrate applicants.',
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Housemate Visibility',
                    desc: 'Without structured resident data, operators struggle to match applicants to the right rooms, communities, and lifestyle fit.',
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Booking Abandonment',
                    desc: 'Prospective residents drop off when pricing, availability, and next steps are unclear or too slow to arrive.',
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Deposit & Payment Gaps',
                    desc: 'Deposits, first rent, and onboarding documents often live in separate processes, creating avoidable manual follow-up before move-in.',
                },
            ],
        },
        grid: [
            {
                title: 'Smart Application Pipeline',
                description:
                    'Capture every lead from every channel and move them through a configurable pipeline with automated scoring, instant quote generation, and real-time status updates.',
                points: [
                    'Centralized lead inbox from web forms, OTAs, WhatsApp, email, and partner channels',
                    'Instant quote portal: enquiry-to-quote in under 60 seconds with live availability',
                    'Automated applicant scoring (1-10) with auto-categorization: Approved, Medium, Rejected',
                    'Team notes, internal comments, and collaboration per applicant',
                    'Former resident re-application with pre-filled data and history',
                    'Conversion analytics, pipeline dashboards, and booking abandonment tracking'
                ],
                image: '/images/booking-1.svg',
            },
            {
                title: 'Housemate Matching & Compatibility',
                description:
                    'Help prospective residents find their perfect living situation. Display existing housemate profiles, match based on preferences, and build community before move-in day.',
                points: [
                    'Opt-in housemate profiles visible on listings (interests, occupation, lifestyle)',
                    'Compatibility matching based on preferences: schedule, cleanliness, noise, social habits',
                    'Student matching by study program, nationality, gender, and language preferences',
                    'Room allocation suggestions based on compatibility scores and availability',
                    'Existing residents can review and approve potential new housemates',
                    'Community preview: show upcoming events and house culture before signing',
                ],
                image: '/images/booking-2.svg',
            },
            {
                title: 'Digital Contracts & Verification',
                description:
                    'Generate tenancy contracts from custom templates, collect e-signatures, run background checks, and verify identity with biometric ID matching -- all without paper.',
                points: [
                    'Automated tenancy contract generation with custom templates per property',
                    'E-signature integration (DocuSign) for paperless contract signing',
                    'KYC verification with biometric passport/ID matching (95%+ accuracy)',
                    'Background and credit check integration (Advanced Rent, Canopy, Homeppl)',
                    'Right-to-rent verification with automated renewal alerts',
                    'Guarantor referencing with separate agreement signing and liability tracking'
                ],
                image: '/images/booking-3.svg',
            },
            {
                title: 'Move-In Orchestration & Welcome Packs',
                description:
                    'Coordinate every detail of move-in day with automated checklists, digital condition reports, and multimedia welcome packs that make new residents feel at home instantly.',
                points: [
                    'Automated move-in checklist with task tracking per resident and staff assignment',
                    'Digital condition reports with room-by-room photo documentation and sign-off',
                    'Key and access card assignment with smart lock code auto-provisioning',
                    'Multimedia welcome packs: WiFi codes, house rules, emergency contacts, local guides, videos',
                    'Welcome pack templates cascading from portfolio level to individual property',
                    'Automated welcome communications, app activation, and community introduction'
                ],
                image: '/images/booking-4.svg',
            },
            {
                title: 'Online Check-In & Self-Service Arrival',
                description:
                    'Let residents complete their entire check-in before they arrive. Pre-arrival data collection, ID verification, deposit payment, and access code delivery -- all automated.',
                points: [
                    'Pre-arrival online check-in: ID upload, travel docs, emergency contacts',
                    'Automated deposit and first rent collection during check-in flow',
                    'Access code and smart lock credentials delivered automatically on check-in date',
                    'Upsell add-on services during check-in: cleaning, parking, gym membership',
                    'Branded local attraction guides and neighborhood information',
                    'Self-service kiosk mode for staffed reception areas'
                ],
                image: '/images/booking-5.svg',
            },
            {
                title: 'Bulk Onboarding & Academic Intake',
                description:
                    'Handle mass move-ins with ease. Process hundreds of applications simultaneously for student housing cycles, corporate relocations, or new property launches.',
                points: [
                    'Bulk application processing with automated vetting and batch status updates',
                    'Mass contract generation and e-signature collection for academic year intake',
                    'Bulk deposit invoicing and payment tracking across entire cohorts',
                    'Waitlist management with automated offers when spots open',
                    'Room allocation engine based on preferences, gender, and program',
                    'Mid-year intake support for Erasmus and exchange students'
                ],
                image: '/images/booking-6.svg',
            },
        ],
        automate: {
            title: 'Automate Your Entire Onboarding Flow',
            description: 'See how JumboTiger can take your booking-to-move-in process from days to hours.',
        },
        stats: [
            { value: '3X', label: 'Faster lead-to-move-in conversion' },
            { value: '85%', label: 'Reduction in manual onboarding tasks' },
            { value: '60S', label: 'Enquiry-to-quote with instant availability' },
            { value: '95%', label: 'ID verification accuracy with biometric matching' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We used to spend 3-4 days onboarding each resident. With JumboTiger, most complete the entire process online before they even arrive. Move-in day is now just handing over keys.",
                    "name": "Operations Director",
                    "role": "UK Coliving Operator, 500+ beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Booking & Onboarding Questions',
            items: [
                {
                    question: 'How does the housemate matching work?',
                    answer: 'Existing residents create opt-in profiles with their interests, lifestyle preferences, and schedule. When new applicants view a listing, they can see who already lives there and get a compatibility score based on shared preferences. Operators can also use matching to suggest optimal room allocations.',
                },
                {
                    question: 'Can we customize the application pipeline stages?',
                    answer: 'Absolutely. Pipeline stages are fully configurable per property. You can add, remove, or rename stages and set automation rules for each transition.',
                },
                {
                    question: 'Does JumboTiger support bulk onboarding for student housing?',
                    answer: 'Yes. Our bulk processing tools handle mass applications, contract generation, deposit invoicing, and room allocation for academic year intakes. Waitlist management and mid-year intake for exchange students are also supported.',
                },
                {
                    question: 'What ID verification methods are supported?',
                    answer: 'We support biometric passport and ID matching with 95%+ accuracy, plus integrations with third-party referencing services for credit checks, right-to-rent, and background verification.',
                },
                {
                    question: 'How do welcome packs work?',
                    answer: 'Create multimedia templates with text, images, videos, WiFi codes, house rules, and local guides. Templates cascade from portfolio level to property level, and are automatically delivered to residents during check-in.',
                },
                {
                    question: 'Can residents check in online before arrival?',
                    answer: 'Yes. Our online check-in flow lets residents complete ID verification, document upload, deposit payment, and receive access codes before they physically arrive. Move-in day becomes seamless.',
                },
                {
                    question: 'Does the quote portal show live availability?',
                    answer: 'Yes. The quote portal pulls real-time availability from the inventory module, so prospects get instant, accurate quotes with current pricing and available rooms.',
                },
            ],
        },
        readybuild: {
            title: 'READY TO AUTOMATE MOVE-INS?',
            description: "Tell us about your resident journey and operations. We'll show you exactly how Booking & Onboarding can reduce manual work and get residents moving faster.",
        },
    },
    'payments-rent': {
        banner: {
            cardImage: 'images/payments-card.svg',
            cardDiscription: 'Automated invoicing, utility billing, multi-gateway payments, Open Banking AI matching, and accounting sync.',
            icon: {
                name: 'dollar',
            },
            title: 'Payments & Rent Collection',
            image: '/images/payments-banner.svg',
            description:
                'Automate invoicing, collect rent through multiple gateways, manage dynamic pricing, track utilities, and sync with your accounting stack. Every payment, every property, one dashboard.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: 'Manual Rent Collection Kills Cash Flow',
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Payment Chase', desc: 'Staff spending hours sending manual reminders, tracking partial payments, and reconciling bank statements.'
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Static Pricing', desc: 'No ability to adjust rates dynamically based on demand, season, or occupancy -- leaving revenue on the table.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Utility Nightmares', desc: 'Splitting utility bills across shared rooms and common areas requires complex spreadsheets with no real-time tracking.'
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Deposit Disputes', desc: 'Manual deposit tracking leads to disputes, missing audit trails, and compliance headaches at move-out.'
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Accounting Disconnects', desc: 'Data re-entered between PMS and accounting software, causing reconciliation errors and delayed reporting.'
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Multi-Currency Chaos', desc: 'International operators juggling multiple currencies, tax rules, and payment methods across properties.'
                },
            ],
        },
        grid: [
            {
                title: 'Automated Invoicing & Smart Collection',
                description: 'Generate invoices automatically from contract terms, send them via email and WhatsApp, and let AI match incoming payments to the right invoices -- even partial payments.',
                points: [
                    'Auto-generated invoices based on contract terms, billing cycles, and charge types',
                    'Open Banking integration with AI-powered payment matching and reconciliation',
                    'Automated payment reminders via email, WhatsApp, SMS, and in-app push notifications',
                    'Configurable late fee calculation, escalation rules, and credit control workflows',
                    'Partial payment handling, overpayment allocation, and credit note processing',
                    'Bulk invoice generation across all properties in seconds'
                ],
                image: '/images/payments-1.svg',
            },
            {
                title: 'Multi-Gateway Payment Processing',
                description: 'Accept payments however your residents want to pay. Cards, direct debit, SEPA, UPI, bank transfers -- all unified in one system with zero markup on transaction fees.',
                points: [
                    'Stripe integration for card and bank payments with 3D Secure authentication',
                    'GoCardless for direct debit and SEPA mandates across Europe',
                    'Regional gateway support: PayTabs, UPI QR codes, and local payment methods',
                    'Recurring payment setup with saved methods and automatic retry on failures',
                    'Real-time payment status dashboard with instant settlement tracking',
                    'Zero markup on payment gateway fees -- only standard provider rates'
                ],
                image: '/images/payments-2.svg',
            },
            {
                title: 'Deposit Lifecycle Management',
                description: 'Handle the entire deposit journey from collection to refund. Automated deductions linked to inspection reports, full audit trails, and compliance with regional deposit regulations.',
                points: [
                    'Automated deposit invoice on booking confirmation with separate ledger tracking',
                    'Deposit holding linked to move-in condition reports with photo evidence',
                    'Itemized deduction management tied to move-out inspections',
                    'Automated refund calculation and processing within regulatory timelines',
                    'Interest calculation where legally required with jurisdiction-specific rules',
                    'Full deposit audit trail for compliance and dispute resolution'
                ],
                image: '/images/payments-3.svg',
            },
            {
                title: 'Accounting Sync & Financial ReportingManagemen',
                description: 'Two-way sync with Xero, QuickBooks, and Odoo. Automated journal entries, VAT compliance, multi-currency support, and board-ready financial reports at the click of a button.',
                points: [
                    'Xero two-way sync: chart of accounts mapping, invoices, payments, and reconciliation',
                    'QuickBooks and Odoo integration with automated journal entries',
                    'Configurable VAT/tax rules per property, jurisdiction, and charge type',
                    'Multi-currency support with automatic conversion and per-property currency config',
                    'Revenue dashboards with outstanding aging reports and cash flow projections',
                    'Board-ready financial reports exportable for investors and stakeholders'
                ],
                image: '/images/payments-4.svg',
            },
            {
                title: 'Revenue Management & Dynamic Pricing',
                description: 'Maximize RevPAB with AI-powered dynamic pricing, PriceLabs integration, hybrid pricing by stay type, and revenue forecasting that adapts to demand in real time.',
                points: [
                    'PriceLabs integration for automated dynamic pricing based on demand, seasonality, and comp-set',
                    'Hybrid pricing engine: different rate strategies for short-stay, mid-term, and long-term residents',
                    'RevPAB (Revenue Per Available Bed) analytics with property and portfolio-level dashboards',
                    'Void cost tracking and gap-night optimization to minimize revenue loss between tenancies',
                    'Revenue forecasting with scenario modeling for budget planning and investor reporting',
                    'Automated rate adjustments: lead-time rules switch from long-stay to short-stay pricing as dates approach'
                ],
                image: '/images/payments-5.svg',
            },

            {
                title: 'Utility & Energy Management',
                description: 'Smart metering, per-unit consumption tracking, automated cost allocation, leak detection, and sustainability reporting -- integrated directly into your billing workflow.',
                points: [
                    'Smart meter integration (electricity, gas, water, heat) with automatic 15-minute interval readings',
                    'Per-unit consumption dashboards with benchmarking, outlier detection, and resident-facing transparency',
                    'Configurable billing models: metered, proportional, capped allowance, or all-inclusive per property',
                    'AI-powered anomaly detection: water leaks, HVAC faults, and energy waste caught within hours',
                    'Resident energy portal with usage visibility, saving tips, and transparent charge breakdowns',
                    'ESG and sustainability reporting: carbon footprint, EPC tracking, and investor-ready reports'
                ],
                image: '/images/payments-6.svg',
            },
        ],
        automate: {
            title: 'Stop Chasing Payments, Start Automating Revenue',
            description: 'See how JumboTiger automates rent collection, dynamic pricing, and utility billing for operators like you.',
        },
        stats: [
            { value: '60%', label: 'Reduction in payment processing time' },
            { value: '98%', label: 'On-time rent collection rate' },
            { value: '15%', label: 'Revenue uplift with dynamic pricing' },
            { value: '24/7', label: 'Faster reconciliation with AI matching' },
        ],
        clientWords: {

            "testimonials": [
                {
                    "quote": "We went from spending 2 days a month reconciling payments to having it done automatically. The dynamic pricing module alone paid for the entire platform in the first quarter.",
                    "name": "Finance Director",
                    "role": "European Flex Living Brand, 1,200+ beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Payments & Rent Questions',
            items: [
                {
                    question: 'How does dynamic pricing work?',
                    answer: 'JumboTiger integrates with PriceLabs and our own pricing engine to automatically adjust rates based on demand, seasonality, competitor pricing, and occupancy levels. You set the rules and boundaries; the system optimizes within them.',
                },
                {
                    question: 'Can we handle utility billing for shared rooms?',
                    answer: 'Yes. Smart meter integration tracks consumption per room in real-time. For shared spaces, you can configure splitting rules (equal, by bed, by usage). You can also offer all-inclusive pricing that bundles utilities into rent.',
                },
                {
                    question: 'What payment methods are supported?',
                    answer: 'We support Stripe (cards, bank transfers), GoCardless (direct debit, SEPA), PayTabs, UPI QR codes, and standard bank transfers. Residents can save payment methods for recurring charges.',
                },
                {
                    question: 'Does JumboTiger handle multi-currency billing?',
                    answer: 'Yes. Each property can be configured with its own currency. The system handles automatic conversion, jurisdiction-specific tax rules, and multi-currency financial reporting.',
                },
                {
                    question: 'How does AI payment matching work?',
                    answer: 'Our Open Banking integration monitors incoming bank transactions and uses AI to match them to outstanding invoices -- even partial payments. Uncertain matches are flagged for human review.',
                },
                {
                    question: 'Can we create custom pricing for corporate clients?',
                    answer: 'Absolutely. Set negotiated rates per corporate partner, manage bulk booking discounts, and configure different pricing tiers for short-term, mid-term, and long-term stays.',
                },
                {
                    question: 'How are deposits handled at move-out?',
                    answer: 'Move-out inspections generate itemized deduction reports linked to move-in condition photos. The system calculates refund amounts, processes payments within regulatory timelines, and maintains a full audit trail.',
                },
            ],
        },
        readybuild: {
            title: 'Ready to Automate Your Revenue Engine?',
            description: "Book a demo and see how operators increase collection rates to 98% and boost revenue 15% with dynamic pricing.",
        },
    },
    'tenant-portal': {
        banner: {
            cardImage: 'images/tenant-card.svg',
            cardDiscription: 'Branded app with payments, community, welcome packs, meal plans, facility booking, and NPS.',
            title: 'Tenant Portal & Mobile App',
            image: '/images/tenant-banner.svg',

            description:
                'A fully branded web and mobile app where residents pay rent, book facilities, submit tickets, register visitors, order meals, access welcome guides, and connect with their community.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: 'Residents Deserve Better Than Email & WhatsApp',
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Central Hub', desc: 'Residents ping you on WhatsApp, email, phone, and in person. Nothing is tracked, nothing is resolved efficiently.'
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Zero Community', desc: 'Coliving thrives on community, but without a platform, events die, residents feel isolated, and renewals drop.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Visitor Management', desc: 'No system for pre-registering guests, generating visitor passes, or tracking who enters and exits your property.'
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Meal Plan Chaos', desc: 'Operators offering F&B have no way for residents to opt in/out of meals, view menus, or get billed automatically.'
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Lost Information', desc: 'WiFi passwords, house rules, emergency contacts, and local guides shared once and immediately forgotten.'
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Feedback Loop', desc: 'No systematic way to measure resident satisfaction, collect feedback, or track NPS scores across properties.'
                },
            ],
        },
        grid: [
            {
                title: 'Payments, Invoices & Self-Service',
                description: 'One-tap rent payment, full invoice history, payment receipts, and balance visibility. Residents never need to ask "when is my rent due?" again.',
                points: [
                    'One-tap rent payment with saved payment methods (card, direct debit, UPI)',
                    'Invoice history, downloadable receipts, and upcoming payment schedule',
                    'Real-time balance visibility with overdue alerts and payment reminders',
                    'Subscription management for add-on services (cleaning, parking, gym)',
                    'Multiple payment methods: bank transfer, card, Apple Pay, Google Pay',
                    'Direct debit mandate setup and management through the app'
                ],
                image: '/images/tenant-1.svg',
            },
            {
                title: 'Visitor Management & Access Control',
                description: 'Let residents pre-register guests, generate QR-coded visitor passes, and manage temporary access -- all from their phone. Front desk teams get real-time visitor logs.',
                points: [
                    'Short-term visitor registration with date, time, and purpose tracking',
                    'Long-term guest registration for extended stays with management approval',
                    'QR code visitor passes generated and shared via WhatsApp or in-app',
                    'Digital visitor log with check-in/check-out timestamps and photo capture',
                    'Vendor and contractor access management with movement tracking',
                    'Front desk verification tools with real-time access visibility'
                ],
                image: '/images/tenant-2.svg',
            },
            {
                title: 'Community, Events & Social',
                description: 'Build the community that makes coliving special. Event creation, RSVP tracking, social feeds, polls, marketplace, and resident directory -- all in a branded space.',
                points: [
                    'Community feed with announcements, updates, and resident posts',
                    'Event creation with RSVP tracking, attendance, and reminders',
                    'Polls and surveys for resident feedback and decision-making',
                    'Resident directory with opt-in profiles, interests, and bios',
                    'In-app messaging between residents and between residents and management',
                    'Local offers and partnerships: exclusive deals from nearby businesses'
                ],
                image: '/images/tenant-3.svg',
            },
            {
                title: 'Welcome Packs & Digital Guides',
                description: 'Replace the paper welcome folder with rich multimedia guides. WiFi codes, house rules, appliance manuals, local attractions, emergency contacts -- always accessible, always up to date.',
                points: [
                    'Multimedia welcome packs with text, images, videos, and documents',
                    'Template-based: create once at portfolio level, customize per property',
                    'Dynamic content: show different guides based on resident lifecycle stage',
                    'Property-specific info: WiFi, parking, gym hours, laundry, recycling',
                    'Local area guides with restaurants, transport, healthcare, and attractions',
                    'Automatic distribution to new residents during check-in flow'
                ],
                image: '/images/tenant-4.svg',
            },
            {
                title: 'Food & Meal Management',
                description: 'For operators offering F&B, let residents view weekly menus, opt in or out of meal plans, track dietary preferences, and get billed automatically. Reduce food waste and admin simultaneously.',
                points: [
                    'Weekly meal menus published in-app with photos and dietary labels',
                    'Resident opt-in/opt-out per meal with automated billing adjustments',
                    'Dietary preference tracking: vegetarian, vegan, halal, allergies',
                    'Meal plan packages with flexible pricing (daily, weekly, monthly)',
                    'Food waste reduction: real-time headcount for kitchen planning',
                    'Automatic meal charges added to monthly invoice or charged separately'
                ],
                image: '/images/tenant-5.svg',
            },

            {
                title: 'Maintenance, Bookings & NPS',
                description: 'Submit tickets with photos, book facilities with a calendar, and rate your experience. Operators get satisfaction scores and actionable feedback across every property.',
                points: [
                    'Maintenance ticket submission with photo upload and priority selection',
                    'Real-time ticket status tracking with automated progress updates',
                    'Facility and amenity booking with calendar view and time-slot management',
                    'NPS and satisfaction surveys triggered at key lifecycle moments',
                    'Feedback collection after ticket resolution, events, and renewals',
                    'Tenant satisfaction dashboards with property-level and portfolio-level NPS'
                ],
                image: '/images/tenant-6.svg',
            },
        ],
        automate: {
            title: "Give Your Residents an App They'll Actually Love",
            description: 'See how a branded tenant portal drives community, reduces support load, and boosts renewals.',
        },
        stats: [
            { value: '70%', label: 'Reduction in resident support queries' },
            { value: '20%', label: 'Incremental revenue from in-app services' },
            { value: '85%', label: 'Resident app adoption in first month' },
            { value: '+15', label: 'Average NPS increase after deployment' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "The tenant app transformed our resident experience. Visitor management alone saved our reception team 2 hours a day. Community engagement doubled and our renewal rate jumped 18%.",
                    "name": "Community Manager",
                    "role": "South Asian Coliving Brand, 300+ beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Is the app fully white-labeled?',
                    answer: 'Yes. Custom app name and icon on App Store and Google Play. Your brand colors, logo, and visual identity throughout. Zero JumboTiger branding visible to residents.',
                },
                {
                    question: 'How does visitor management work?',
                    answer: 'Residents pre-register guests from the app. The system generates a QR-coded visitor pass that can be shared via WhatsApp. At arrival, front desk scans the QR code, verifying identity and logging check-in time. All visitor activity is tracked in real-time.',
                },
                {
                    question: 'Can we manage meal plans through the app?',
                    answer: 'Yes. Publish weekly menus, let residents opt in or out of individual meals, track dietary preferences, and automatically add meal charges to their invoice. Kitchen teams get real-time headcount for planning.',
                },
                {
                    question: 'How does the NPS scoring work?',
                    answer: 'Automated surveys are triggered at key moments: after ticket resolution, post-event, at renewal time, and periodically. Scores are aggregated into property-level and portfolio-level NPS dashboards with trend analysis.',
                },
                {
                    question: 'What community features are available?',
                    answer: 'Social feeds, event creation with RSVP, polls, surveys, resident directory with opt-in profiles, in-app messaging, and local business partnerships with exclusive offers.',
                },
                {
                    question: 'Can residents book facilities and services?',
                    answer: 'Yes. Configurable bookable spaces (meeting rooms, laundry, gym, coworking) with time-slot management. Paid services like cleaning, parking, and laundry can be booked and billed through the app.',
                },
                {
                    question: 'Is there a web version too?',
                    answer: 'Yes. Available as responsive web app and native iOS/Android apps. Residents can access everything from any device.',
                },
            ],
        },
        readybuild: {
            title: 'Ready to Launch Your Branded Resident App?',
            description: "Book a demo and see how a white-label tenant portal drives community and cuts support costs by 70%.",
        },
    },
    'inventory-occupancy': {
        banner: {
            cardImage: 'images/inventory-card.svg',
            cardDiscription: 'Real-time tracking, hybrid stay management, vacancy forecasting, per-bed inventory, and turnaround optimization.',
            title: 'Inventory & Occupancy Management',
            image: '/images/inventory-banner.svg',
            description:
                'Track every bed, room, and unit across your portfolio in real-time. Manage hybrid stays, forecast vacancies, optimize occupancy, and make data-driven decisions with live dashboards.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: 'Blind Spots in Your Portfolio Cost You Money',
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Real-Time View', desc: "Occupancy tracked in spreadsheets that are outdated the moment they're saved. No live dashboard across properties."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Single Stay Type', desc: 'Platform only supports long-term or short-term -- not both. Revenue lost from gaps between long stays that could be filled with short stays.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Forecasting', desc: 'Vacancy forecasting is guesswork. No data-driven visibility into upcoming lease expirations, churn risk, or seasonal demand.'
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Renewal Gaps', desc: 'Renewals managed manually, leading to missed windows, lost residents, and unnecessary turnover costs.'
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Yield Optimization', desc: "Can't compare RevPAB across room types, properties, or time periods. Pricing decisions based on gut feeling."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Turnarounds', desc: "Move-out to re-listing takes days because there's no coordinated workflow between inspection, cleaning, and listing."
                },
            ],
        },
        grid: [
            {
                title: 'Real-Time Portfolio Dashboard',
                description: 'See every bed, room, and unit across your entire portfolio at a glance. Drill down from portfolio to property to building to floor to individual unit.',
                points: [
                    'Real-time bed/room/unit availability tracking across all properties',
                    'Multi-property portfolio dashboard with drill-down to individual units',
                    'Room type management: shared, private, studio, ensuite, flexible',
                    'Floor plan and building hierarchy configuration (portfolio > property > building > floor > unit)',
                    'Color-coded status views: available, occupied, reserved, maintenance, turnaround',
                    'Multi-calendar view for visual availability across weeks and months'
                ],
                image: '/images/inventory-1.svg',
            },
            {
                title: 'Hybrid Stay Management',
                description: 'Manage short-term, mid-term, and long-term stays on the same inventory simultaneously. Fill occupancy gaps between long stays with profitable short stays -- just like Lavanda and Res:Harmonics.',
                points: [
                    'Advertise same unit on short-stay and long-stay channels simultaneously',
                    'Automatic channel blocking when a long-stay booking is confirmed',
                    'Dynamic rate switching: nightly rates for gaps, monthly rates for long stays',
                    'Gap night tracking and revenue optimization for periods between leases',
                    'Stay-length flexibility: day, week, month, academic year, open-ended',
                    'Blended occupancy reporting showing revenue mix by stay type'
                ],
                image: '/images/inventory-2.svg',
            },
            {
                title: 'Resident Lifecycle & Renewals',
                description: 'Track every resident from application to move-out. Automated renewal workflows, churn risk scoring, and proactive communication keep your occupancy rate high.',
                points: [
                    'Complete lifecycle tracking: Incoming, Current, Renewing, Moving, Departing, Former',
                    'Automated renewal offers triggered by configurable notice periods',
                    'Rate adjustment proposals with approval workflows and digital re-signing',
                    'Churn risk scoring per resident using payment history, ticket activity, and engagement',
                    'Proactive renewal communication sequences starting 90/60/30 days before expiry',
                    'Year-over-year occupancy and renewal rate comparison across properties'
                ],
                image: '/images/inventory-3.svg',
            },
            {
                title: 'Move-Out & Turnaround Tracking',
                description: 'Coordinate the entire move-out process: notice acknowledgment, inspections, deposit deductions, cleaning, and re-listing. Track turnaround time per unit and optimize for speed.',
                points: [
                    'Digital notice submission with automated period calculation',
                    'Move-out inspection scheduling with photo comparison to move-in state',
                    'Deposit deduction tracking with itemized breakdowns and evidence',
                    'Automatic turnaround workflow: inspection > cleaning > maintenance > re-list',
                    'Turnaround time analytics per unit type, property, and season',
                    'Unit status auto-update to available with pricing from revenue engine'
                ],
                image: '/images/inventory-4.svg',
            },
            {
                title: 'Vacancy Forecasting & Analytics',
                description: 'Predict upcoming vacancies using lease end dates, churn risk scores, and seasonal patterns. Make proactive decisions to maintain occupancy targets.',
                points: [
                    'Upcoming vacancy forecast based on lease end dates and notice submissions',
                    'Seasonal demand pattern analysis from historical occupancy data',
                    'Occupancy rate analytics with trend visualization and benchmarking',
                    'Revenue per available bed/room (RevPAB) calculations across the portfolio',
                    'Property comparison and performance league tables',
                    'Exportable investor-grade reports with occupancy, revenue, and yield metrics'
                ],
                image: '/images/inventory-5.svg',
            },

            {
                title: 'Per-Bed Inventory & Shared Rooms',
                description: 'Purpose-built for coliving: manage individual beds within shared rooms, each with their own pricing, tenant assignment, and billing cycle.',
                points: [
                    'Per-bed inventory with individual pricing and tenant assignment',
                    'Shared room configuration: 2-bed, 4-bed, 6-bed, and custom layouts',
                    'Individual billing per bed even in shared rooms',
                    'Bed swap and room transfer management with contract amendments',
                    'Shared facility tracking: kitchens, bathrooms, and common areas per floor',
                    'Bulk unit management and batch operations across properties'
                ],
                image: '/images/inventory-6.svg',
            },
        ],
        automate: {
            title: "See Your Entire Portfolio in Real-Time",
            description: 'Book a demo and see how hybrid stay management and vacancy forecasting keep occupancy above 95%.',
        },
        stats: [
            { value: '95%+', label: 'Average occupancy with hybrid stay management' },
            { value: '50%', label: 'Faster lease-up with short-stay gap filling' },
            { value: '72%', label: 'Reduction in void periods' },
            { value: '2x', label: 'Faster unit turnaround with automated workflows' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "The hybrid stay feature was a game-changer. We fill gap nights between long-term leases with short stays and increased our RevPAB by 22%. Void periods dropped from 14 days to 4.",
                    "name": "Revenue Manager",
                    "role": "European Flex Living Operator, 800+ beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'What is hybrid stay management?',
                    answer: "It means managing short-term and long-term stays on the same inventory simultaneously. When a long-stay booking is confirmed, short-stay channels are automatically blocked. When there's a gap between leases, you can fill it with profitable short stays.",
                },
                {
                    question: 'Can we manage per-bed inventory in shared rooms?',
                    answer: 'Yes. JumboTiger is purpose-built for coliving with per-bed inventory, individual pricing, and separate billing cycles within shared rooms.',
                },
                {
                    question: 'How does vacancy forecasting work?',
                    answer: 'The system analyzes lease end dates, notice submissions, churn risk scores, and historical seasonal patterns to predict upcoming vacancies. You get a forward-looking occupancy view to make proactive decisions.',
                },
                {
                    question: 'Does it support multi-property portfolios?',
                    answer: 'Yes. The hierarchy supports portfolio > property > building > floor > unit with drill-down dashboards, comparison views, and portfolio-wide reporting.',
                },
                {
                    question: 'How fast can we turn around units?',
                    answer: 'Automated turnaround workflows coordinate inspection, cleaning, maintenance, and re-listing. Operators using JumboTiger typically reduce turnaround time by 50% or more.',
                },
                {
                    question: 'Can we track RevPAB and yield metrics?',
                    answer: 'Yes. Revenue per available bed, occupancy rates, yield trends, and property comparison league tables are all available with exportable investor-grade reports.',
                },
                {
                    question: 'How does hybrid pricing work?',
                    answer: 'You set different rate strategies per stay type: nightly for short stays, weekly for mid-term, monthly for long-term. The system automatically applies the right pricing based on booking duration and can dynamically adjust based on demand.',
                },
            ],
        },
        readybuild: {
            title: 'Ready for Real-Time Portfolio Visibility?',
            description: "Book a demo to see how operators maintain 95%+ occupancy with hybrid stays and predictive analytics.",
        },
    },
    'community-events': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Social feeds, event management, polls, resident profiles, local partnerships, and engagement analytics.',
            title: 'Community & Events',
            image: '/images/community-banner.svg',

            description:
                'The community tools that make coliving special. Social feeds, event creation, polls, resident profiles, local partnerships, and engagement analytics -- all in a branded space your residents love.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: 'Community Dies Without the Right Tools',
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Event Ghost Towns', desc: "Events posted on WhatsApp get buried. No RSVP tracking, no reminders, no attendance data."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Anonymous Residents', desc: 'People live next door for months without knowing each other. No directory, no profiles, no shared interests.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'One-Way Communication', desc: 'Management broadcasts updates but has no way to gauge sentiment, run polls, or gather feedback.'
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Engagement Data', desc: 'No metrics on which events work, who participates, or how community health correlates with renewals.'
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Local Ecosystem', desc: "Residents discover restaurants, gyms, and services on their own. No curated local partnerships or exclusive deals."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Fragmented Channels', desc: "Community happens across WhatsApp groups, Instagram, email, and notice boards. Nothing centralized."
                },
            ],
        },
        grid: [
            {
                title: 'Social Feed & Announcements',
                description: 'A branded community feed where management shares updates and residents share with each other. Pinned announcements, rich media, comments, and reactions.',
                points: [
                    'Community feed with management announcements and resident-to-resident posts',
                    'Pinned posts for critical updates that stay at the top of the feed',
                    'Rich media support: photos, videos, links, and document attachments',
                    'Comments and reactions on posts for organic community engagement',
                    'Property-specific and portfolio-wide feeds with cross-posting',
                    'Content moderation tools with flagging and admin approval workflows'
                ],
                image: '/images/community-1.svg',
            },
            {
                title: 'Event Creation & Management',
                description: 'Create, promote, and manage events from your dashboard. RSVP tracking, attendance logging, automated reminders, and post-event feedback collection.',
                points: [
                    'Event creation with date, time, location, capacity, and description',
                    'RSVP management with waitlist when capacity is reached',
                    'Automated reminders: 24-hour and 2-hour pre-event notifications',
                    'Attendance tracking with check-in at the event',
                    'Recurring events: weekly yoga, monthly socials, seasonal parties',
                    'Post-event feedback surveys and photo gallery sharing'
                ],
                image: '/images/community-2.svg',
            },
            {
                title: 'Polls, Surveys & Feedback',
                description: 'Run polls for community decisions, collect NPS scores, and gather structured feedback. Give residents a voice and get data-driven insights into satisfaction.',
                points: [
                    'Quick polls for community decisions: movie night picks, amenity requests, food preferences',
                    'NPS surveys triggered at key lifecycle moments: move-in, 90-day, renewal, move-out',
                    'Structured feedback forms for events, facilities, and service quality',
                    'Anonymous feedback option for sensitive topics',
                    'Real-time results dashboards with trend analysis over time',
                    'Satisfaction benchmarking across properties and portfolio'
                ],
                image: '/images/community-3.svg',
            },
            {
                title: 'Resident Directory & Profiles',
                description: 'Help residents find each other. Opt-in profiles with bios, interests, skills, and social links. Perfect for networking, finding gym buddies, or organizing activities.',
                points: [
                    'Opt-in resident profiles with photo, bio, occupation, and interests',
                    'Interest tags for matching: fitness, cooking, gaming, music, languages',
                    'Skills and services exchange: tutoring, photography, cooking classes',
                    'Privacy controls: residents choose exactly what to share and with whom',
                    'New resident spotlights featured in the community feed',
                    'Searchable directory filtered by property, floor, interests, and language'
                ],
                image: '/images/community-4.svg',
            },
            {
                title: 'Local Partnerships & Offers',
                description: 'Curate exclusive deals from nearby businesses -- restaurants, gyms, coworking spaces, laundries. Add value for residents and build revenue-sharing partnerships.',
                points: [
                    'Local business directory with curated recommendations and exclusive offers',
                    'Deal management: discount codes, loyalty programs, and time-limited promotions',
                    'Revenue-sharing tracking for partnership commissions',
                    'Resident reviews and ratings of local businesses',
                    'Categorized listings: food, fitness, wellness, entertainment, transport',
                    'Auto-distribution of new offers via community feed and push notifications'
                ],
                image: '/images/community-5.svg',
            },

            {
                title: 'Community Analytics & Engagement Scoring',
                description: 'Measure what makes your community thrive. Track event attendance, feed engagement, poll participation, and correlate community health with renewal rates.',
                points: [
                    'Engagement scoring per resident: events attended, posts, poll votes, bookings',
                    'Community health dashboard: active users, engagement rate, trending topics',
                    'Event analytics: attendance rate, most popular event types, optimal timing',
                    'Correlation analysis: community engagement vs. renewal rate and NPS',
                    'At-risk resident flagging: low engagement residents who may churn',
                    'Monthly community reports for stakeholders and investors'
                ],
                image: '/images/community-6.svg',
            },
        ],
        automate: {
            title: "Build the Community That Drives Renewals",
            description: 'See how social features, events, and engagement analytics create the coliving experience residents stay for.',
        },
        stats: [
            { value: '2x', label: 'Higher renewal rate for engaged residents' },
            { value: '85%', label: 'Event attendance with automated reminders' },
            { value: '+18', label: 'NPS increase with active community tools' },
            { value: '30%', label: 'Reduction in churn with engagement monitoring' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "Community engagement was the missing piece. Once we launched the social feed and events module, event attendance tripled and our renewal rate jumped from 62% to 81%. Residents stay for the people, not just the room.",
                    "name": "Community Manager",
                    "role": "European Coliving Brand, 12 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How does the social feed work?',
                    answer: "Like a private social network for your property. Management posts announcements; residents post updates, photos, and questions. Comments and reactions build organic conversation. Content moderation tools let you maintain quality.",
                },
                {
                    question: 'Can residents opt out of the directory?',
                    answer: 'Yes. Every aspect of the profile is opt-in. Residents choose what to share: photo, bio, interests, and contact info. They can also set visibility to specific properties only.',
                },
                {
                    question: 'How do events drive renewals?',
                    answer: 'Data shows that residents who attend 2+ events per month renew at 2x the rate of non-attendees. The module tracks this correlation and flags at-risk residents with low engagement.',
                },
                {
                    question: 'Can we monetize local partnerships?',
                    answer: 'Yes. Set up revenue-sharing agreements with local businesses. The system tracks referrals from your platform and calculates commissions. Some operators generate $5-10 per resident per month from partnerships.',
                },
                {
                    question: 'Is there an anonymous feedback option?',
                    answer: 'Yes. Sensitive surveys can be configured as anonymous. Responses are aggregated without identifying individual residents, while still allowing property-level analysis.',
                },
                {
                    question: 'How does engagement scoring work?',
                    answer: 'Each resident gets an engagement score based on events attended, feed interactions, poll participation, facility bookings, and app usage. Low-engagement residents are flagged for proactive outreach.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Build Real Community?',
            description: "Book a demo and see how community tools drive engagement, renewals, and resident satisfaction.",
        },
    },
    'ai-layer': {
        banner: {
            cardImage: 'images/ailayer-card.svg',
            cardDiscription: 'AI chatbot, voice agents, document processing, predictive analytics, sentiment analysis, and BI reporting.',
            title: 'AI Layer & Advanced Analytics',
            image: '/images/ailayer-banner.svg',
            description:
                "AI that doesn't just track work -- it does work. Chatbots, voice agents, document processing, predictive analytics, sentiment analysis, and BI-grade reporting powered by machine learning.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Your Team Is Drowning in Repetitive Tasks",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Repetitive Queries', desc: "Leads come via website, email, phone, WhatsApp, OTAs, referrals, and walk-ins. No single place to see them all. Responses are slow and inconsistent."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Missed Leads', desc: " Inbound enquiry calls missed after hours. Prospects who don't get an instant response move on to competitors."
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Manual Data Entry', desc: "Passports, IDs, invoices, and contracts manually read and typed into the system. Slow and error-prone."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Report Building', desc: "Hours spent pulling data from multiple sources to build reports that are outdated by the time they're finished."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Sentiment Visibility', desc: "Resident complaints and frustrations hidden in messages. No systematic way to detect unhappy residents before they leave."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Reactive Operations', desc: "Problems discovered after they escalate. No predictive visibility into occupancy drops, payment risks, or maintenance needs."
                },
            ],
        },
        grid: [
            {
                title: 'AI Chatbot & Virtual Assistant',
                description: 'A conversational AI trained on your property-specific rules, documentation, and FAQs. Available 24/7 in the resident app and web portal. Handles queries, escalates complex issues, and learns over time.',
                points: [
                    'AI chatbot trained on property-specific rules, lease terms, and documentation',
                    'Handles FAQs: WiFi, parking, amenities, house rules, payment info, local guides',
                    'Available 24/7 in resident app, web portal, and WhatsApp',
                    'Automatic escalation of complex issues to human staff with full context',
                    'Multi-language support for international resident communities',
                    'Continuous learning: improves accuracy from every interaction'
                ],
                image: '/images/ailayer-1.webp',
            },
            {
                title: 'AI Voice Agents & Lead Response',
                description: 'Never miss an enquiry again. AI voice agents handle inbound calls, qualify prospects, answer questions, schedule viewings, and follow up -- across phone, WhatsApp, and email simultaneously.',
                points: [
                    'AI voice agents handling inbound enquiry calls with natural conversation',
                    'Instant prospect qualification: budget, move-in date, room preferences, duration',
                    'Automated viewing scheduling integrated with property calendar',
                    'Multi-channel follow-up: voice, WhatsApp, and email from same AI agent',
                    'Dormant lead re-engagement with personalized outreach sequences',
                    'Human handoff when judgment is required with full conversation context'
                ],
                image: '/images/ailayer-2.webp',
            },
            {
                title: 'Smart Document Processing',
                description: 'Extract data from passports, IDs, invoices, and contracts with 95%+ accuracy. Auto-populate forms, validate against existing records, and process in bulk.',
                points: [
                    'Automated data extraction from passports and IDs (95%+ accuracy)',
                    'Lease document parsing with field auto-population and clause extraction',
                    'Invoice OCR for vendor bills, utility statements, and receipts',
                    'Document categorization and auto-filing into resident and property records',
                    'Validation checks against existing records to catch errors and duplicates',
                    'Batch processing for high-volume operations: academic intake, corporate onboarding'
                ],
                image: '/images/ailayer-3.webp',
            },
            {
                title: 'Predictive Analytics & Risk Scoring',
                description: 'Forecast occupancy, predict churn, detect payment anomalies, and identify maintenance patterns before they become problems. Data-driven decisions, not gut feelings.',
                points: [
                    'Predictive occupancy and revenue forecasting with seasonal pattern analysis',
                    'Churn risk scoring per resident based on payment, engagement, and ticket data',
                    'Payment anomaly detection: flagging unusual patterns and at-risk accounts',
                    'Demand forecasting for pricing optimization and capacity planning',
                    'Maintenance pattern analysis: predict equipment failures before they happen',
                    'NPS prediction: identify at-risk residents before satisfaction surveys'
                ],
                image: '/images/ailayer-4.webp',
            },
            {
                title: 'Sentiment Analysis & Smart Routing',
                description: 'Analyze resident communications for tone and urgency. Auto-prioritize frustrated residents, route tickets intelligently, and give managers a real-time sentiment dashboard.',
                points: [
                    'Sentiment analysis on all resident communications: messages, tickets, reviews',
                    'Automatic priority escalation for frustrated or urgent resident messages',
                    'AI-assisted ticket categorization and intelligent routing by category and skill',
                    'Natural language search across all tenant data, tickets, and communications',
                    'Resident satisfaction trend analysis with early warning indicators',
                    'Smart response suggestions for staff based on ticket history and context'
                ],
                image: '/images/ailayer-5.webp',
            },
            {
                title: 'BI-Grade Reporting & Data Platform',
                description: 'Go beyond dashboards. Connect JumboTiger data to Tableau, Power BI, Google BigQuery, and Data Studio for enterprise-grade analytics and custom reporting.',
                points: [
                    'Pre-built reporting library: occupancy, revenue, leasing, maintenance, NPS, channel performance',
                    'Custom report builder with drag-and-drop metric selection and scheduling',
                    'Integration with Tableau, Power BI, Google BigQuery, and Data Studio',
                    'Automated report generation and distribution to stakeholders on schedule',
                    'KPI analytics hub with customizable visualizations and benchmarking',
                    'Real-time anomaly alerts pushed to dashboards, email, or Slack'
                ],
                image: '/images/ailayer-6.webp',
            },
        ],
        automate: {
            title: "Let AI Handle the Repetitive Work",
            description: 'See how AI chatbots, voice agents, and predictive analytics free your team to focus on what matters.',
        },
        stats: [
            { value: '24/7', label: 'AI availability for resident queries and lead response' },
            { value: '95%', label: 'Document extraction accuracy' },
            { value: '40%', label: 'Reduction in manual work with AI automation' },
            { value: '3x', label: 'Faster lead response with AI voice agents' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "The AI voice agent handles 60% of our inbound enquiries without human intervention. Lead response time went from hours to seconds. Our conversion rate jumped 35% in the first month.",
                    "name": "Head of Sales",
                    "role": "European Coliving Brand, 15 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How does the AI chatbot learn?',
                    answer: "The chatbot is initially trained on your property documentation, rules, lease terms, and FAQs. It continuously improves from interactions, with human feedback loops to correct and refine responses.",
                },
                {
                    question: 'What languages does the AI support?',
                    answer: 'The AI chatbot and voice agents support multiple languages. New languages can be added based on your resident demographics.',
                },
                {
                    question: 'How does the AI voice agent work?',
                    answer: 'It handles inbound phone calls with natural conversation. It qualifies prospects (budget, dates, preferences), answers property questions, schedules viewings, and follows up via WhatsApp and email. Complex enquiries are handed to human staff with full context.',
                },
                {
                    question: 'Can we connect to our own BI tools?',
                    answer: 'Yes. JumboTiger integrates with Tableau, Power BI, Google BigQuery, and Data Studio. You can also access raw data via API for custom analytics pipelines.',
                },
                {
                    question: 'How accurate is document processing?',
                    answer: '95%+ accuracy for passport and ID extraction. The system validates extracted data against existing records and flags uncertain fields for human review.',
                },
                {
                    question: 'Does the AI actually reduce workload?',
                    answer: 'Yes. Operators typically see a 40% reduction in manual work. AI handles chatbot queries, document processing, ticket categorization, payment matching, and report generation -- freeing staff for higher-value tasks.',
                },
                {
                    question: 'How does sentiment analysis work?',
                    answer: 'The AI analyzes the tone and language of all resident communications (messages, tickets, reviews) to detect frustration, urgency, or satisfaction changes. Frustrated residents are auto-escalated and flagged on management dashboards.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Add AI to Your Operations?',
            description: "Book a demo and see how AI chatbots, voice agents, and predictive analytics transform property operations.",
        },
    },
    'listing-website': {
        banner: {
            cardImage: 'images/listing-card.svg',
            cardDiscription: 'SEO-optimized listings, instant quote portal, direct booking engine, and marketing analytics.',
            title: 'Listing Website & Booking Engine',
            description:
                "Generate SEO-optimized property listings with real-time availability, instant quotes, direct booking, and distribution to 300+ channels. Reduce OTA dependency and own your customer relationship.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "OTA Dependency Eats Your Margins",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Commission Drain', desc: "15-25% of every booking going to OTAs. On a portfolio of 500 beds, that's hundreds of thousands per year in commissions."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Brand Presence', desc: "Residents find you on Booking.com, not your website. They're loyal to the platform, not your brand."
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No SEO Visibility', desc: "Generic property pages buried in search results. No organic traffic, no direct enquiries, no compounding growth."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Quoting', desc: "Prospects enquire and wait hours or days for a quote. By then they've booked elsewhere."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Static Listings', desc: "Availability and pricing manually updated. Outdated listings lead to overbooking or missed bookings."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Conversion Data', desc: "No visibility into where prospects drop off, which listings convert, or what search terms drive traffic."
                },
            ],
        },
        grid: [
            {
                title: 'SEO-Optimized Listing Pages',
                description: 'Auto-generated property pages optimized for search engines. Rich content, structured data, location maps, photo galleries, and virtual tour embedding that rank and convert.',
                points: [
                    'SEO-optimized listing pages with structured data markup for search engines',
                    'Dynamic content: availability, pricing, and room types updated in real-time',
                    'Photo gallery with lightbox, virtual tour embedding, and floor plan views',
                    'Location maps with neighborhood information, transport, and amenities',
                    'Property comparison and filtering by price, room type, location, and amenities',
                    'Responsive design optimized for mobile, tablet, and desktop'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Instant Quote Portal',
                description: 'Prospects get accurate quotes in under 60 seconds with live availability. Customizable quote templates, automated follow-ups for abandoned quotes, and one-click conversion to booking.',
                points: [
                    'Enquiry-to-quote in under 60 seconds with real-time availability and pricing',
                    'Customizable quote template emails with property photos and room details',
                    'Automated follow-up sequences for abandoned quotes (email + WhatsApp)',
                    'One-click conversion from quote acceptance to booking with deposit collection',
                    'One-click conversion from quote acceptance to booking with deposit collection',
                    'Quote analytics: conversion rates, response times, and drop-off points'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Direct Booking Engine',
                description: 'A white-label booking engine on your own website. Residents book and pay directly, reducing OTA dependency and building your brand relationship from day one.',
                points: [
                    'White-label booking engine with your brand colors, logo, and domain',
                    'Direct booking with instant confirmation and deposit collection',
                    'Custom booking links shareable via email, WhatsApp, and social media',
                    'Multiple stay types: nightly, weekly, monthly, academic year, and custom',
                    'Upsell add-on services during booking: parking, cleaning, gym, meals',
                    'Conversion tracking via Google Analytics, UTM parameters, and pixel integration'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Multi-Portal Syndication',
                description: 'List your inventory on Rightmove, Zoopla, OnTheMarket, HousingAnywhere, SpareRoom, and more. Centralized control, automated updates, and lead capture from every portal.',
                points: [
                    'Multi-portal syndication: Rightmove, Zoopla, OnTheMarket, HousingAnywhere, SpareRoom',
                    'AI-generated professional listing descriptions optimized per portal',
                    'Enhanced listings with amenity icons, compliance badges, and housemate profiles',
                    'Centralized lead capture from all portals tagged to specific listings',
                    'Automated listing updates when availability or pricing changes',
                    'Portal performance analytics: leads, viewings, and conversions per channel'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Housemate Profiles & Social Proof',
                description: 'Show prospective residents who already lives in the property. Housemate profiles, reviews, and community previews help convert browsers into bookers.',
                points: [
                    'Opt-in housemate profiles displayed on listing pages (photo, bio, interests)',
                    'Resident reviews and testimonials displayed per property',
                    'Community preview: upcoming events, amenities, and lifestyle snapshots',
                    'Screening questionnaires for compatibility matching before booking',
                    'Automated viewing reminders with 24-hour and 2-hour notifications',
                    'No-show detection and automated follow-up for missed viewings'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Marketing Analytics & ROI Tracking',
                description: 'Track every visitor, every lead, and every conversion. Know exactly which channels, campaigns, and listings drive revenue. Optimize spend with data, not guesswork.',
                points: [
                    'Visitor analytics: traffic sources, page views, bounce rates, and time on site',
                    'Lead funnel tracking from first visit to signed lease with drop-off analysis',
                    'Campaign ROI tracking: cost per lead, cost per booking, and lifetime value by source',
                    'A/B testing support for listing descriptions, photos, and pricing display',
                    'Waitlist management with automated notifications when rooms become available',
                    'Integration with Google Ads, Facebook Ads, and retargeting platforms'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Own Your Booking Channel",
            description: 'See how operators reduce OTA dependency by 70% with direct booking engines and SEO-optimized listings.',
        },
        stats: [
            { value: '70%', label: 'Direct bookings via own portal vs. OTAs' },
            { value: '60s', label: 'Enquiry to quote with live availability' },
            { value: '3x', label: 'More organic traffic with SEO-optimized pages' },
            { value: '0%', label: 'Commission on direct bookings' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We went from 80% OTA bookings to 70% direct bookings in 6 months. The commission savings alone were over $200K annually. The instant quote portal converts 3x better than our old contact form.",
                    "name": "Commercial Director",
                    "role": "European Flex Living Brand, 20 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Can we use our own domain?',
                    answer: "Yes. The listing website and booking engine run on your custom domain with your branding. No JumboTiger branding visible.",
                },
                {
                    question: 'How does the instant quote portal work?',
                    answer: 'Prospects enter their dates and preferences. The system checks real-time availability, applies dynamic pricing, and generates a detailed quote in under 60 seconds. Abandoned quotes trigger automated follow-up.',
                },
                {
                    question: 'Which property portals are supported?',
                    answer: 'Rightmove, Zoopla, OnTheMarket, HousingAnywhere, SpareRoom, Placebuzz, Facebook Marketplace, and more. Custom portal integrations available for enterprise clients.',
                },
                {
                    question: 'How does SEO optimization work?',
                    answer: 'Pages are generated with structured data markup, semantic HTML, optimized meta tags, and keyword-rich content. Location pages, room type pages, and neighborhood guides create a rich content ecosystem for search engines.',
                },
                {
                    question: 'Can residents leave reviews?',
                    answer: 'Yes. Post-stay review collection is automated. Positive reviews are displayed on listing pages. You control which reviews are published.',
                },
                {
                    question: 'How do housemate profiles work?',
                    answer: 'Current residents opt in to display their profile (photo, bio, interests, occupation) on the listing page. This helps prospects assess compatibility and builds community before they move in.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Own Your Booking Channel?',
            description: "Book a demo and see how operators save hundreds of thousands in OTA commissions with direct bookings.",
        },
    },
    'communications': {
        banner: {
            cardImage: 'images/communication-card.svg',
            cardDiscription: 'Unified inbox, multi-channel messaging, post-stay nurturing, and centralized communication logs.',
            title: 'Communications & Operations',
            description:
                "One platform for all resident communication, maintenance operations, housekeeping automation, and post-stay nurturing. Unified inbox, multi-channel messaging, and intelligent task routing.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Fragmented Communications Sink Operations",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Channel Chaos', desc: "Messages arrive via email, WhatsApp, OTA platforms, phone, and in-person. No single view of all conversations."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Manual Housekeeping', desc: 'Cleaning schedules managed in spreadsheets with no automated task creation, assignment, or proof of completion.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Ticket Black Holes', desc: "Maintenance requests submitted verbally, lost in WhatsApp threads, or forgotten in email inboxes."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Staff App', desc: "Housekeeping and maintenance staff have no mobile tool for receiving tasks, uploading photos, or updating status in real-time."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Post-Stay Silence', desc: "After move-out, residents disappear. No follow-up, no re-engagement, no referral program. Lost lifetime value."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Vendor Coordination', desc: "External contractors managed via phone calls with no work order tracking, cost attribution, or SLA monitoring."
                },
            ],
        },
        grid: [
            {
                title: 'Unified Inbox & Multi-Channel Messaging',
                description: 'Consolidate emails, WhatsApp, OTA messages, SMS, in-app chats, and booking enquiries into a single inbox. Every conversation tracked, every message attributed.',
                points: [
                    'Unified inbox consolidating email, WhatsApp, OTA platforms, SMS, and in-app messages',
                    'Subject-based conversation threading with archive and search capabilities',
                    'Broadcast messaging to all residents, specific properties, floors, or custom segments',
                    'Template library with dynamic variables for personalized bulk communications',
                    'Read receipts visible to management, responses attributed to organization (not individual)',
                    'Automation triggers: payment received, ticket updated, lease expiring, check-in tomorrow'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Housekeeping Automation',
                description: 'Rule-based cleaning task creation, drag-and-drop scheduling, checklists, and proof-of-completion -- all accessible from a mobile app. No more spreadsheet rotas.',
                points: [
                    'Rule-based task creation: by booking, check-in/out dates, stay length, building, day of week',
                    'Drag-and-drop rescheduling with bulk task assignment and recurring scheduling',
                    'Task-specific checklists with photo evidence of completion',
                    'Clean/dirty unit status tracking with automatic task generation on checkout',
                    'Linen and consumable inventory tracking with reorder alerts',
                    'Quality inspection checklists with photo documentation and manager sign-off'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Maintenance & Work Order Management',
                description: 'From QR-code ticket submission to contractor coordination, track every maintenance request from creation to resolution with full SLA monitoring.',
                points: [
                    'Resident-submitted or staff-created tickets with photo upload and priority levels',
                    'QR code scanning for quick issue reporting at point of problem',
                    'AI-assisted ticket categorization, priority assignment, and intelligent routing',
                    'Contractor/vendor invitation into ticket threads for estimate and invoice tracking',
                    'SLA tracking with escalation rules, automated reminders, and breach alerts',
                    'Cost tracking per vendor, property, and category with performance reporting'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Mobile Operations App for Staff',
                description: 'Give your housekeeping and maintenance teams a dedicated mobile app. Real-time task updates, photo uploads, key tracking, and remote inspections from the field.',
                points: [
                    'Real-time task list filtered by location, priority, and assignment',
                    'Photo uploads as proof of work completion for inspections and cleaning',
                    'Key and access card tracking by location with handover logging',
                    'Direct messaging between managers, maintenance staff, and contractors',
                    'Personalized to-do lists with urgent duty prioritization',
                    'Remote inspection capability with checklist completion and photo capture'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Post-Stay Nurturing & Remarketing',
                description: "Don't lose residents after move-out. Automated follow-up sequences, review collection, referral programs, and re-booking campaigns turn former residents into advocates.",
                points: [
                    'Automated post-move-out feedback and review collection sequences',
                    'Referral program management with tracking codes and reward automation',
                    'Re-booking campaigns for returning residents with personalized offers',
                    'Alumni community access for former residents to stay connected',
                    'Lifetime resident value tracking across all stays and properties',
                    'Targeted re-engagement for seasonal residents (students, corporate travelers)'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Planned Preventive Maintenance',
                description: 'Schedule recurring maintenance before things break. Asset tracking, PPM schedules, and automated work orders keep your properties in top condition.',
                points: [
                    'Asset registration: HVAC, boilers, lifts, fire systems, and appliances per unit',
                    'Planned preventive maintenance (PPM) schedules with automated work order creation',
                    'Compliance-driven maintenance: gas safety, EICR, fire alarm servicing',
                    'Vendor assignment automation based on category, location, and availability',
                    'Maintenance cost budgeting and actual vs. planned spending dashboards',
                    'Facility booking coordination: meeting rooms, laundry, gym, coworking spaces'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Unify Your Operations in One Platform",
            description: 'See how a unified inbox, housekeeping automation, and smart ticket routing transform your operations.',
        },
        stats: [
            { value: '65%', label: 'Faster ticket response time' },
            { value: '80%', label: 'Reduction in missed maintenance requests' },
            { value: '3hrs', label: 'Saved daily on housekeeping coordination' },
            { value: '40%', label: 'Lower vendor costs with SLA tracking' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "The unified inbox alone saved us hours every day. We went from messages scattered across 5 different channels to one screen. Housekeeping automation cut our coordination time by 80%.",
                    "name": "Operations Manager",
                    "role": "UK Coliving Operator, 12 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'What is the unified inbox?',
                    answer: "It consolidates all incoming messages from email, WhatsApp, OTA platforms (Airbnb, Booking.com), SMS, and in-app chat into a single view. Every conversation is threaded by subject and linked to the relevant resident or booking.",
                },
                {
                    question: 'How does housekeeping automation work?',
                    answer: 'You set rules for when cleaning tasks should be created: on checkout, by day of week, by building, or by stay length. Tasks are auto-assigned to staff with checklists. Staff complete tasks on their mobile app with photo evidence.',
                },
                {
                    question: 'Can contractors access the system?',
                    answer: 'Yes. External contractors can be invited into specific ticket threads via a mobile web app. They submit estimates, receive work orders, upload completion photos, and submit invoices -- all without needing a full user account.',
                },
                {
                    question: 'Does the staff mobile app work offline?',
                    answer: 'The app caches task lists and checklists for areas with poor connectivity. Data syncs automatically when connection is restored.',
                },
                {
                    question: 'How do post-stay nurturing campaigns work?',
                    answer: 'After move-out, automated sequences collect feedback, request reviews, share referral codes, and send re-booking offers at configurable intervals. You can target specific segments like students or corporate travelers.',
                },
                {
                    question: 'Can we track maintenance costs per property?',
                    answer: 'Yes. Every ticket tracks labor and material costs. Dashboards show spending by property, vendor, category, and period with budget vs. actual comparisons.',
                },
                {
                    question: 'Does it support QR code ticket submission?',
                    answer: 'Yes. Place QR codes in common areas, rooms, or on equipment. Residents scan the code, which pre-fills the location and category, then add a description and photos.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Unify Your Operations?',
            description: "Book a demo and see how operators save 3+ hours daily with unified comms, housekeeping automation, and smart maintenance.",
        },
    },
    'global-config': {
        banner: {
            cardImage: 'images/global-card.svg',
            cardDiscription: 'Multi-property hierarchy, role-based access, workflow automation, white-label branding, and multi-currency.',
            title: 'Global Configuration & Compliance',
            description:
                "Configure every property, role, workflow, and compliance requirement from one centralized panel. Multi-property hierarchy, role-based access, regulatory automation, and white-label branding.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Scaling Without Centralized Control Is Chaos",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Configuration Sprawl', desc: "Each property has different rules, workflows, and settings managed in different places with no central source of truth."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Compliance Gaps', desc: 'Gas safety certs, EICR reports, HMO licenses, right-to-rent checks -- tracked in spreadsheets with no renewal alerts.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Access Control', desc: "No way to give regional managers access to their properties without exposing the entire portfolio."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Branding Inconsistency', desc: "Each property feels like a different brand because there's no centralized branding and template management."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Regulatory Complexity', desc: "Operating across regions means different tax rules, compliance requirements, and reporting standards per jurisdiction."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Audit Trail Gaps', desc: "No digital record of who changed what, when. Compliance audits become stressful investigations."
                },
            ],
        },
        grid: [
            {
                title: 'Multi-Property Hierarchy & Configuration',
                description: 'Structure your portfolio as portfolio > property > building > floor > unit. Set defaults at any level and override at lower levels for maximum flexibility.',
                points: [
                    'Multi-property hierarchy: portfolio > property > building > floor > unit',
                    'Configuration inheritance: set defaults at portfolio level, override per property',
                    'Custom fields on any entity: tenant, property, unit, invoice, ticket',
                    'Configurable workflow rules and automation triggers per property or globally',
                    'Custom status workflows for tenants, tickets, invoices, and maintenance',
                    'Data export and API access configuration with rate limiting and authentication'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Compliance & Regulatory Management',
                description: 'Track every certificate, license, and regulatory requirement across your portfolio. Automated renewal reminders, digital document serving, and full audit trails for inspections.',
                points: [
                    'Gas Safety, EICR, EPC, and fire safety certificate tracking with renewal alerts',
                    'HMO license management with expiry monitoring and early renewal warnings',
                    'Right-to-rent verification tracking with automated renewal notifications',
                    'Digital serving of compliance documents to tenants with acknowledgment tracking',
                    'Automatic maintenance ticket creation for upcoming compliance renewals',
                    'Regional compliance automation: VAT reporting, tourism tax, authority reporting per jurisdiction'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Role-Based Access & Security',
                description: 'Give every team member exactly the access they need. Owners see financials, managers see operations, staff see tasks. SSO, 2FA, and complete audit logging.',
                points: [
                    'Role-based access control: owner, admin, regional manager, property manager, staff, viewer',
                    'Property-scoped permissions: regional managers see only their properties',
                    'Single sign-on (SSO) integration for enterprise clients',
                    'Two-factor authentication (2FA) for all user accounts',
                    'Complete audit log: who changed what, when, with before/after values',
                    'IP restriction and session management for sensitive operations'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'White-Label Branding & Templates',
                description: 'Your brand, everywhere. Custom logos, colors, email templates, contract templates, and domain configuration. Every touchpoint reflects your identity.',
                points: [
                    'White-label branding: logo, colors, favicon, and visual identity across all modules',
                    'Custom domain and email sender configuration per property or brand',
                    'Email template library with drag-and-drop editor and dynamic variables',
                    'Contract template management with clause library and conditional sections',
                    'Invoice template customization with brand-specific layouts',
                    'Welcome pack and communication templates cascading from portfolio to property'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Multi-Currency, Multi-Language & Tax',
                description: 'Operate globally with per-property currency configuration, multi-language support, and jurisdiction-specific tax rules. One platform, every market.',
                points: [
                    'Multi-currency support with per-property currency configuration',
                    'Multi-language support for resident-facing interfaces and communications',
                    'Configurable VAT/tax rules per property, charge type, and jurisdiction',
                    'E-invoicing support for markets requiring electronic invoice submission',
                    'Making Tax Digital (MTD) readiness for UK operations',
                    'Automated VAT reporting and tax document generation'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Workflow Automation & Rules Engine',
                description: 'Define rules that trigger actions automatically. When a lease expires, send a renewal offer. When a payment fails, escalate. When a certificate expires, create a ticket.',
                points: [
                    'Configurable automation triggers: time-based, event-based, and condition-based',
                    'Workflow chains: one trigger can cascade multiple actions across modules',
                    'Notification rules: who gets notified, via which channel, for which events',
                    'Escalation rules with configurable timeouts and fallback assignments',
                    'Scheduled automations: daily, weekly, monthly batch operations',
                    'Custom webhook triggers for integration with external systems'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Centralize Control Across Your Entire Portfolio",
            description: 'See how operators manage 50+ properties from a single configuration panel with full compliance automation.',
        },
        stats: [
            { value: '100%', label: 'Compliance certificate tracking coverage' },
            { value: '5min', label: 'To configure a new property from template' },
            { value: '0', label: 'Missed compliance deadlines with auto-alerts' },
            { value: '50+', label: 'Properties managed from one config panel' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We added 8 properties in 3 months. With global config templates, each new property was configured in under an hour. Compliance tracking alone prevented what could have been a six-figure fine.",
                    "name": "Portfolio Director",
                    "role": "UK HMO Operator, 45 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How does compliance tracking work?',
                    answer: "Upload certificates (Gas Safety, EICR, EPC, HMO license, etc.) with expiry dates. The system sends renewal reminders at configurable intervals (90, 60, 30 days) and automatically creates maintenance tickets for renewals. Digital serving to tenants with acknowledgment tracking provides a full audit trail.",
                },
                {
                    question: 'Can we set different rules per property?',
                    answer: 'Yes. Configuration inherits from portfolio level but can be overridden at any level: property, building, or unit. This means you set sensible defaults once and only customize where needed.',
                },
                {
                    question: 'What access control options are available?',
                    answer: 'Role-based access with property-scoping. A regional manager sees only their assigned properties. Owners see financials. Staff see only their tasks. SSO, 2FA, and IP restrictions add enterprise-grade security.',
                },
                {
                    question: 'Does it support multiple currencies?',
                    answer: 'Yes. Each property can be configured with its own currency. Financial reports can be viewed in individual currencies or consolidated with automatic conversion.',
                },
                {
                    question: 'How does the rules engine work?',
                    answer: 'You define triggers (time-based, event-based, or conditional) and actions (send notification, create ticket, change status, trigger webhook). Rules can chain together for complex workflows.',
                },
                {
                    question: 'Is there an audit trail?',
                    answer: 'Yes. Every action, change, and configuration update is logged with who, what, when, and before/after values. This supports compliance audits and operational accountability.',
                }
                ,
                {
                    question: 'Can we white-label everything?',
                    answer: 'Yes. Logo, colors, domain, email sender, app store listing, contract templates, invoice layouts, and welcome packs are all fully customizable per brand or property.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Centralize Your Portfolio Management?',
            description: "Book a demo and see how global configuration and compliance automation scales with your portfolio.",
        },
    },
    'integrations-hub': {
        banner: {
            cardImage: 'images/integrations-card.svg',
            cardDiscription: '50+ connectors: Stripe, Xero, SALTO, Tableau, Power BI, Open Banking, PriceLabs, and 300+ OTAs.',
            title: 'Integrations Hub',
            description:
                "Pre-built connectors for payments, accounting, CRM, access control, energy management, BI tools, and 300+ OTA channels. Open API for anything custom. Your PMS is the center of your tech stack.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Disconnected Systems Waste Time & Money",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Data Silos', desc: "Payment data in Stripe, accounting in Xero, CRM in HubSpot, comms in Mailchimp. Nothing connected."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Manual Reconciliation', desc: 'Hours spent matching payments to invoices, exporting to accounting, and reconciling across systems.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Dumb Buildings', desc: "Smart locks, energy meters, and IoT sensors exist but aren't connected to your PMS for automated workflows."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Single Source of Truth', desc: "Reports pulled from 5 different systems, each with slightly different numbers."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Vendor Lock-In', desc: "Stuck with tools that don't have APIs. Can't switch providers without losing data or breaking workflows."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Onboarding', desc: "New integrations take weeks to set up, requiring developer resources you don't have."
                },
            ],
        },
        grid: [
            {
                title: 'Payment Gateway Integrations',
                description: 'Stripe, GoCardless, PayTabs, UPI, and Open Banking -- all pre-built. Accept every payment method your residents use with automated reconciliation.',
                points: [
                    'Stripe: card payments, bank transfers, 3D Secure, and Apple Pay/Google Pay',
                    'GoCardless: direct debit and SEPA mandates across Europe with retry logic',
                    'PayTabs and regional payment gateways for MENA and Asia-Pacific',
                    'Open Banking integration for AI-powered payment matching and reconciliation',
                    'UPI QR code support for Indian market with auto-reconciliation',
                    'Zero markup on gateway fees -- only standard provider transaction rates'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Accounting & ERP Sync',
                description: 'Two-way sync with Xero, QuickBooks, Odoo, Sage, and Fortnox. Automated journal entries, invoice matching, and financial reporting without manual data entry.',
                points: [
                    'Xero: two-way sync with chart of accounts mapping, invoices, and reconciliation',
                    'QuickBooks Online: automated invoice and payment sync with category mapping',
                    'Odoo and Sage integration for enterprise accounting workflows',
                    'Fortnox and Bexio integration for Nordic and Swiss markets',
                    'Automated journal entries and bank reconciliation across all entities',
                    'Multi-entity support: separate accounting connections per property or brand'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'CRM, Marketing & Communication',
                description: 'HubSpot, Salesforce, Zoho, Twilio, Mailgun, and Mailchimp -- all connected. Lead capture, drip campaigns, WhatsApp messaging, and communication tracking in one flow.',
                points: [
                    'HubSpot and Salesforce CRM: lead capture, pipeline sync, and deal tracking',
                    'Zoho CRM integration for contact and deal management',
                    'Twilio: WhatsApp Business API, SMS, and voice for resident communications',
                    'Mailgun: transactional email for invoices, reminders, and notifications',
                    'Mailchimp: email marketing campaigns, newsletters, and audience sync',
                    'Webhook notifications for all key events enabling custom automation'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Access Control & Smart Building',
                description: 'SALTO, RemoteLock, SmartRent, KeyCafe, and IoT sensors. Auto-provision access codes on check-in, revoke on move-out, and monitor building systems in real-time.',
                points: [
                    'SALTO and SmartRent smart lock integration with auto-code provisioning',
                    'RemoteLock, KeyCafe, and KeyNest for key management and access control',
                    'Automatic access provisioning on check-in and revocation on move-out',
                    'Visitor and temporary access code generation linked to guest registrations',
                    'Smart energy meter integration for real-time consumption monitoring',
                    'IoT device connectivity: HVAC monitoring, air quality, lighting, and WiFi control'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'BI Tools & Data Platform',
                description: 'Connect JumboTiger to Tableau, Power BI, Google BigQuery, and Data Studio. Enterprise-grade analytics on your operational data without building custom pipelines.',
                points: [
                    'Tableau and Power BI integration for custom dashboard creation',
                    'Google BigQuery data warehouse export for advanced analytics',
                    'Google Data Studio for shareable, real-time reporting dashboards',
                    'PriceLabs integration for dynamic pricing and revenue optimization',
                    'Inventory Hive for property inspection and inventory management',
                    'Custom data feeds and scheduled exports in CSV, JSON, and XML formats'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Open API & Custom Integrations',
                description: 'Full REST API with authentication, rate limiting, webhooks, and sandbox environment. Build any custom integration your operations require.',
                points: [
                    'Full REST API with comprehensive documentation and sandbox environment',
                    'Webhook support for real-time event notifications to external systems',
                    'OAuth 2.0 authentication with scoped API keys per integration',
                    'Rate limiting and usage monitoring for responsible API consumption',
                    'Bi-directional data sync capabilities for real-time or scheduled updates',
                    'Dedicated integration support for enterprise clients building custom connectors'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Connect Your Entire Tech Stack",
            description: 'See how JumboTiger integrates with 50+ platforms to create a unified property management ecosystem.',
        },
        stats: [
            { value: '50+', label: 'Pre-built platform integrations' },
            { value: '300+', label: 'OTA channels via channel manager' },
            { value: '2-way', label: 'Sync with major accounting platforms' },
            { value: '0', label: 'Developer hours for pre-built connectors' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We had 7 different tools that didn't talk to each other. JumboTiger's integration hub connected everything in a week. Xero sync alone saves our finance team 15 hours a month.",
                    "name": "Finance Manager",
                    "role": "UK Coliving Operator, 25 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How long does it take to set up integrations?',
                    answer: "Pre-built integrations like Stripe, Xero, and HubSpot can be connected in minutes. Custom integrations using our API typically take 1-2 weeks depending on complexity.",
                },
                {
                    question: 'Is there an API?',
                    answer: 'Yes. Full REST API with OAuth 2.0 authentication, comprehensive documentation, sandbox environment, and webhook support. Enterprise clients get dedicated integration support.',
                },
                {
                    question: 'Does the Xero sync work both ways?',
                    answer: 'Yes. Invoices, payments, and journal entries sync from JumboTiger to Xero. Chart of accounts mapping ensures entries land in the right categories. Changes in Xero sync back.',
                },
                {
                    question: 'Can we connect smart locks?',
                    answer: 'Yes. Pre-built integrations with SALTO, SmartRent, RemoteLock, KeyCafe, and KeyNest. Access codes are automatically provisioned on check-in and revoked on move-out.',
                },
                {
                    question: 'What BI tools are supported?',
                    answer: 'Tableau, Power BI, Google BigQuery, and Google Data Studio. Data can also be exported in CSV, JSON, and XML formats for any analytics platform.',
                },
                {
                    question: 'Does it support IoT devices?',
                    answer: 'Yes. Smart energy meters, HVAC monitoring, air quality sensors, and lighting controls can be connected for real-time monitoring and automated billing.',
                }
            ],
        },
        readybuild: {
            title: 'Ready to Connect Everything?',
            description: "Book a demo and see how 50+ pre-built integrations create a unified property management ecosystem.",
        },
    },
    'visitor-management': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'QR guest passes, front desk guard app, vendor tracking, overstay monitoring, and package management.',
            title: 'Visitor Management',
            image: '/images/visitor-banner.svg',
            description:
                'Pre-register guests, generate QR-coded passes, track vendor movements, and maintain a complete digital log of every person entering your properties. Security meets convenience.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "You Don't Know Who's in Your Building",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Untracked Visitors', desc: "Guests walk in and out with no registration. No record of who visited, when, or for how long."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Security Blind Spots', desc: 'No way to verify if a visitor was actually invited by a resident or is unauthorized.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Vendor Chaos', desc: 'Contractors and delivery staff enter without logging. No movement tracking, no time stamps, no accountability.'
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Reception Overload', desc: 'Front desk staff manually call residents to confirm every visitor. Queues build, residents get frustrated.'
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Overstay Detection', desc: "Long-term guests staying beyond allowed periods with no system to flag or enforce limits."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Zero Audit Trail', desc: "If an incident occurs, there's no digital record of who was in the building. Insurance claims and investigations become guesswork."
                },
            ],
        },
        grid: [
            {
                title: 'Resident-Initiated Guest Registration',
                description: 'Residents pre-register guests from the tenant app. The system generates a QR-coded visitor pass that can be shared via WhatsApp or email -- before the guest even arrives.',
                points: [
                    'Pre-register guests from the tenant app with expected date, time, and duration',
                    'QR-coded visitor passes generated instantly and shareable via WhatsApp or email',
                    'Short-term visit registration (single day) and long-term guest registration (extended stays)',
                    'Guest details: name, phone, purpose of visit, expected arrival/departure',
                    'Management approval workflow for long-term guests exceeding configurable thresholds',
                    'Bulk guest registration for events, parties, and community gatherings'
                ],
                image: '/images/visitor-1.svg',
            },
            {
                title: 'Front Desk & Guard App',
                description: 'A dedicated reception interface for security staff. Scan QR codes, verify identity, log arrivals, and manage walk-ins -- all from a tablet or smartphone.',
                points: [
                    'QR code scanning at entry points with instant verification against pre-registered guests',
                    'Photo capture at check-in for visual identity logging',
                    'Walk-in registration flow for unregistered visitors with resident notification',
                    'Real-time visitor log dashboard showing all currently checked-in guests',
                    'Alert system for unverified or flagged visitors',
                    'Tablet and smartphone compatible for lobby kiosks or guard stations'
                ],
                image: '/images/visitor-2.svg',
            },
            {
                title: 'Vendor & Contractor Access',
                description: 'Track every contractor, delivery person, and service provider entering your properties. Movement logging, time stamps, and work area restrictions.',
                points: [
                    'Vendor registration with company details, ID, and purpose of visit',
                    'Work area assignment: restrict vendor access to specific floors or units',
                    'Check-in/check-out timestamps with automatic duration tracking',
                    'Contractor attendance tracking for recurring service providers (cleaners, maintenance)',
                    'Work permit management for construction and renovation activities',
                    'Vendor movement logs exportable for compliance and billing verification'
                ],
                image: '/images/visitor-3.svg',
            },
            {
                title: 'Overstay Monitoring & Alerts',
                description: 'Automatically flag guests who exceed their registered duration. Configurable thresholds, automatic notifications to residents, and escalation to management.',
                points: [
                    'Configurable guest duration limits per property (e.g., max 3 nights/week)',
                    'Automatic alerts when guests approach or exceed allowed stay duration',
                    'Resident notifications when their guest triggers an overstay flag',
                    'Management escalation for repeated overstay violations',
                    'Long-term guest conversion: prompt residents to formally register extended guests',
                    'Policy enforcement with configurable rules per property or portfolio'
                ],
                image: '/images/visitor-4.svg',
            },
            {
                title: 'Delivery & Package Management',
                description: 'Track packages, food deliveries, and mail. Notify residents on arrival, log handovers, and manage uncollected items with automated reminders.',
                points: [
                    'Package arrival logging with photo capture and resident notification',
                    'Food delivery tracking with expected arrival time and delivery person details',
                    'Secure package storage management with pickup confirmation',
                    'Automated reminders for uncollected packages after configurable periods',
                    'Mail notification system for traditional post and courier deliveries',
                    'Delivery analytics: peak times, volume trends, and carrier performance'
                ],
                image: '/images/visitor-5.svg',
            },

            {
                title: 'Access Analytics & Compliance',
                description: 'Complete audit trail of every person who entered and exited your property. Analytics on visitor patterns, peak times, and compliance reporting for insurance and regulatory purposes.',
                points: [
                    'Complete digital audit trail: who, when, where, how long, and why for every visit',
                    'Visitor analytics: peak hours, frequency patterns, and average visit duration',
                    'Property-level and portfolio-level access reports with export capabilities',
                    'Insurance-grade incident investigation tools with timestamped visitor records',
                    'GDPR-compliant data handling with configurable retention policies',
                    'Integration with smart locks and access control systems (SALTO, RemoteLock)'
                ],
                image: '/images/visitor-6.svg',
            },
        ],
        automate: {
            title: "Know Who's in Your Building at All Times",
            description: 'See how QR-coded passes, guard apps, and digital logs transform property security.',
        },
        stats: [
            { value: '90%', label: 'Reduction in unauthorized building access' },
            { value: '2hrs', label: 'Saved daily at reception with QR pre-registration' },
            { value: '100%', label: 'Digital audit trail for every visitor' },
            { value: '30s', label: 'Average check-in time with QR code scanning' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We used to have paper sign-in sheets that nobody filled in properly. Now every visitor is pre-registered with a QR pass. Our reception team processes 3x more visitors in half the time.",
                    "name": "Security Manager",
                    "role": "UK Coliving Operator, 8 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How do residents register guests?',
                    answer: "From the tenant app, residents enter guest details (name, date, time, duration). A QR-coded pass is generated instantly and can be shared via WhatsApp, email, or SMS. The guest presents the QR code at reception for instant check-in.",
                },
                {
                    question: 'Can we handle walk-in visitors?',
                    answer: 'Yes. The guard app has a walk-in flow where security staff register the visitor on the spot and send a notification to the resident for confirmation. If the resident confirms, the visitor is logged in.',
                },
                {
                    question: 'How does vendor tracking work?',
                    answer: 'Vendors are registered with company details, ID, and work area assignment. They check in/out via QR code or the guard app. Movement logs track duration and location. Recurring vendors (cleaners, maintenance) have persistent profiles.',
                },
                {
                    question: 'What happens if a guest overstays?',
                    answer: 'The system monitors guest duration against configurable limits. When thresholds are approached or exceeded, automatic alerts go to the resident and management. Repeated violations trigger escalation workflows.',
                },
                {
                    question: 'Is there an audit trail?',
                    answer: 'Yes. Every visitor event (registration, check-in, check-out, overstay alert) is logged with timestamps. Reports are exportable for insurance claims, compliance audits, and incident investigations.',
                },
                {
                    question: 'Does it integrate with smart locks?',
                    answer: 'Yes. Integration with SALTO, RemoteLock, KeyCafe, and other access control systems. Visitor access codes can be auto-generated and auto-expired based on registered visit times.',
                }
                ,
                {
                    question: 'How is visitor data handled for GDPR?',
                    answer: 'Configurable data retention policies automatically purge visitor records after your chosen period. Residents can request deletion of their guest data. All data handling follows GDPR best practices.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Secure Your Properties?',
            description: "Book a demo and see how digital visitor management protects your buildings and saves reception hours.",
        },
    },
    'access-control': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Smart locks, keyless entry, guest access provisioning, IoT sensors, emergency protocols, and security audit trails.',
            title: 'Access Control & Smart Building',
            description:
                'Smart locks, keyless entry, guest access provisioning, emergency protocols, and IoT building management -- all controlled from one dashboard. Integrate with SALTO, Yale, Nuki, and 20+ hardware providers.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Keys Are a Liability. Manual Access Is a Bottleneck.",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Lost & Copied Keys', desc: "Physical keys get duplicated, lost, and never returned. Re-keying costs $150+ per lock and leaves security gaps between tenants."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: '24/7 Front Desk Dependency', desc: 'Someone has to be at the desk to buzz in guests, vendors, and deliveries. After-hours access is a constant headache.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Access Audit Trail', desc: 'When something goes wrong, you have no idea who entered which door at what time. No logs, no accountability.'
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Guest Access Chaos', desc: 'Residents share entry codes freely. You have no control over who enters, when, or for how long.'
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Emergency Response Gaps', desc: "Fire alarm goes off -- who is in the building? No real-time occupancy data means slow and unreliable emergency response."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Disconnected Systems', desc: "Locks, intercoms, CCTV, and PMS all run separately. No unified view of building security."
                },
            ],
        },
        grid: [
            {
                title: 'Smart Lock Integration & Keyless Entry',
                description: 'Connect with 20+ smart lock providers for seamless keyless entry. Residents use their phone, PIN, or biometrics. No more physical keys to manage.',
                points: [
                    'Integration with SALTO, Yale, Nuki, Igloohome, August, and 15+ more providers',
                    'Mobile app unlock: Bluetooth, NFC, and remote unlock from anywhere',
                    'PIN code access with unique codes per resident, auto-expiring for guests',
                    'Biometric options: fingerprint and facial recognition where hardware supports it',
                    'Automatic access provisioning on move-in and revocation on move-out',
                    'Fallback access methods: physical key override for emergency scenarios'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Guest & Visitor Access Provisioning',
                description: 'Residents generate time-limited digital passes for guests. No front desk needed. Full control over who enters, when, and which doors they can access.',
                points: [
                    'Resident-generated guest passes with specific date, time, and door permissions',
                    'Auto-expiring access codes that deactivate after the visit window closes',
                    'Delivery and courier access: one-time codes for package drop-off zones',
                    'Vendor and contractor access with pre-approved time windows and restricted zones',
                    'Guest pre-registration with ID verification before access is granted',
                    'Overstay alerts when guests remain beyond their authorized time window'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Building Zone & Permission Management',
                description: 'Define access zones and assign granular permissions. Residents access their floor and common areas. Staff access maintenance rooms. Vendors access only where needed.',
                points: [
                    'Zone-based access: bedrooms, floors, common areas, gyms, rooftops, parking, storage',
                    'Role-based permissions: resident, staff, manager, vendor, guest -- each with different access',
                    'Time-based rules: gym access 6am-10pm, rooftop closes at midnight, maintenance zones weekdays only',
                    'Multi-property permission templates: set once, deploy across your portfolio',
                    'Temporary access elevation for move-in days, events, or maintenance windows',
                    'Automatic permission updates when residents change rooms or properties'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Real-Time Access Logs & Security Monitoring',
                description: 'Every door event logged with timestamp, identity, and method. Searchable audit trail for security reviews, incident investigation, and compliance reporting.',
                points: [
                    'Complete audit trail: who accessed which door, when, and how (app, PIN, card, override)',
                    'Real-time dashboard showing live door status and recent access events across all properties',
                    'Anomaly detection: unusual access patterns, repeated failed attempts, after-hours activity',
                    'Incident investigation: search by resident, door, timeframe, or access method',
                    'Exportable access logs for insurance claims, police reports, and compliance audits',
                    'Integration with CCTV: correlate access events with camera footage timestamps'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Emergency Protocols & Lockdown',
                description: 'Fire, flood, or security threat? Trigger building-wide lockdown or emergency unlock from your dashboard. Real-time occupancy data for emergency responders.',
                points: [
                    'Emergency unlock: open all doors simultaneously for fire evacuation',
                    'Security lockdown: lock all entry points instantly during a threat',
                    'Real-time occupancy tracking: know exactly who is in the building at any moment',
                    'Emergency muster reports generated automatically for fire brigade and responders',
                    'Integration with fire alarm and building management systems for automated triggers',
                    'Resident emergency notifications: push alerts with evacuation instructions'
                ],
                image: '/images/buildscale.webp',
            },

            {
                title: 'IoT & Smart Building Management',
                description: 'Beyond locks -- manage smart thermostats, lighting, energy meters, water sensors, and air quality monitors. Turn your building into an intelligent, efficient operation.',
                points: [
                    'Smart thermostat integration: automated climate control by occupancy and schedule',
                    'Energy sub-metering: track consumption per unit, floor, or common area',
                    'Water leak and flood sensors: instant alerts to prevent damage',
                    'Air quality monitoring: CO2, humidity, and temperature for resident wellbeing',
                    'Lighting automation: occupancy-based lighting for common areas and corridors',
                    'Centralized IoT dashboard: all sensors, devices, and building systems in one view'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Secure Your Buildings. Simplify Access.",
            description: 'See how smart access control eliminates key management, reduces security incidents, and gives you full visibility over every door.',
        },
        stats: [
            { value: '100%', label: 'Elimination of physical key management' },
            { value: '2hrs', label: 'Reduction in unauthorized access incidents' },
            { value: '45s', label: 'Average time to investigate any access event' },
            { value: '3x', label: 'Faster emergency muster reporting' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We eliminated 2,000 physical keys across our portfolio in one month. Guest access that used to require front desk staff 24/7 now runs on auto-pilot. Security incidents dropped 90% because every door event is logged and monitored.",
                    "name": "Head of Operations",
                    "role": "UK Coliving Operator, 18 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Which smart lock brands do you integrate with?',
                    answer: "We support 20+ providers including SALTO, Yale, Nuki, Igloohome, August, Dormakaba, ASSA ABLOY, and more. Our open API also supports custom hardware integrations.",
                },
                {
                    question: 'Can residents unlock doors with their phone?',
                    answer: 'Yes. Residents use the branded mobile app for Bluetooth and NFC unlock. They can also use PIN codes or biometric methods depending on your hardware setup.',
                },
                {
                    question: 'How does guest access work?',
                    answer: 'Residents generate a time-limited digital pass from the app. The guest receives a link or PIN that grants access to specific doors during the authorized window. Access auto-expires after the visit.',
                },
                {
                    question: 'What happens during a power outage?',
                    answer: 'Smart locks have battery backup (typically 12+ months). In emergency scenarios, physical key override is always available. The system queues access events and syncs when connectivity returns.',
                },
                {
                    question: 'Can we set different access levels per zone?',
                    answer: 'Absolutely. Define unlimited zones (floors, common areas, gyms, parking) and assign granular permissions by role, time of day, and property. Templates can be applied across your portfolio.',
                },
                {
                    question: 'How does emergency lockdown work?',
                    answer: 'Managers can trigger building-wide lockdown or emergency unlock from the dashboard or mobile app. The system also integrates with fire alarms for automated emergency door release.',
                }

            ],
        },
        readybuild: {
            title: 'Ready for Keyless, Secure Buildings?',
            description: "Book a demo and see how smart access control transforms your building security and eliminates key management headaches.",
        },
    },
    'facility-booking': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Gym, coworking, laundry, and meeting room booking with payments, no-show enforcement, and usage analytics.',
            title: 'Facility & Amenity Booking',
            description:
                'Gym slots, coworking desks, meeting rooms, laundry machines, rooftop terraces, BBQ areas -- all bookable from the resident app with time-slot management, payments, and usage analytics.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Shared Amenities Without a System Is Chaos",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Double Bookings', desc: "Two residents show up for the same meeting room at the same time. Paper sign-up sheets and WhatsApp groups create constant conflicts."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Gym Overcrowding', desc: 'No capacity limits means the gym is packed at 6pm and empty at 10am. Residents complain about wait times for equipment.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Revenue Left on the Table', desc: 'Premium amenities like coworking spaces, private dining rooms, and rooftop terraces could generate revenue but have no booking or payment system.'
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Laundry Wars', desc: 'Machines are always busy. Residents leave clothes in for hours. No way to enforce time limits or notify when cycles finish.'
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Usage Data', desc: "You have no idea which amenities are popular, which are underused, and what residents actually want. Investment decisions are guesswork."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No-Show Waste', desc: "Residents book slots and never show up, blocking others from using the space. No accountability or consequence for no-shows."
                },
            ],
        },
        grid: [
            {
                title: 'Space Configuration & Management',
                description: 'Define every bookable space in your property: type, capacity, available hours, booking rules, and photos. Set up once, manage from the dashboard.',
                points: [
                    'Unlimited bookable space types: gym, coworking, meeting room, laundry, rooftop, BBQ, cinema, sauna, pool',
                    'Per-space configuration: capacity limits, operating hours, minimum/maximum booking duration',
                    'Photo gallery and description for each space shown to residents in the booking flow',
                    'Buffer time between bookings for cleaning or reset (configurable per space type)',
                    'Seasonal and day-of-week schedules: different hours for weekdays vs. weekends vs. holidays',
                    'Multi-property space management from a single portfolio dashboard'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Time-Slot Booking & Availability',
                description: 'Residents browse real-time availability and book slots from the mobile app in seconds. Calendar views, instant confirmation, and automated reminders reduce no-shows.',
                points: [
                    'Real-time availability calendar with visual slot picker in the tenant portal and mobile app',
                    'Instant booking confirmation with calendar sync (Google Calendar, Apple Calendar, Outlook)',
                    'Automated reminders: 1-hour and 15-minute pre-booking push notifications',
                    'Recurring bookings: weekly gym slots, daily coworking desks, regular meeting room reservations',
                    'Waitlist when slots are full: automatic notification when a cancellation opens a spot',
                    'Advance booking limits: configure how far ahead residents can book (e.g., 7 days for gym, 30 for events)'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Paid Bookings & Credit System',
                description: 'Monetize premium spaces with per-booking charges, monthly credits, or subscription tiers. Payments flow directly through the existing payment infrastructure.',
                points: [
                    'Free and paid space tiers: gym included, coworking extra, private dining premium',
                    'Per-booking pricing with automatic charge to resident account or card on file',
                    'Monthly credit allowances: residents get X free bookings, pay for additional usage',
                    'Subscription tiers: basic residents get communal spaces, premium unlocks coworking and sauna',
                    'Deposit and damage fee collection for high-value spaces (rooftop events, private dining)',
                    'Revenue reporting: track income by space type, property, and time period'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'No-Show Management & Enforcement',
                description: 'Automated check-in verification, no-show detection, and consequence enforcement. Fair usage policies that actually work.',
                points: [
                    'QR code check-in: residents scan on arrival to confirm attendance',
                    'Access control integration: smart lock only unlocks during the booked time slot',
                    'Automatic no-show detection: if no check-in within 15 minutes, slot is released',
                    'No-show tracking per resident with configurable consequence tiers (warning, temporary ban, fee)',
                    'Fair usage policies: limit bookings per resident per week to prevent hogging',
                    'Automatic slot release: cancelled or no-show slots immediately become available to waitlisted residents'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Laundry & Equipment-Specific Features',
                description: 'Purpose-built features for laundry rooms and equipment-based spaces. Machine status, cycle notifications, and time enforcement keep shared equipment fair.',
                points: [
                    'Machine-level booking: book a specific washer or dryer, not just a time slot',
                    'Cycle completion notifications: push alert when your wash or dry cycle finishes',
                    'Overstay enforcement: automated reminders and penalties for leaving clothes in machines',
                    'Equipment status display: see which machines are available, in-use, or out-of-order in real time',
                    'Maintenance flagging: residents report broken machines directly from the booking screen',
                    'Usage analytics per machine: identify high-demand and frequently broken equipment'
                ],
                image: '/images/buildscale.webp',
            },

            {
                title: 'Usage Analytics & Space Optimization',
                description: 'Data-driven decisions on your amenity investment. See utilization rates, peak times, popular spaces, and resident satisfaction -- then optimize accordingly.',
                points: [
                    'Utilization rate dashboards: percentage of available slots booked per space per day',
                    'Peak hour analysis: heatmaps showing when each amenity is busiest and when it sits empty',
                    'Most-booked and least-booked spaces with trend analysis over time',
                    'Revenue per space: income generated by paid amenities vs. operational cost',
                    'Resident satisfaction: post-booking micro-surveys and NPS per amenity',
                    'ROI analysis for new amenity investment: forecast demand based on existing usage patterns'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Turn Shared Spaces Into a Competitive Advantage",
            description: 'See how facility booking eliminates conflicts, monetizes premium amenities, and gives you data to optimize your spaces.',
        },
        stats: [
            { value: '95%', label: 'Reduction in double-booking complaints' },
            { value: '40%', label: 'Increase in amenity utilization with time-slot management' },
            { value: '3x', label: 'Revenue from premium amenities with paid bookings' },
            { value: '70%', label: 'Reduction in no-shows with QR check-in enforcement' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "Our gym complaints dropped to near-zero after launching the booking system. The coworking space now generates real revenue with paid bookings. And the laundry notifications alone made residents happier than any other feature we have launched.",
                    "name": "Community Manager",
                    "role": "European Coliving Brand, 8 properties, 600 beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'What types of spaces can we manage?',
                    answer: "Any shared space: gym, coworking desks, meeting rooms, laundry machines, rooftop terrace, BBQ area, cinema room, sauna, pool, parking spots, storage units, private dining rooms -- if it can be booked, we support it.",
                },
                {
                    question: 'Can residents book from their phone?',
                    answer: 'Yes. The full booking flow -- browse availability, select a slot, confirm, get reminders, and check in -- all happens from the branded mobile app or tenant portal.',
                },
                {
                    question: 'How does no-show enforcement work?',
                    answer: 'Residents check in via QR code or access control integration. If no check-in within 15 minutes, the booking is automatically released. Repeated no-shows trigger configurable consequences: warnings, temporary booking bans, or fees.',
                },
                {
                    question: 'Can we charge for premium spaces?',
                    answer: 'Absolutely. Set per-booking prices, monthly credit allowances, or subscription tiers. Free gym access with paid coworking and premium private dining, for example. All charges flow through your existing payment setup.',
                },
                {
                    question: 'How does the laundry feature work?',
                    answer: 'Residents book specific machines for specific time slots. They get push notifications when their cycle finishes. If they leave clothes beyond the grace period, overstay reminders and penalties kick in. Machine status is visible in real time.',
                },
                {
                    question: 'What analytics do we get?',
                    answer: 'Utilization rates per space, peak hour heatmaps, most/least popular amenities, revenue per space, no-show rates, and resident satisfaction scores. All filterable by property, time period, and space type.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Manage Every Shared Space?',
            description: "Book a demo and see how facility booking turns amenity chaos into a smooth, revenue-generating operation.",
        },
    },
    'housekeeping-facilities': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Automated cleaning schedules, staff mobile app, quality inspections, linen tracking, and facility management.',
            title: 'Housekeeping & Facilities Management',
            description:
                'Rule-based cleaning automation, staff mobile app, facility booking, linen tracking, quality inspections, and turnaround coordination. Your operations run themselves.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Housekeeping Still Runs on WhatsApp & Spreadsheets",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Spreadsheet Rotas', desc: "Cleaning schedules maintained manually. One staff sick day and the whole system collapses."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'WhatsApp Coordination', desc: 'Task assignments and updates happening in group chats. Nothing tracked, nothing measured.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Proof of Work', desc: "Cleaners say rooms are done, but there's no photo evidence or checklist completion to verify."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Turnarounds', desc: "Move-out to move-in takes too long because cleaning, inspection, and maintenance aren't coordinated."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Linen Guesswork', desc: "No tracking of linen inventory, replacement cycles, or consumable stock levels across properties."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Quality Metrics', desc: "No inspection scoring, no cleanliness KPIs, no way to compare cleaning quality across properties or teams."
                },
            ],
        },
        grid: [
            {
                title: 'Rule-Based Task Automation',
                description: 'Define rules and let the system create tasks automatically. On checkout, create a deep clean. Every Tuesday, clean common areas. For stays over 7 days, schedule mid-stay service.',
                points: [
                    'Rule-based task creation: by checkout date, booking type, stay length, or day of week',
                    'Automatic task generation on checkout with configurable delay and priority',
                    'Recurring scheduled tasks: daily, weekly, monthly with building and floor targeting',
                    'Mid-stay cleaning schedules triggered by stay duration thresholds',
                    'Common area cleaning rotas with rotating team assignment',
                    'Seasonal deep clean scheduling with advance planning and resource allocation'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Staff Mobile App',
                description: 'Give your housekeeping and maintenance teams a dedicated mobile app. Real-time task lists, checklists, photo uploads, key tracking, and route optimization.',
                points: [
                    'Real-time task list filtered by building, floor, priority, and assignment',
                    'Task-specific checklists with mandatory completion steps and photo evidence',
                    'Photo uploads as proof of completion with before/after comparison',
                    'Key and access card tracking with handover logging between shifts',
                    'Route optimization: tasks ordered by floor and proximity for efficiency',
                    'Offline mode: cached task lists for areas with poor connectivity, auto-sync on reconnect'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Quality Inspections & Scoring',
                description: 'Standardize cleaning quality across your portfolio. Inspector checklists, photo documentation, scoring rubrics, and trend analysis by team, property, and time period.',
                points: [
                    'Configurable inspection checklists per room type, property, and cleaning type',
                    'Scoring rubrics: rate each checklist item on quality scale with photo evidence',
                    'Inspector sign-off with digital signature and timestamp',
                    'Quality trend analysis by team, property, and time period',
                    'Automated re-clean triggers when inspection scores fall below threshold',
                    'Portfolio-wide cleanliness benchmarking and league tables'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Linen & Consumable Inventory',
                description: 'Track every towel, sheet, and cleaning product. Automatic reorder alerts, usage analytics, and cost tracking per property and per room.',
                points: [
                    'Linen inventory tracking: towels, sheets, pillows, blankets with condition status',
                    'Par level management with automatic reorder alerts when stock hits threshold',
                    'Consumable tracking: cleaning products, toiletries, kitchen supplies',
                    'Usage analytics per property, room type, and season for demand planning',
                    'Vendor ordering integration for automated procurement workflows',
                    'Cost tracking per room, property, and period with budget vs. actual reporting'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Facility Booking & Management',
                description: 'Let residents book shared amenities -- meeting rooms, gym, laundry, coworking, rooftop -- with time-slot management, paid bookings, and usage analytics.',
                points: [
                    'Configurable bookable spaces: meeting rooms, gym, laundry, coworking, rooftop, BBQ',
                    'Time-slot management with configurable availability windows and buffer times',
                    'Paid facility bookings: per-use charges added to monthly invoice or paid in-app',
                    'Credits system: allocate monthly credits for facility usage per resident',
                    'Auto-cancellation of unpaid or no-show bookings with waitlist promotion',
                    'Usage analytics: peak times, popular facilities, and revenue per amenity'
                ],
                image: '/images/buildscale.webp',
            },

            {
                title: 'Turnaround Coordination',
                description: 'Orchestrate the entire move-out-to-move-in process. Inspection, cleaning, maintenance, and re-listing coordinated in one automated workflow with status tracking.',
                points: [
                    'Automated turnaround workflow triggered on confirmed move-out date',
                    'Sequential task chain: move-out inspection > cleaning > maintenance > final check > re-list',
                    'Status dashboard showing turnaround progress for every unit in real-time',
                    'Bottleneck detection: flag units stuck at any stage beyond expected timeframes',
                    'Turnaround time analytics: average, best, worst by property and room type',
                    'Direct integration with inventory module to auto-update availability on completion'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Automate Your Entire Housekeeping Operation",
            description: 'See how rule-based automation, staff apps, and quality inspections keep your properties spotless.',
        },
        stats: [
            { value: '80%', label: 'Reduction in housekeeping coordination time' },
            { value: '50%', label: 'Faster unit turnarounds with automated workflows' },
            { value: '3x', label: 'More inspections completed with mobile app' },
            { value: '70%', label: 'Cost savings on linen and consumables' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We went from managing cleaning via a WhatsApp group to fully automated task assignment with photo proof. Our cleaning quality scores went up 40% and turnaround time dropped from 5 days to 2.",
                    "name": "Operations Director",
                    "role": "European Coliving Brand, 15 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How does rule-based task creation work?',
                    answer: "Any shared space: gym, coworking desks, meeting rooms, laundry machines, rooftop terrace, BBQ area, cinema room, sauna, pool, parking spots, storage units, private dining rooms -- if it can be booked, we support it.",
                },
                {
                    question: 'Does the staff app work offline?',
                    answer: 'Yes. Task lists and checklists are cached locally. Staff can complete tasks offline and data syncs automatically when connection is restored.',
                },
                {
                    question: 'How do quality inspections work?',
                    answer: 'Inspectors use a configurable checklist on their mobile app, scoring each item and uploading photos. If scores fall below a threshold, a re-clean task is auto-created. Quality trends are tracked across properties and teams.',
                },
                {
                    question: 'Can residents book paid facilities?',
                    answer: 'Yes. Set per-use pricing or allocate monthly credits. Charges can be added to the monthly invoice or paid immediately in-app. No-shows and unpaid bookings are auto-cancelled with waitlist promotion.',
                },
                {
                    question: 'How does turnaround tracking work?',
                    answer: 'When a move-out is confirmed, the system creates a sequential task chain: inspection > clean > maintenance > final check > re-list. A real-time dashboard shows progress per unit, flagging bottlenecks.',
                },
                {
                    question: 'Can we track linen inventory?',
                    answer: 'Yes. Track every linen item by type, condition, and location. Par levels trigger automatic reorder alerts. Usage analytics help with demand planning and budget forecasting.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Automate Your Operations?',
            description: "Book a demo and see how operators cut turnaround time by 50% with automated housekeeping.",
        },
    },
    'maintenance-work-orders': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Ticket management, SLA tracking, vendor coordination, planned preventive maintenance, and cost analytics.',
            title: 'Maintenance & Work Orders',
            description:
                'From resident ticket submission to contractor coordination, track every maintenance request from creation to resolution. SLA monitoring, vendor management, asset tracking, and cost analytics.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Maintenance Requests Disappear Into Black Holes",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Lost Requests', desc: "Tickets reported verbally, via WhatsApp, or email. No centralized system, no tracking, no accountability."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Resolution', desc: 'Average time to fix an issue is days or weeks because there is no priority system or SLA tracking.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Cost Blindness', desc: "No visibility into maintenance spend by property, category, or vendor. Budget overruns discovered too late."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Reactive Only', desc: "Everything breaks before it is addressed. No preventive maintenance schedules for boilers, HVAC, or fire systems."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Vendor Chaos', desc: "Contractors managed via phone calls. No work orders, no estimate tracking, no proof of completion."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Resident Updates', desc: "Residents submit a request and hear nothing until it is either fixed or they complain again."
                },
            ],
        },
        grid: [
            {
                title: 'Multi-Channel Ticket Submission',
                description: 'Residents submit tickets from the app with photos. Staff create tickets from inspections. QR codes on equipment enable instant issue reporting. Every ticket tracked from creation.',
                points: [
                    'Resident ticket submission from tenant app with photo upload and category selection',
                    'QR code scanning on equipment and in rooms for instant, pre-filled issue reporting',
                    'Staff-created tickets from inspections, walkthroughs, and phone calls',
                    'Email-to-ticket conversion for issues reported via email',
                    'Automatic categorization suggestions based on description and location',
                    'Priority assignment: emergency, urgent, standard, and low with SLA per level'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'SLA Tracking & Escalation',
                description: 'Define response and resolution SLAs per priority level. Automatic alerts when SLAs are approaching, breached, or at risk. Escalation chains ensure nothing slips through.',
                points: [
                    'Configurable SLAs per priority: emergency (2hr), urgent (24hr), standard (72hr)',
                    'Response SLA (time to first action) and resolution SLA (time to close) tracking',
                    'Automatic alerts at 50%, 75%, and 100% of SLA threshold',
                    'Escalation chains: staff > manager > director with configurable timeouts',
                    'SLA compliance dashboard showing on-time rates by property, category, and team',
                    'Breach reporting with root cause tracking for continuous improvement'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Vendor & Contractor Coordination',
                description: 'Invite external contractors into specific tickets. They receive work orders, submit estimates, upload completion photos, and invoice -- all without needing a full system account.',
                points: [
                    'Vendor portal: contractors access assigned tickets via mobile web app (no login needed)',
                    'Work order generation with scope, location, access instructions, and photos',
                    'Estimate submission and approval workflow before work begins',
                    'Completion photo upload and sign-off by contractor and property manager',
                    'Invoice submission linked to specific work orders with automatic cost tracking',
                    'Vendor performance scorecards: response time, quality, cost, and SLA compliance'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Planned Preventive Maintenance (PPM)',
                description: 'Schedule recurring maintenance before things break. Asset registration, service schedules, compliance-driven maintenance, and automated work order creation.',
                points: [
                    'Asset registration: HVAC, boilers, lifts, fire systems, electrical, plumbing per property',
                    'PPM schedules with configurable intervals: monthly, quarterly, semi-annual, annual',
                    'Automatic work order creation when PPM is due with contractor assignment',
                    'Compliance-driven PPM: gas safety servicing, EICR testing, fire alarm checks',
                    'Service history tracking per asset with cost accumulation and replacement forecasting',
                    'PPM calendar view showing upcoming and overdue maintenance across portfolio'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Resident Communication & Transparency',
                description: 'Keep residents informed automatically. Status updates at every stage, estimated completion times, and satisfaction surveys after resolution.',
                points: [
                    'Automated status notifications: received, assigned, in progress, completed',
                    'Estimated completion time visible to residents in their app',
                    'Resident-facing comments and photo updates showing progress',
                    'Satisfaction survey triggered on ticket closure with rating and feedback',
                    'Reopening workflow if resident is not satisfied with resolution',
                    'Communication audit trail: every message between resident, staff, and vendor'
                ],
                image: '/images/buildscale.webp',
            },

            {
                title: 'Maintenance Analytics & Cost Tracking',
                description: 'Track spend, SLA performance, vendor costs, and issue patterns across your portfolio. Identify recurring problems, budget accurately, and benchmark properties.',
                points: [
                    'Cost tracking per ticket, vendor, property, category, and time period',
                    'Budget vs. actual maintenance spend with variance alerts',
                    'Recurring issue detection: flag repeat problems at same location or same equipment',
                    'Category analysis: plumbing vs. electrical vs. HVAC vs. common area breakdown',
                    'Property benchmarking: maintenance cost per bed, tickets per bed, resolution time',
                    'Monthly maintenance reports for stakeholders with trend analysis'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Fix Things Faster, Spend Less",
            description: 'See how SLA tracking, vendor coordination, and preventive maintenance transform your operations.',
        },
        stats: [
            { value: '65%', label: 'Faster ticket resolution with SLA tracking' },
            { value: '40%', label: 'Reduction in maintenance costs with PPM' },
            { value: '98%', label: 'Ticket resolution rate' },
            { value: '0', label: 'Lost maintenance requests' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "Before JumboTiger, we had a spreadsheet with 200+ open tickets and no idea which ones were urgent. Now every ticket has an SLA, vendors submit estimates through the system, and our average resolution time dropped from 11 days to 3.",
                    "name": "Maintenance Director",
                    "role": "UK Coliving Operator, 30 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How do QR code tickets work?',
                    answer: "Place QR codes on equipment, in rooms, or in common areas. Residents scan the code, which pre-fills the location and category. They add a description and photos, and the ticket is created instantly.",
                },
                {
                    question: 'Can contractors access the system?',
                    answer: 'Yes. Contractors receive a link to a mobile web app for their assigned tickets. They can view work orders, submit estimates, upload completion photos, and invoice -- all without a full user account.',
                },
                {
                    question: 'How does preventive maintenance scheduling work?',
                    answer: 'Register assets (boilers, HVAC, lifts, etc.) with service intervals. The system auto-creates work orders when service is due, assigns contractors, and tracks completion. Compliance-driven PPM ties into certificate renewal schedules.',
                },
                {
                    question: 'What SLA options are available?',
                    answer: 'Fully configurable. Set response and resolution SLAs per priority level (e.g., emergency: 2hr response / 4hr resolution). Alerts fire at configurable thresholds and escalate through chains you define.',
                },
                {
                    question: 'Can residents track their ticket status?',
                    answer: 'Yes. Residents see real-time status updates in their app: received, assigned, in progress, estimated completion, and completed. They get push notifications at each stage.',
                },
                {
                    question: 'How do you track maintenance costs?',
                    answer: 'Every ticket tracks labor and material costs from vendor invoices. Dashboards show spend by property, category, vendor, and period with budget vs. actual comparisons and per-bed cost benchmarking.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Fix Maintenance?',
            description: "Book a demo and see how SLA tracking and vendor coordination cut resolution time by 65%.",
        },
    },
    'channel-manager': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: '300+ channel distribution, real-time rate sync, centralized booking management, and channel analytics.',
            title: 'Channel Manager & OTA Distribution',
            description:
                'List your inventory across Airbnb, Booking.com, Expedia, HousingAnywhere, and 300+ channels. Real-time rate and availability sync. Every booking managed from one dashboard.',
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Manual Channel Management Is Unsustainable",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Double Booking Risk', desc: "Availability updated manually across channels. One delay = one double booking = one angry guest and one refund."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Rate Lag', desc: 'Price changes take hours to propagate. By the time all channels reflect your new rate, the opportunity has passed.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Channel Insight', desc: "Which channels actually perform? What is your cost per booking per channel? Without data, marketing spend is blind."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Commission Blindness', desc: "Paying 15-25% to OTAs without knowing which channels deliver the best ROI or guest quality."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Limited Reach', desc: "Only listed on 2-3 platforms. Missing bookings from regional OTAs, corporate platforms, and niche channels."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Central Control', desc: "Different content, different photos, different descriptions on each channel. Brand inconsistency everywhere."
                },
            ],
        },
        grid: [
            {
                title: 'Multi-Channel Distribution',
                description: 'Connect to 300+ booking channels with a single integration. Push your inventory to global OTAs, regional platforms, corporate booking tools, and student housing portals.',
                points: [
                    'Airbnb, Booking.com, and Expedia native certified integrations',
                    'HousingAnywhere, Spotahome, and Uniplaces for mid-to-long-term stays',
                    'SiteMinder connectivity for 250+ additional OTA channels',
                    'SpareRoom, Roomgo, and flat-share platforms for room-level listings',
                    'Corporate booking platforms: SilverDoor, AltoVita, Homelike',
                    'Regional channels: Trip.com, Agoda, EaseMyTrip for Asia-Pacific markets'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Real-Time Rate & Availability Sync',
                description: 'When a booking is made on any channel, all others update instantly. Rate changes propagate in seconds, not hours. Zero manual updates, zero double bookings.',
                points: [
                    'Real-time availability sync: booking on one channel instantly blocks all others',
                    'Rate push across all channels in under 60 seconds',
                    'Automatic channel blocking when units are booked via direct or long-stay channels',
                    'Minimum stay and restriction sync per channel',
                    'Calendar-level control: block specific dates, set channel-specific availability windows',
                    'Fallback handling: automatic retry if a channel sync fails with alert notification'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Centralized Booking Management',
                description: 'Every booking from every channel lands in one dashboard. View, modify, cancel, and communicate with guests regardless of where they booked.',
                points: [
                    'Unified booking inbox from all connected channels in one dashboard',
                    'Booking details: guest info, dates, rate, channel source, and payment status',
                    'Modification and cancellation handling with automatic channel notification',
                    'Guest communication templates per channel (OTA messaging rules compliance)',
                    'Booking-to-resident conversion for long-stay guests transitioning to leases',
                    'Automated confirmation and pre-arrival communication sequences'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Content & Listing Management',
                description: 'Manage property descriptions, photos, amenities, and policies from one place. Push consistent content to all channels while respecting platform-specific requirements.',
                points: [
                    'Centralized property content: descriptions, photos, floor plans, and amenities',
                    'AI-generated listing descriptions optimized per channel and audience',
                    'Photo management with automatic resizing and ordering per channel requirements',
                    'Amenity and facility mapping to each channel taxonomy',
                    'Policy management: cancellation, check-in/out times, house rules per channel',
                    'Multilingual content management for international channels'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Channel Performance Analytics',
                description: 'Know exactly which channels deliver. Bookings, revenue, commission costs, cancellation rates, and ROI per channel. Data-driven decisions on where to invest.',
                points: [
                    'Bookings per channel with revenue, ADR, and occupancy contribution',
                    'Commission tracking and cost-per-booking calculation per channel',
                    'Channel ROI comparison: net revenue after commission and marketing costs',
                    'Cancellation and no-show rates per channel for quality assessment',
                    'Booking velocity: how fast each channel fills upcoming availability',
                    'Guest quality metrics: length of stay, spend, review scores per channel source'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Hybrid Distribution Strategy',
                description: 'Manage short-stay OTA bookings alongside long-stay direct leases. Automatically switch between distribution strategies based on occupancy, season, and lead time.',
                points: [
                    'Dual distribution: OTA for short stays, direct/partner portals for long stays',
                    'Automatic OTA activation when gap nights are detected between leases',
                    'Lead time rules: switch from long-stay to short-stay pricing as dates approach',
                    'Seasonal strategy switching: summer short-stays, academic year long-stays',
                    'Direct booking priority: auto-close OTA channels when direct booking is confirmed',
                    'Revenue comparison: OTA vs. direct vs. corporate to optimize channel mix'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Distribute Smarter, Not Harder",
            description: 'See how operators manage 300+ channels from one dashboard with zero double bookings.',
        },
        stats: [
            { value: '300+', label: 'Connected distribution channels' },
            { value: '0', label: 'Double bookings with real-time sync' },
            { value: '60s', label: 'Rate propagation to all channels' },
            { value: '25%', label: 'Revenue increase from channel diversification' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We went from 3 OTA channels to 15+ overnight. Revenue from short stays tripled, and we haven not had a single double booking since launch. The channel performance data helped us cut 2 underperforming platforms and reinvest in the top 5.",
                    "name": "Revenue Director",
                    "role": "Flex Living Operator, 20 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Which OTA channels are supported?',
                    answer: "Airbnb, Booking.com, Expedia, HousingAnywhere, Spotahome, Uniplaces, SpareRoom, Trip.com, Agoda, SilverDoor, AltoVita, Homelike, and 250+ more via SiteMinder connectivity.",
                },
                {
                    question: 'How fast does availability sync?',
                    answer: 'Real-time. When a booking is made on any channel, all others are updated within seconds. Rate changes propagate in under 60 seconds.',
                },
                {
                    question: 'Can we manage long-stay and short-stay on the same inventory?',
                    answer: 'Yes. The hybrid distribution strategy lets you list the same units on long-stay platforms and short-stay OTAs simultaneously. When a long-stay booking is confirmed, OTA channels auto-close for those dates.',
                },
                {
                    question: 'How do we track channel performance?',
                    answer: 'Dashboards show bookings, revenue, commission, cancellation rates, and ROI per channel. Compare channels to identify top performers and cut underperformers.',
                },
                {
                    question: 'Does it handle OTA messaging rules?',
                    answer: 'Yes. Guest communication templates are channel-aware, respecting each platform messaging policies. You communicate with guests from one inbox without violating OTA rules.',
                },
                {
                    question: 'Can we prioritize direct bookings?',
                    answer: 'Yes. Configure rules to auto-close OTA channels when a direct booking is confirmed. Lead-time rules can shift from OTA to direct pricing as dates approach.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Distribute Everywhere?',
            description: "Book a demo and see how 300+ channels, real-time sync, and analytics maximize your booking revenue.",
        },
    },
    'revenue-management': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Dynamic pricing, PriceLabs integration, hybrid pricing, RevPAB analytics, forecasting, and void optimization.',
            title: 'Revenue Management & Dynamic Pricing',
            description:
                "Optimize every bed's revenue with dynamic pricing, demand forecasting, competitor rate tracking, yield analytics, and automated rate adjustments. Stop leaving money on the table.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Static Pricing Is Costing You Thousands",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Flat Rate Pricing', desc: "Same price regardless of season, demand, or occupancy level. Peak-season revenue left on the table."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Competitor Visibility', desc: 'No idea what similar properties charge. Pricing decisions based on gut feeling, not data.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Adjustments', desc: "Rate changes require manual updates across listings, portals, and contracts. Takes days, should take seconds."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'One-Size-Fits-All', desc: "Same pricing logic for short stays, mid-term, and long-term. No optimization by stay type."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Yield Metrics', desc: "Can't measure RevPAB, ADR, or yield by room type. No way to know which inventory is underperforming."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Spreadsheet Forecasting', desc: "Revenue forecasts built manually from historical data. No predictive models, no scenario planning."
                },
            ],
        },
        grid: [
            {
                title: 'Dynamic Pricing Engine',
                description: 'Automatically adjust rates based on occupancy, demand patterns, seasonality, and day of week. Set boundaries and let the algorithm optimize within your rules.',
                points: [
                    'Automated rate adjustments based on occupancy thresholds and demand signals',
                    'Seasonal pricing with configurable peak, shoulder, and off-peak periods',
                    'Day-of-week pricing variations for short-stay and flexible accommodation',
                    'Minimum and maximum rate boundaries to protect brand positioning',
                    'Rate rules per room type, floor, view, amenities, and property',
                    'A/B testing for pricing strategies with conversion tracking'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'PriceLabs & Revenue Tool Integration',
                description: 'Connect to PriceLabs, FLYR, and other revenue management tools for algorithmic pricing powered by market data, competitor rates, and demand forecasting.',
                points: [
                    'PriceLabs integration for AI-powered rate recommendations',
                    'FLYR integration for advanced revenue optimization algorithms',
                    'Competitor rate monitoring from OTA listings and market data feeds',
                    'Demand-based pricing adjusting rates as occupancy approaches targets',
                    'Market-level pricing intelligence with comparable property benchmarking',
                    'Automated rate push to all connected channels and booking engine'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Hybrid Pricing by Stay Type',
                description: 'Different pricing strategies for different stay types on the same inventory. Nightly rates for short stays, weekly for mid-term, monthly for long-term -- all optimized independently.',
                points: [
                    'Stay-type pricing tiers: nightly, weekly, monthly, academic term, and custom',
                    'Length-of-stay discounts: automatic rate reduction for longer commitments',
                    'Minimum stay requirements configurable by season, room type, and property',
                    'Early bird discounts and last-minute pricing for gap filling',
                    'Corporate rate agreements with negotiated pricing per partner',
                    'Promotional pricing campaigns with start/end dates and usage limits'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Revenue Analytics & Dashboards',
                description: 'Track RevPAB, ADR, occupancy, yield, and revenue mix across your entire portfolio. Compare properties, room types, channels, and time periods at a glance.',
                points: [
                    'RevPAB (Revenue Per Available Bed) tracking across properties and room types',
                    'ADR (Average Daily Rate) analytics with trend visualization',
                    'Occupancy vs. revenue optimization: find the sweet spot for each property',
                    'Channel revenue mix: direct vs. OTA vs. corporate vs. partner breakdown',
                    'Room-type performance league tables ranking by yield and occupancy',
                    'Portfolio-level revenue dashboards with drill-down to individual units'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Revenue Forecasting & Scenario Planning',
                description: 'Predict future revenue using historical patterns, booking velocity, and market trends. Run scenarios to test pricing strategies before deploying them.',
                points: [
                    'AI-powered revenue forecasting based on historical data and booking velocity',
                    'Seasonal pattern recognition for demand prediction and pricing optimization',
                    'Scenario planning: model "what if" pricing changes before going live',
                    'Booking pace analysis: compare current bookings to historical pace by date range',
                    'Cancellation and no-show prediction to adjust overbooking strategies',
                    'Budget vs. actual revenue tracking with variance alerts'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Void & Gap Optimization',
                description: 'Identify and fill revenue gaps between long stays. Automatically enable short-stay pricing for gap periods, push to OTAs, and maximize revenue from every night.',
                points: [
                    'Automatic gap detection between lease end and next booking start',
                    'Short-stay rate activation for gap periods with OTA channel push',
                    'Gap night revenue tracking: incremental revenue captured from void filling',
                    'Minimum gap threshold: only activate for gaps above configurable length',
                    'Void reduction analytics: track improvement from gap-filling strategies',
                    'Integration with channel manager for automatic availability push during gaps'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Stop Leaving Revenue on the Table",
            description: 'See how dynamic pricing and yield analytics drive 15%+ revenue uplift for operators.',
        },
        stats: [
            { value: '15%', label: 'Average revenue uplift with dynamic pricing' },
            { value: '72%', label: 'Reduction in void periods with gap filling' },
            { value: '3x', label: 'ROI on revenue management investment' },
            { value: '$0', label: 'Spreadsheet forecasting -- replaced by AI' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "Dynamic pricing was the single biggest revenue driver we implemented. RevPAB increased 18% in the first quarter, and gap-filling brought in an extra $45K annually that we were leaving on the table.",
                    "name": "Revenue Manager",
                    "role": "European Flex Living Brand, 1,200+ beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How does dynamic pricing work?',
                    answer: "You set rules (boundaries, seasons, occupancy thresholds) and the engine automatically adjusts rates within those rules. As occupancy rises, rates increase. During low-demand periods, rates adjust to fill beds. You control the strategy; the system executes it.",
                },
                {
                    question: 'Which revenue management tools integrate?',
                    answer: 'PriceLabs and FLYR are pre-built integrations. Custom integrations available via API for other revenue management platforms.',
                },
                {
                    question: 'Can we have different prices for different stay types?',
                    answer: 'Yes. Set separate pricing strategies for nightly, weekly, monthly, and academic-term stays on the same inventory. Each tier can have its own dynamic pricing rules.',
                },
                {
                    question: 'How does gap filling work?',
                    answer: 'The system detects gaps between long-stay bookings and automatically enables short-stay pricing for those periods. Rates are pushed to connected OTA channels to capture bookings. You set minimum gap length and pricing rules.',
                },
                {
                    question: 'What revenue metrics are available?',
                    answer: 'RevPAB, ADR, occupancy rate, yield, channel revenue mix, booking velocity, void rate, and more. All available at portfolio, property, and room-type levels with trend visualization.',
                },
                {
                    question: 'Can we forecast revenue?',
                    answer: 'Yes. AI-powered forecasting uses historical patterns, current booking pace, and market trends to predict future revenue. Scenario planning lets you model pricing changes before deploying them.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Optimize Your Revenue?',
            description: "Book a demo and see how operators increase RevPAB by 15% with dynamic pricing and yield management.",
        },
    },
    'utility-energy': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Smart metering, per-unit tracking, automated cost allocation, leak detection, and sustainability reporting.',
            title: 'Utility & Energy Management',
            description:
                "Smart metering, per-unit consumption tracking, automated cost allocation, sustainability reporting, anomaly detection, and energy efficiency insights -- all from one dashboard.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Utility Costs Are a Black Box",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Unfair Cost Splitting', desc: "Dividing utility bills equally penalizes frugal residents and subsidizes waste. No per-unit data means no fair allocation."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Consumption Visibility', desc: 'You cannot manage what you cannot measure. Without smart metering, energy waste runs unchecked across your portfolio.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Manual Billing Headaches', desc: "Staff spend hours reading meters, calculating splits, and manually adding utility charges to invoices. Errors are constant."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Leak & Waste Detection Gaps', desc: "Water leaks and HVAC faults go undetected for weeks. By the time you notice, the damage and cost are significant."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Sustainability Data', desc: "Investors and regulators increasingly demand ESG reporting. Without consumption data, you cannot report or improve."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Resident Disputes', desc: "Residents challenge utility charges because they have no visibility into their own consumption. Every bill cycle triggers complaints."
                },
            ],
        },
        grid: [
            {
                title: 'Smart Meter Integration & Data Collection',
                description: 'Connect to smart electricity, gas, water, and heat meters across your portfolio. Automatic readings every 15 minutes. No manual meter reads ever again.',
                points: [
                    'Integration with major smart meter providers: Chameleon, Hildebrand, Stark, and utility company APIs',
                    'Automatic 15-minute interval readings for electricity, gas, water, and heat meters',
                    'Sub-metering support: individual room meters, floor meters, and common area meters',
                    'Automatic meter registration on move-in and deregistration on move-out',
                    'Historical data import for pre-existing meters and manual reading fallback',
                    'Real-time meter health monitoring with alerts for offline or malfunctioning devices'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Per-Unit Consumption Tracking & Dashboards',
                description: 'See exactly how much energy each unit, floor, and common area consumes. Compare properties, identify outliers, and track trends over time.',
                points: [
                    'Per-room and per-bed consumption dashboards with daily, weekly, and monthly views',
                    'Property-level and portfolio-level energy overview with drill-down capability',
                    'Consumption heatmaps showing peak usage times and high-consumption units',
                    'Year-over-year comparison: track improvement or degradation by property and unit',
                    'Benchmarking: compare unit consumption against property averages and portfolio norms',
                    'Automated outlier detection: flag units consuming 2x+ above the property average'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Automated Cost Allocation & Billing',
                description: 'Calculate and allocate utility costs automatically using configurable rules. Per-meter billing, proportional splitting, capped allowances, or included-in-rent models -- you choose.',
                points: [
                    'Configurable billing models per property: metered, proportional, capped, or all-inclusive',
                    'Automatic cost calculation using tariff rates, standing charges, and consumption data',
                    'Fair splitting for shared spaces: common area costs allocated proportionally by occupancy',
                    'Capped utility allowances: residents get a free allowance, pay only for excess usage',
                    'Automatic charge generation pushed to the Payments module for invoicing',
                    'Multi-tariff support: day/night rates, seasonal pricing, and renewable energy credits'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Anomaly Detection & Leak Alerts',
                description: 'AI-powered monitoring catches unusual consumption patterns before they become costly. Water leaks, HVAC faults, and energy waste detected and flagged automatically.',
                points: [
                    'Continuous monitoring algorithms comparing real-time usage against historical baselines',
                    'Water leak detection: sudden or sustained consumption spikes trigger instant alerts',
                    'HVAC anomaly detection: heating or cooling running when units are unoccupied',
                    'Electrical fault indicators: unusual power draw patterns flagged for investigation',
                    'Configurable alert thresholds and escalation rules per property and meter type',
                    'Estimated savings dashboard: see how much anomaly detection has saved you'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Resident Energy Portal & Transparency',
                description: 'Give residents visibility into their own consumption. Self-service dashboards, usage tips, and transparent billing eliminate disputes and encourage conservation.',
                points: [
                    'Resident-facing consumption dashboard in the tenant portal and mobile app',
                    'Daily and weekly usage summaries with comparison to property averages',
                    'Personalized energy-saving tips based on consumption patterns and property type',
                    'Billing transparency: residents see exactly how their utility charges are calculated',
                    'Push notifications for unusual usage: helps residents catch issues in their own units',
                    'Gamification option: energy-saving challenges and leaderboards between units'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Sustainability Reporting & ESG Compliance',
                description: 'Generate carbon footprint reports, track energy efficiency improvements, and meet investor ESG requirements with automated sustainability dashboards.',
                points: [
                    'Carbon footprint calculation: CO2 equivalent reporting per property, portfolio, and per-bed',
                    'Energy Performance Certificate (EPC) tracking and improvement planning',
                    'Renewable energy tracking: solar panel generation vs. grid consumption',
                    'ESG report generation: investor-ready sustainability reports with year-over-year trends',
                    'Regulatory compliance: automated reporting for MEES, EPBD, and local energy regulations',
                    'Sustainability goals dashboard: set targets and track progress across your portfolio'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Take Control of Utility Costs",
            description: 'See how smart metering and automated billing eliminate disputes, cut energy waste, and give you full visibility into every kilowatt.',
        },
        stats: [
            { value: '23%', label: 'Average energy cost reduction with smart monitoring' },
            { value: '100%', label: 'Elimination of manual meter reading' },
            { value: '0', label: 'Utility billing disputes with transparent dashboards' },
            { value: '48h', label: 'Average time to detect water leaks vs. weeks manually' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We were losing thousands monthly to undetected water leaks and unfair utility splits that drove resident complaints. Within 3 months of deploying the energy module, we cut utility costs 23%, eliminated billing disputes entirely, and caught two major leaks within hours instead of weeks.",
                    "name": "Finance Director",
                    "role": "UK Coliving Operator, 22 properties, 1,800 beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Which smart meters do you support?',
                    answer: "We integrate with all major smart meter infrastructure providers and utility company APIs. For sub-metering, we support Chameleon, Hildebrand, Stark, and most Zigbee/MQTT-based meters. Our API also supports custom hardware.",
                },
                {
                    question: 'Can we use different billing models per property?',
                    answer: 'Yes. Each property can have its own billing model: fully metered, proportional split, capped allowance, or all-inclusive. You can even mix models within a property for different utility types.',
                },
                {
                    question: 'How does the leak detection work?',
                    answer: 'Our algorithms compare real-time consumption against historical baselines. A sudden spike (burst pipe) or sustained above-normal usage (slow leak) triggers alerts within hours. You configure the sensitivity and escalation rules.',
                },
                {
                    question: 'Do residents see their own consumption?',
                    answer: 'Yes. Residents access their energy dashboard from the tenant portal and mobile app. They see daily usage, comparison to averages, how charges are calculated, and personalized saving tips.',
                },
                {
                    question: 'What sustainability reports can we generate?',
                    answer: 'Carbon footprint per property and portfolio, EPC tracking, renewable vs. grid consumption, ESG investor reports, and regulatory compliance reports for MEES and EPBD. All exportable as PDF or CSV.',
                },
                {
                    question: 'How quickly does it pay for itself?',
                    answer: 'Most operators see 15-25% energy cost reduction within 3 months through leak detection, waste identification, and behavioral change from resident transparency. The module typically pays for itself within the first quarter.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Cut Energy Waste and Bill Fairly?',
            description: "Book a demo and see how smart utility management reduces costs, eliminates disputes, and meets your sustainability goals.",
        },
    },
    'compliance-regulatory': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Certificate tracking, renewal alerts, document serving, right-to-rent verification, and audit-ready reporting.',
            title: 'Compliance & Regulatory Management',
            description:
                "Track every certificate, license, and regulatory requirement across your portfolio. Automated renewal alerts, digital document serving, tenant acknowledgment, and complete audit trails.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "One Missed Certificate Can Cost You Everything",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Spreadsheet Tracking', desc: "Certificates tracked in spreadsheets with manual date monitoring. One missed row = one missed deadline."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Renewal Alerts', desc: "Staff have to remember to check expiry dates. No automatic reminders until it's too late."
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Missing Audit Trails', desc: "No digital proof that compliance documents were served to tenants. Disputes become he-said-she-said."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Multi-Property Complexity', desc: "Different properties have different requirements, different expiry dates, and different local regulations."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Costly Non-Compliance', desc: "Fines of $10K-$100K+ for lapsed certificates. Criminal liability for serious breaches. Insurance invalidation."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Regional Variation', desc: "UK requires gas safety; EU has different fire regs; Asia-Pacific has unique building codes. No system handles all."
                },
            ],
        },
        grid: [
            {
                title: 'Certificate & License Tracking',
                description: 'Upload and track every compliance document across your portfolio. Gas Safety, EICR, EPC, fire safety, HMO licenses, building permits -- all in one dashboard with expiry monitoring.',
                points: [
                    'Centralized certificate dashboard across entire portfolio with traffic-light status',
                    'Gas Safety certificate tracking with annual renewal monitoring',
                    'EICR (Electrical Installation Condition Report) management with 5-year cycle tracking',
                    'EPC (Energy Performance Certificate) tracking with rating visibility per property',
                    'HMO license management with expiry dates and early renewal warnings',
                    'Fire safety certification, extinguisher service dates, and alarm testing logs'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Automated Renewal Workflows',
                description: 'Never miss a renewal deadline again. Configurable alerts at 90, 60, and 30 days before expiry. Automatic maintenance ticket creation and contractor assignment for renewals.',
                points: [
                    'Multi-stage alerts: 90-day, 60-day, 30-day, and 7-day warnings before certificate expiry',
                    'Automatic maintenance ticket creation for upcoming renewals with contractor assignment',
                    'Renewal workflow: alert > ticket > contractor booked > inspection > certificate uploaded > verified',
                    "Escalation rules if renewals aren't completed by configurable deadlines",
                    'Calendar view of all upcoming renewals across portfolio with timeline visualization',
                    'Priority flagging for properties with multiple certificates expiring in same period'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Digital Document Serving & Acknowledgment',
                description: 'Electronically serve compliance documents to tenants with tracked acknowledgment. Prove that every resident received their Gas Safety certificate and EPC -- with timestamps and digital signatures.',
                points: [
                    'Automatic delivery of compliance documents with tenancy agreements',
                    "Mid-tenancy serving when certificates are renewed during a resident's stay",
                    'Tenant acknowledgment tracking with explicit confirmation and digital signature',
                    'Proof of service audit trail: who received what, when, and their acknowledgment',
                    'Bulk document serving across all residents in a property with one click',
                    'Tenant dashboard access to all compliance documents affecting their unit'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Right-to-Rent & Tenant Verification',
                description: 'Track right-to-rent checks with automated renewal reminders for time-limited permissions. Integrated with ID verification services for automated checks at onboarding.',
                points: [
                    'Right-to-rent verification tracking per tenant with check date and expiry logging',
                    'Automated renewal alerts for time-limited right-to-rent permissions',
                    'Integration with ID verification services for automated checks during onboarding',
                    'Audit trail of all verification checks performed with outcomes and evidence',
                    'Bulk verification reporting for portfolio-wide compliance overview',
                    'Configurable per jurisdiction: right-to-rent (UK), residence permits (EU), work permits (APAC)'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Regional Regulatory Compliance',
                description: 'Configurable compliance rules per jurisdiction. UK gas safety, EU fire regulations, Spanish tourism reporting, Italian tourist tax, Portuguese e-invoicing -- one platform, every market.',
                points: [
                    'UK: Gas Safety, EICR, EPC, HMO licensing, fire safety, legionella risk assessments',
                    'EU: Fire regulations, energy efficiency, building accessibility, data protection',
                    'Spain: Tourism authority reporting, local registration requirements',
                    'Italy: Tourist tax calculation, collection, and authority reporting',
                    'Portugal: e-invoicing requirements and fiscal authority integration',
                    'Asia-Pacific: Building code compliance, fire safety, and occupancy permits'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Compliance Reporting & Audit Readiness',
                description: 'Board-ready compliance reports showing certificate status, renewal history, document serving records, and gap analysis. Always audit-ready, always defensible.',
                points: [
                    'Portfolio-wide compliance dashboard with property-level drill-down',
                    'Traffic-light status: green (compliant), amber (expiring soon), red (expired/missing)',
                    'Compliance gap analysis identifying missing or expired certificates',
                    'Historical compliance record: complete timeline of every certificate ever held',
                    'Audit export: one-click generation of compliance packs for inspectors or insurers',
                    'Making Tax Digital (MTD) readiness and financial compliance reporting for UK operations'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Never Miss a Compliance Deadline Again",
            description: 'See how automated tracking, renewal workflows, and audit trails protect your portfolio.',
        },
        stats: [
            { value: '100%', label: 'Certificate tracking coverage across portfolio' },
            { value: '0', label: 'Missed renewal deadlines with automated alerts' },
            { value: '90%', label: 'Reduction in compliance admin time' },
            { value: '$0', label: 'Fines from lapsed certificates after deployment' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We had a close call with an expired gas safety certificate that could have cost us our HMO license. Since deploying JumboTiger's compliance module, we haven't missed a single deadline across 45 properties.",
                    "name": "Compliance Manager",
                    "role": "UK HMO Operator, 45 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Which compliance certificates can we track?',
                    answer: "Gas Safety, EICR, EPC, HMO licenses, fire safety, legionella risk assessments, building permits, and any custom certificate types. Each has configurable renewal cycles and alert schedules.",
                },
                {
                    question: 'How do renewal alerts work?',
                    answer: 'You configure alert intervals (e.g., 90, 60, 30, 7 days before expiry). The system sends notifications to assigned staff and can auto-create maintenance tickets with contractor assignment for the renewal.',
                },
                {
                    question: 'Can we prove documents were served to tenants?',
                    answer: 'Yes. When compliance documents are served electronically, the system tracks delivery, resident acknowledgment (with digital signature), and timestamps. This creates a defensible audit trail for inspections and disputes.',
                },
                {
                    question: 'Does it handle different regulations per country?',
                    answer: 'Yes. Compliance rules are configurable per jurisdiction. UK properties get gas safety and HMO tracking; EU properties get relevant local requirements; each market has its own compliance template.',
                },
                {
                    question: 'How does the audit export work?',
                    answer: 'One click generates a complete compliance pack for any property: current certificates, renewal history, serving records, and tenant acknowledgments. Ready for inspector visits or insurance audits.',
                },
                {
                    question: 'Can we track right-to-rent checks?',
                    answer: "Yes. Each tenant's right-to-rent status is tracked with check dates, evidence, and expiry. Time-limited permissions get automatic renewal reminders so you never have a lapsed check.",
                }

            ],
        },
        readybuild: {
            title: 'Ready to Automate Compliance?',
            description: "Book a demo and see how operators track every certificate, serve every document, and pass every audit.",
        },
    },
    'document-management': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Contract templates, e-signatures, secure storage, automated serving, acknowledgment tracking, and audit trails.',
            title: 'Document Management & Digital Contracts',
            description:
                "Contract templates, e-signatures, secure document storage, automated serving, compliance audit trails, and resident acknowledgment tracking -- all paperless, all automated.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Paper Contracts Are Slow, Expensive, and Risky",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Manual Contract Chaos', desc: "Creating contracts from scratch every time. Copy-paste errors, wrong tenant names, missing clauses. Each contract takes 30+ minutes to prepare."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Signature Bottleneck', desc: 'Printing, mailing, waiting for wet signatures, scanning, filing. A single contract can take 5-7 days to execute.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Lost Documents', desc: "Filed in email, shared drives, desk drawers, or filing cabinets. When you need a document, it takes hours to find -- if you find it at all."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Compliance Blind Spots', desc: "Section 21 notices, gas safety certs, right-to-rent checks -- serving and tracking these manually means critical deadlines slip through."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Audit Trail', desc: "Who signed what, when? Which version was served? Without a digital trail, disputes become costly."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Printing & Storage Costs', desc: "Paper, ink, postage, filing cabinets, storage rooms. For a 500-bed operator, document costs add up to thousands annually."
                },
            ],
        },
        grid: [
            {
                title: 'Contract Template Engine',
                description: 'Build once, use forever. Create contract templates with dynamic fields that auto-populate tenant details, property info, dates, and pricing. Version control ensures everyone uses the latest approved template.',
                points: [
                    'Drag-and-drop template builder with dynamic merge fields for tenant, property, and financial data',
                    'Template library: ASTs, license agreements, guarantor forms, house rules, addendums',
                    'Version control with approval workflows -- only authorized staff can publish new versions',
                    'Multi-language templates for international portfolios with automatic locale detection',
                    'Conditional clauses that appear or hide based on property type, stay length, or jurisdiction',
                    'Bulk contract generation: create 100+ contracts in minutes for large move-in cohorts'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'E-Signature & Digital Execution',
                description: 'Send contracts for signature in seconds. Tenants sign on any device -- phone, tablet, or desktop. Legally binding e-signatures with full compliance to eIDAS, ESIGN Act, and UETA.',
                points: [
                    'One-click send for signature via email, SMS, or in-app notification',
                    'Multi-party signing: tenant, guarantor, landlord, and witness -- in any order or simultaneously',
                    'Legally compliant e-signatures meeting eIDAS (EU), ESIGN Act (US), and Electronic Communications Act (UK)',
                    'Signing reminders: automated follow-ups at 24h, 48h, and 72h for unsigned contracts',
                    'In-person signing mode for walk-in tenants using tablet at reception',
                    'Signature certificate with timestamp, IP address, device info, and geolocation audit proof'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Secure Document Storage & Retrieval',
                description: 'Every document stored securely in the cloud, organized by tenant, property, and document type. Full-text search finds any document in seconds. No more filing cabinets.',
                points: [
                    'Centralized document vault organized by tenant, property, unit, and document category',
                    'Full-text search across all documents: find any contract, certificate, or notice instantly',
                    'Automatic categorization: contracts, ID documents, certificates, notices, correspondence',
                    'Role-based access: staff see relevant documents; tenants see only their own files',
                    'Document sharing with external parties via secure time-limited links',
                    'Cloud storage with encryption at rest and in transit, meeting GDPR and SOC 2 standards'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Automated Document Serving & Compliance',
                description: 'Serve Section 21 notices, rent increase letters, and compliance documents automatically. Track delivery, receipt, and acknowledgment with legally defensible proof of service.',
                points: [
                    'Automated serving of statutory notices: Section 21, Section 8, rent increase, and tenancy renewal',
                    'Multi-channel delivery: email, in-app, SMS, and registered post with tracking',
                    'Proof of service: delivery confirmation, read receipts, and acknowledgment timestamps',
                    'Regulatory calendar: auto-generated schedule of all required notices by jurisdiction and tenancy',
                    'Batch serving: send identical notices to all affected tenants in one action',
                    'Legal hold: prevent document deletion when disputes or legal proceedings are active'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Resident Acknowledgment & Digital Signing',
                description: 'Beyond contracts -- get digital acknowledgment for house rules, welcome packs, safety briefings, inventory checks, and move-out reports. Every acknowledgment timestamped and stored.',
                points: [
                    'Digital acknowledgment forms for house rules, fire safety, and community guidelines',
                    'Move-in and move-out inventory reports with photo evidence and resident sign-off',
                    'Welcome pack acceptance: residents confirm receipt of keys, fobs, and information packs',
                    'Periodic re-acknowledgment: annual safety briefing sign-off, updated terms acceptance',
                    'Acknowledgment dashboard: see at a glance which residents have outstanding items',
                    'Push notification reminders for residents with pending acknowledgments'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Audit Trail & Compliance Reporting',
                description: 'Every document action logged: creation, edit, send, sign, view, download. Generate compliance reports for auditors, investors, and regulators in one click.',
                points: [
                    'Complete audit trail: every document creation, modification, signature, and access event logged',
                    'Compliance dashboard: expiring contracts, unsigned documents, pending notices at a glance',
                    'Regulatory reporting: generate HMO compliance packs, right-to-rent audit reports, and certificate summaries',
                    'Retention policies: auto-archive or delete documents after configurable retention periods',
                    'Export capabilities: PDF bundles, CSV reports, and API access for external compliance systems',
                    'Investor and stakeholder reports: document health metrics across your portfolio'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Go Paperless. Stay Compliant.",
            description: 'See how digital document management eliminates paper, speeds up onboarding, and keeps you audit-ready at all times.',
        },
        stats: [
            { value: '95%', label: 'Reduction in contract execution time' },
            { value: '100%', label: 'Digital audit trail for every document' },
            { value: '2min', label: 'Average time to find any document' },
            { value: '0', label: 'Lost or misfiled documents' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We used to spend 3 days chasing signatures for a single tenancy agreement. Now contracts go out and come back signed within hours. Our compliance team loves the automated notice serving -- nothing falls through the cracks anymore.",
                    "name": "Operations Director",
                    "role": "BTR Operator, 2,500 units across 8 developments"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Are e-signatures legally binding?',
                    answer: "Yes. Our e-signatures comply with eIDAS (EU), the ESIGN Act (US), and the Electronic Communications Act (UK). Each signature includes a certificate with timestamp, IP address, and device information for full legal defensibility.",
                },
                {
                    question: 'Can we use our existing contract templates?',
                    answer: 'Absolutely. Import your existing Word or PDF templates and add dynamic merge fields. Our team helps you migrate during onboarding so your templates are ready from day one.',
                },
                {
                    question: 'How does document serving work for Section 21 notices?',
                    answer: 'Configure the notice type, select affected tenants, and the system serves via your chosen channels (email, in-app, SMS, registered post). Delivery and acknowledgment are tracked automatically with legally defensible proof of service.',
                },
                {
                    question: 'Is document storage secure and GDPR compliant?',
                    answer: 'Yes. All documents are encrypted at rest and in transit. Storage meets GDPR, SOC 2, and ISO 27001 standards. Role-based access ensures tenants only see their own documents. Retention policies auto-archive or delete as configured.',
                },
                {
                    question: 'Can tenants access their documents from the app?',
                    answer: 'Yes. Residents view and download their contracts, notices, and acknowledgment forms from the tenant portal and mobile app. They can also sign documents and submit acknowledgments directly in-app.',
                },
                {
                    question: 'How does bulk contract generation work?',
                    answer: 'Select a template, upload a tenant list (or select from your CRM), and generate hundreds of personalized contracts in minutes. Each contract auto-populates with the correct tenant details, property info, and financial terms.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Eliminate Paper?',
            description: "Book a demo and see how digital document management speeds up onboarding, ensures compliance, and gives you a complete audit trail.",
        },
    },
    'lead-crm': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Multi-channel lead capture, AI scoring, pipeline management, nurturing sequences, and marketing attribution.',
            title: 'Lead & CRM Management',
            description:
                "Track every prospect from first website visit to signed lease. Lead capture, qualification, nurturing sequences, pipeline management, attribution analytics, and conversion optimization -- built for property operators.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Leads Fall Through the Cracks",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Scattered Enquiries', desc: "Leads come via website, email, phone, WhatsApp, OTAs, referrals, and walk-ins. No single place to see them all. Responses are slow and inconsistent."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Response Times', desc: 'The first operator to respond wins the booking. Without automation, your average response time is hours -- competitors respond in minutes.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Pipeline Visibility', desc: "How many leads are in progress? What stage are they at? Which ones are going cold? Without a pipeline, management is flying blind."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Wasted Marketing Spend', desc: "You spend on Google Ads, social media, and listing portals but have no idea which channels deliver signed leases vs. which waste budget."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Inconsistent Follow-Up', desc: "Some staff follow up diligently, others forget. High-intent leads go cold because nobody contacted them after the viewing."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Lead Scoring', desc: "All leads are treated equally. A corporate relocation enquiry for 20 beds gets the same response as a casual browser. No prioritization, no segmentation."
                },
            ],
        },
        grid: [
            {
                title: 'Multi-Channel Lead Capture',
                description: 'Automatically capture leads from every source into one unified pipeline. Website forms, email, phone, WhatsApp, OTA enquiries, referrals, and walk-ins -- nothing gets lost.',
                points: [
                    'Website form integration: enquiry forms, instant quote requests, and viewing bookings auto-create leads',
                    'Email parsing: enquiries sent to your inbox are auto-captured with contact details extracted',
                    'Phone and WhatsApp: missed calls and messages logged as leads with callback reminders',
                    'OTA and channel manager enquiries: leads from Booking.com, Airbnb, and 300+ channels auto-captured',
                    'Referral tracking: leads from B2B partners, corporate clients, and universities tagged with source',
                    'Walk-in registration: front desk staff log walk-in prospects via tablet in under 30 seconds'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Lead Scoring & Qualification',
                description: 'AI-powered lead scoring ranks prospects by conversion likelihood. Budget, move-in date, stay length, and engagement signals determine priority. Your team focuses on the leads that matter.',
                points: [
                    'Automatic lead scoring based on budget match, move-in urgency, stay length, and property fit',
                    'Engagement tracking: website visits, email opens, quote requests, and viewing bookings boost scores',
                    'Lead qualification fields: budget range, desired move-in date, stay duration, room preferences, and source',
                    'Hot/warm/cold classification with configurable thresholds and automatic re-scoring over time',
                    'Corporate and bulk enquiry flagging: multi-bed requests and B2B leads get priority routing',
                    'De-duplication: automatically merge duplicate leads from different channels into a single profile'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Visual Pipeline & Stage Management',
                description: 'Drag-and-drop pipeline board shows every lead at every stage. Customizable stages, automatic stage transitions, and stale lead alerts keep your pipeline healthy.',
                points: [
                    'Visual Kanban board: Enquiry, Qualified, Viewing Booked, Viewed, Offer Sent, Accepted, Contracted, Moved In',
                    'Customizable stages per property type or use case (student, corporate, individual, short-stay)',
                    'Automatic stage progression: lead moves to Viewing Booked when a viewing is scheduled in the system',
                    'Stale lead alerts: leads sitting in a stage too long get flagged for follow-up or archival',
                    'Pipeline value tracking: see total potential revenue at each stage across your portfolio',
                    'Win/loss tracking: when leads choose a competitor or drop off, capture the reason for analysis'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Automated Nurturing Sequences',
                description: 'Set up email and WhatsApp sequences that nurture leads automatically. Follow up after viewings, re-engage cold leads, and drip content that moves prospects toward signing.',
                points: [
                    'Post-enquiry sequence: instant acknowledgment, property highlights, and viewing invitation',
                    'Post-viewing sequence: thank you, pricing summary, testimonials, and urgency nudge',
                    'Cold lead re-engagement: automated outreach at 7, 14, and 30 days with fresh content',
                    'Seasonal campaigns: targeted outreach for September student intake, January corporate relocations',
                    'Personalized content: dynamic variables pull in property name, room type, pricing, and availability',
                    'Multi-channel delivery: email, SMS, WhatsApp, and in-app notifications based on lead preference'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Attribution & Marketing Analytics',
                description: 'Know exactly which marketing channels deliver signed leases -- not just clicks. Full-funnel attribution from first touch to move-in, with cost-per-acquisition by channel.',
                points: [
                    'First-touch and multi-touch attribution: track the full journey from ad click to signed lease',
                    'Channel performance dashboard: Google Ads, social media, OTAs, referrals, organic, and direct',
                    'Cost-per-lead and cost-per-acquisition by channel, property, and room type',
                    'Conversion funnel analysis: see exactly where leads drop off (enquiry to viewing, viewing to offer, etc.)',
                    'Campaign tracking: UTM parameter support for measuring specific marketing campaigns',
                    'ROI reporting: marketing spend vs. revenue generated by channel with break-even analysis'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Team Performance & Activity Tracking',
                description: 'Monitor your leasing team performance. Response times, follow-up rates, conversion rates, and activity logs ensure consistent execution across your team.',
                points: [
                    'Response time tracking: measure how quickly each team member responds to new leads',
                    'Activity logging: calls, emails, viewings, and notes recorded against each lead automatically',
                    'Conversion rate by agent: see which team members convert the most leads and learn from top performers',
                    'Task assignment and reminders: managers assign follow-up tasks with deadlines and escalation',
                    'Team leaderboards: healthy competition drives performance (configurable, optional)',
                    'Capacity management: auto-distribute new leads evenly across team members by availability and workload'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Stop Losing Leads. Start Closing Faster.",
            description: 'See how lead management and CRM automation helps you respond faster, nurture smarter, and convert more enquiries into signed leases.',
        },
        stats: [
            { value: '5min', label: 'Average response time with automated lead capture' },
            { value: '35%', label: 'Increase in enquiry-to-viewing conversion' },
            { value: '2.4x', label: 'More signed leases from nurturing sequences' },
            { value: '100%', label: 'Marketing attribution from click to signed lease' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "Before JumboTiger, we had leads scattered across email, WhatsApp, and spreadsheets. Response times averaged 6 hours. Now every lead is captured instantly, scored, and nurtured automatically. Our enquiry-to-lease conversion jumped from 12% to 28% in three months.",
                    "name": "Head of Sales",
                    "role": "Pan-European Coliving Operator, 30 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How does lead capture work?',
                    answer: "Leads are automatically captured from every channel: website forms, email, phone, WhatsApp, OTA enquiries, referral links, and walk-in registration. Each lead enters the pipeline with source attribution and contact details extracted automatically.",
                },
                {
                    question: 'What is lead scoring?',
                    answer: 'Each lead gets a score based on budget match, move-in urgency, stay length, property fit, and engagement signals (website visits, email opens, viewing bookings). Higher scores mean higher conversion likelihood. Your team focuses on hot leads first.',
                },
                {
                    question: 'Can we customize the pipeline stages?',
                    answer: 'Yes. The default stages (Enquiry through Move-In) work for most operators, but you can add, remove, or rename stages per property type. Student housing might have different stages than corporate flex-living.',
                },
                {
                    question: 'How do nurturing sequences work?',
                    answer: 'Configure automated email/WhatsApp sequences triggered by pipeline events. When a lead enquires, they get an instant response and property highlights. After a viewing, they get pricing and testimonials. Cold leads get re-engagement after 7, 14, and 30 days.',
                },
                {
                    question: 'Can we track marketing ROI?',
                    answer: 'Yes. Full-funnel attribution tracks leads from first ad click to signed lease. See cost-per-lead and cost-per-acquisition by channel (Google, social, OTAs, referrals, organic). Know exactly which channels deliver revenue, not just traffic.',
                },
                {
                    question: 'Does it integrate with our existing tools?',
                    answer: 'The CRM integrates with the AI chatbot for 24/7 lead qualification, the listing website for form captures, the channel manager for OTA enquiries, and the booking module for seamless handoff to onboarding once a lease is signed.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Convert More Enquiries?',
            description: "Book a demo and see how CRM automation captures every lead, nurtures them automatically, and gives you full marketing attribution.",
        },
    },
    'b2b-partners': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Corporate portals, owner dashboards, university partnerships, referral tracking, and partner analytics.',
            title: 'B2B Partners & Owner Management',
            description:
                "Manage corporate housing partners, university agreements, referral programs, OTA distribution, and property owner portals. Every external relationship, one system.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "External Relationships Managed in Silos",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Partner Fragmentation', desc: "Corporate clients managed via email, university agreements in PDFs, and referral tracking in spreadsheets."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Owner Blindness', desc: 'Property owners have no visibility into how their assets are performing. Reports sent manually when they complain.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Channel Insight', desc: "No way to compare performance across booking channels, OTAs, direct bookings, and partner referrals."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Commission Chaos', desc: "Referral commissions tracked manually with no automated calculation, payment, or reporting."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Billing Complexity', desc: "Corporate clients need consolidated invoices, custom payment terms, and spend reporting that manual processes can't deliver."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Slow Onboarding', desc: "New partners wait weeks for portal access, rate agreements, and integration setup."
                },
            ],
        },
        grid: [

            {
                title: 'Corporate Housing Portal',
                description: 'Give corporate clients their own branded portal. Self-service booking, negotiated rates, consolidated invoicing, and spend analytics. Manage hundreds of corporate accounts at scale.',
                points: [
                    'Dedicated B2B portal with corporate branding and own login credentials',
                    'Corporate rate management with negotiated agreements per client',
                    'Account hierarchy: parent company > regional offices > individual bookers',
                    'Bulk booking and group reservation management',
                    'Consolidated corporate invoicing with custom payment terms and PO numbers',
                    'Occupancy and spend reporting per corporate client with export capabilities'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Owner & Investor Portal',
                description: 'Property owners and investors log in to see exactly how their assets are performing. Live occupancy, revenue, maintenance costs, and board-ready reports -- no manual reporting required.',
                points: [
                    'Property owners and investors log in to see exactly how their assets are performing. Live occupancy, revenue, maintenance costs, and board-ready reports -- no manual reporting required.',
                    'Real-time revenue tracking, collection rates, and yield analysis per property',
                    'Maintenance cost visibility with budget vs. actual spending breakdowns',
                    'Contract signing and management within the portal',
                    'Automated monthly/quarterly settlement statements and profitability reports',
                    'Board-ready financial reports downloadable in PDF and Excel formats'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'University & Student Partnerships',
                description: 'Manage university housing agreements, academic year allocations, and institution-specific pricing. Bulk tenant onboarding for entire cohorts with a dedicated university admin portal.',
                points: [
                    'University partnership agreements with institution-specific terms and pricing',
                    'Academic year bed allocation management with reservation tracking',
                    'Dedicated university admin portal for viewing availability and booking',
                    'Bulk student onboarding with automated vetting and contract generation',
                    'Guarantor management: document collection, verification, and liability tracking',
                    'Institution-level reporting: occupancy, satisfaction, and incident tracking'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Referral & Commission Management',
                description: 'Track every referral from source to signed lease. Automated commission calculation, agent portals, and performance reporting. Turn your referral network into a growth engine.',
                points: [
                    'Referral tracking with unique codes per agent, partner, and campaign',
                    'Automated commission calculation based on configurable rules (flat fee, percentage, tiered)',
                    'Agent portal with referral status, commission history, and payout tracking',
                    'Performance reporting per referral source: conversion rate, revenue, lifetime value',
                    'Automated commission payouts on resident move-in or first rent payment',
                    'Integration with CRM for lead attribution across marketing channels'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Partner Analytics & Reporting',
                description: 'Compare performance across all external relationships: corporates, universities, agents, OTAs, and direct bookings. Data-driven decisions on where to invest your partnership efforts.',
                points: [
                    'Cross-channel revenue comparison: direct vs. OTA vs. corporate vs. partner',
                    'Partner-specific pricing rules and availability windows',
                    'Automated partner performance reports delivered on schedule',
                    'Commission and payout reporting across all partner types',
                    'Lead-to-booking conversion tracking per partner and channel',
                    'Custom partner SLAs with compliance monitoring'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Channel Manager & OTA Distribution',
                description: 'Distribute your inventory across 300+ booking channels with real-time rate and availability sync. Centralized booking management and channel performance analytics.',
                points: [
                    '300+ OTA channel connections: Booking.com, Airbnb, Expedia, HousingAnywhere, Spotahome, and more',
                    'Real-time two-way sync: rates, availability, and restrictions updated across all channels instantly',
                    'Centralized booking dashboard: manage reservations from all channels in one unified interface',
                    'Content and listing management: AI-generated descriptions optimized per channel and audience',
                    'Channel performance analytics: revenue, conversion, cancellation rate, and cost-per-booking by channel',
                    'Hybrid distribution strategy: auto-switch from long-stay portals to short-stay OTAs based on lead time'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Turn External Relationships Into Revenue Engines",
            description: 'See how operators manage corporate clients, owners, and 300+ distribution channels from one platform.',
        },
        stats: [
            { value: '300+', label: 'Distribution channels connected' },
            { value: '25%', label: 'Revenue increase from channel diversification' },
            { value: '70%', label: 'Direct bookings via own portal reducing OTA fees' },
            { value: '2x', label: 'Faster corporate client onboarding' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "The owner portal was a game-changer for our investor relations. Property owners stopped calling us for updates because they can see everything in real-time. It freed up 10 hours a week of management time.",
                    "name": "Managing Director",
                    "role": "APAC Student Housing Provider, 2,000+ beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'How does the owner portal work?',
                    answer: "Property owners get dedicated login credentials to a branded portal showing their asset performance: occupancy rates, revenue, maintenance costs, and settlement statements. Reports are generated automatically on your chosen schedule.",
                },
                {
                    question: 'Which OTA channels are supported?',
                    answer: 'We integrate with 300+ channels including Airbnb, Booking.com, Expedia, HousingAnywhere, Spotahome, and via SiteMinder for additional OTA connectivity. Custom channel integrations are available for enterprise clients.',
                },
                {
                    question: 'Can we manage corporate rate agreements?',
                    answer: 'Yes. Set negotiated rates per corporate client with account hierarchies (parent company > regional offices > individual bookers). Consolidated invoicing with custom payment terms and PO numbers.',
                },
                {
                    question: 'How does commission tracking work?',
                    answer: 'Define commission rules per partner (flat fee, percentage, or tiered). The system automatically calculates commissions on confirmed bookings and tracks payouts. Agents get their own portal to monitor referrals and earnings.',
                },
                {
                    question: 'Can university admins book directly?',
                    answer: 'Yes. Universities get a dedicated admin portal where they can view availability, make reservations for their students, and track occupancy for their allocated beds.',
                },
                {
                    question: 'Does the channel manager support real-time sync?',
                    answer: 'Yes. Availability and rates sync in real-time across all connected channels. When a booking is made on any channel, all others are instantly updated to prevent double-booking.',
                }

            ],
        },
        readybuild: {
            title: 'Ready to Scale Your Partner Network?',
            description: "Book a demo and see how operators manage owners, corporates, and 300+ channels from one platform.",
        },
    },
    'screening-verification': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: 'Applications, housemate matching, digital contracts, ID verification, welcome packs, and move-in automation.',
            title: 'Screening & Verification',
            description:
                "Automated background checks, credit scoring, ID verification, and right-to-rent compliance — integrated into your booking pipeline.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Manual Screening Is Slow, Risky, and Inconsistent",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Inconsistent Checks', desc: "Different staff apply different screening criteria. Some prospects slip through with no verification at all."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Days of Delays', desc: 'Waiting for references, chasing employers, manually reviewing documents. Every day of delay is a day of lost rent.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Fraud Exposure', desc: "Fake IDs, forged payslips, and fabricated references are increasingly sophisticated. Manual review can't catch them all."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Compliance Risk', desc: "Right-to-rent checks, GDPR-compliant data handling, and fair housing regulations vary by jurisdiction. One mistake can mean fines."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Paper Trail Chaos', desc: "Screening documents scattered across email, WhatsApp, and filing cabinets. No audit trail. No consistency."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Guarantor Gaps', desc: "Student and international tenants need guarantor verification. Most operators do this manually — or skip it entirely."
                },
            ],
        },
        grid: [
            {
                title: 'Automated Background & Credit Checks',
                description: 'Run comprehensive background checks, credit scoring, and adverse history searches instantly. Integrated with major screening providers for real-time results.',
                points: [
                    'Instant credit scoring with configurable pass/fail thresholds per property type',
                    'Criminal background checks with jurisdiction-appropriate data sources',
                    'County court judgments (CCJ), bankruptcy, and insolvency screening',
                    'Employment and income verification via Open Banking or payslip upload',
                    'Adverse financial history flagging with risk scoring',
                    'Automated screening triggered on application submission — zero manual work'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Digital ID Verification & Document OCR',
                description: 'AI-powered identity verification supporting passports, national IDs, and driving licenses from 195+ countries. Real-time results with liveness detection.',
                points: [
                    'AI document OCR for passports, IDs, and driving licenses (195+ countries)',
                    'Liveness detection to prevent photo and video spoofing attempts',
                    'Automated data extraction: name, DOB, nationality, document number, expiry',
                    'Cross-reference against watchlists and sanctions databases',
                    'Selfie-to-document matching with facial recognition scoring',
                    'GDPR-compliant data handling with automatic retention policies'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Right-to-Rent & Regulatory Compliance',
                description: 'Automated right-to-rent checks for UK operators, visa status verification, and jurisdiction-specific compliance workflows. Never miss a legal requirement.',
                points: [
                    'UK right-to-rent share code verification via Home Office API integration',
                    'Visa status and expiry tracking with automated re-check reminders',
                    'EU/EEA settled status verification for post-Brexit compliance',
                    'Jurisdiction-specific screening requirements auto-applied per property location',
                    'Audit trail for every check: who, when, what result, what action taken',
                    'Automated document serving for section 21 and compliance notices'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Reference & Employment Verification',
                description: 'Automated reference requests to previous landlords and employers. Digital forms, reminders, and result tracking — no more chasing emails.',
                points: [
                    'Automated reference request emails to previous landlords with digital forms',
                    'Employer verification with income confirmation and contract type',
                    'Configurable reference requirements per property type or tenant category',
                    'Automated follow-up reminders for unresponsive referees',
                    'Reference scoring and red-flag detection (late payments, damage, complaints)',
                    'Self-employed and freelancer income verification via bank statement analysis'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Guarantor Screening & Management',
                description: 'Purpose-built for student housing and international tenants. Verify guarantors, track obligations, and manage the full guarantor lifecycle.',
                points: [
                    'Guarantor application portal with identity and financial verification',
                    'Credit scoring for guarantors with minimum threshold enforcement',
                    'Digital guarantor agreements with e-signature integration',
                    'Multi-guarantor support for shared tenancies and per-bed guarantees',
                    'Guarantor notification system for payment defaults or lease breaches',
                    'International guarantor support with multi-currency income verification'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Screening Analytics & Decision Engine',
                description: 'Configurable decision rules, risk scoring, and analytics dashboards. Automate approve/decline/review decisions based on your criteria.',
                points: [
                    'Configurable scoring matrix: weight credit, references, income, and ID differently',
                    'Auto-approve, auto-decline, or escalate-to-review based on composite score',
                    'Screening funnel analytics: pass rates, failure reasons, processing times',
                    'Fair housing compliance monitoring to prevent discriminatory patterns',
                    'Batch screening for bulk intake (student housing academic year onboarding)',
                    'API access for custom screening integrations and third-party providers'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Screen Smarter. Onboard Faster.",
            description: 'See how automated screening reduces onboarding time from days to minutes while improving compliance.',
        },
        stats: [
            { value: '2min', label: 'Average screening completion time' },
            { value: '98%', label: 'Fraud detection accuracy' },
            { value: '85%', label: 'Reduction in manual screening work' },
            { value: '100%', label: 'Audit trail compliance' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We used to spend 2-3 days screening each applicant. Now it's done in minutes. The AI catches things we'd never spot manually. Our bad debt dropped 60% in the first quarter.",
                    "name": "Operations Manager",
                    "role": "UK Student Housing Operator, 2,400 beds"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Which screening providers do you integrate with?',
                    answer: "We integrate with Experian, Equifax, TransUnion, and Onfido for credit checks and ID verification. We also support Open Banking for income verification and Home Office share codes for right-to-rent.",
                },
                {
                    question: 'How fast is the screening process?',
                    answer: 'Most screenings complete in under 2 minutes. Credit checks and ID verification are instant. References depend on referee response time, but automated reminders keep things moving.',
                },
                {
                    question: 'Is screening data GDPR compliant?',
                    answer: 'Yes. All screening data is processed and stored in compliance with GDPR. Retention policies are configurable, and data is automatically purged after the defined period.',
                },
                {
                    question: 'Can we customize screening criteria per property?',
                    answer: 'Absolutely. You can set different credit thresholds, reference requirements, and ID verification levels for different property types, locations, or tenant categories.',
                },
                {
                    question: 'Does it work for international tenants?',
                    answer: 'Yes. ID verification covers 195+ countries. For international tenants without UK credit history, the system supports alternative verification via bank statements, employer letters, and guarantor screening.',
                }
            ],
        },
        readybuild: {
            title: 'Ready to Automate Tenant Screening?',
            description: "Book a demo and see how automated screening, ID verification, and compliance checks work in your pipeline.",
        },
    },
    'owner-investor-portal': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: '',

            title: 'Owner & Investor Portal',
            description:
                "Give property owners and investors real-time visibility into their assets — financial performance, occupancy, maintenance, and distribution reports in a dedicated branded portal.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Owners Are Demanding More Transparency",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Monthly Email Reports', desc: "Owners get a PDF once a month and have no idea what's happening between reports. They call. You explain. Repeat."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Spreadsheet Statements', desc: 'Owner statements manually compiled in Excel. Error-prone, time-consuming, and never consistent across properties.'
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Trust Deficit', desc: "Without real-time visibility, owners lose confidence. They micromanage, question decisions, or worse — move to another operator."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Distribution Delays', desc: "Manual calculation of owner distributions, deductions, and reserves. Late payments erode trust and create friction."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Approval Bottlenecks', desc: "Maintenance above a threshold needs owner approval, but there's no system for it. Emails get lost. Repairs get delayed."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Document Access', desc: "Lease agreements, inspection reports, insurance certificates — owners can't access them without asking you."
                },
            ],
        },
        grid: [
            {
                title: 'Real-Time Financial Dashboard',
                description: 'Owners see live revenue, expenses, NOI, and cash flow — broken down by property, unit, or portfolio. No more waiting for monthly reports.',
                points: [
                    'Live revenue tracking with gross rent, ancillary income, and vacancy loss',
                    'Expense breakdown by category: maintenance, utilities, insurance, management fees',
                    'Net Operating Income (NOI) calculation with trend visualization',
                    'Cash flow forecasting based on lease terms, renewals, and vacancy projections',
                    'Multi-property portfolio view with drill-down to individual units',
                    'Customizable date ranges, comparison periods, and export to PDF/Excel'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Automated Owner Statements & Distributions',
                description: 'Generate owner statements automatically. Calculate management fees, reserve contributions, and net distributions. Send on schedule with one click.',
                points: [
                    'Automated monthly/quarterly owner statement generation',
                    'Configurable management fee calculation (% of rent, fixed, or hybrid)',
                    'Reserve fund tracking and contribution management',
                    'Net distribution calculation with automatic deductions and adjustments',
                    'Multi-currency support for international property portfolios',
                    'Statement history with full audit trail and download access'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Occupancy & Lease Performance',
                description: 'Real-time occupancy rates, lease expiry timelines, renewal rates, and tenant mix — all visible to owners without them having to ask.',
                points: [
                    'Live occupancy rate by property, floor, and room type',
                    'Lease expiry calendar with renewal probability predictions',
                    'Tenant mix analysis: stay duration, demographic, and lease type breakdown',
                    'Void period tracking and days-to-fill metrics',
                    'Rent roll with current rates, market comparisons, and growth trends',
                    'Automated occupancy alerts when rates fall below configurable thresholds'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Maintenance Approvals & Transparency',
                description: 'Owners approve maintenance above thresholds directly in the portal. Full visibility into work orders, costs, and contractor performance.',
                points: [
                    'Configurable approval thresholds per owner or property (e.g., approve above £500)',
                    'In-portal approval workflow with push notifications and email alerts',
                    'Full maintenance history with costs, photos, contractor details, and timelines',
                    'Emergency override for urgent repairs with post-approval documentation',
                    'Contractor performance scoring visible to owners',
                    'Annual maintenance budget vs. actual spend tracking'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Document Vault & Compliance',
                description: 'All property documents — leases, certificates, insurance, inspection reports — accessible to owners in a secure document vault.',
                points: [
                    'Categorized document library: leases, certificates, insurance, inspections',
                    'Automatic document sharing when new certificates or reports are uploaded',
                    'Compliance status dashboard showing certificate validity and expiry dates',
                    'Digital copies of tenant leases (redacted as needed) available on demand',
                    'Photo galleries from inspections and turnarounds',
                    'Secure access controls — owners see only their properties'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Investor Reporting & Tax Packs',
                description: 'Institutional-grade reporting for investor relations. Quarterly reports, tax packs, and performance summaries — generated automatically.',
                points: [
                    'Quarterly investor report generation with customizable templates',
                    'Year-end tax pack preparation with income, expenses, and depreciation',
                    'IRR, cash-on-cash return, and cap rate calculations',
                    'Benchmark comparisons against market data and portfolio averages',
                    'White-labeled reports with investor branding',
                    'Bulk report generation for multi-investor portfolios'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Give Owners the Transparency They Demand",
            description: 'See how the owner portal eliminates monthly report chaos and builds trust through real-time visibility.',
        },
        stats: [
            { value: 'Real-Time', label: 'Financial visibility for owners' },
            { value: '90%', label: 'Reduction in owner enquiry calls' },
            { value: '3min', label: 'Statement generation time' },
            { value: '100%', label: 'Document accessibility' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "Our owner satisfaction scores jumped from 6.2 to 9.1 after launching the portal. They stopped calling us for updates because everything they need is right there. It's saved us 15 hours per week.",
                    "name": "Portfolio Director",
                    "role": "UK BTR Operator, 450 units across 6 properties"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Can owners see individual tenant details?',
                    answer: "You control what owners see. Typically, owners see financial summaries and occupancy data but not individual tenant personal information. Lease summaries can be shown with configurable redaction.",
                },
                {
                    question: 'How are owner distributions calculated?',
                    answer: 'Distributions are calculated automatically based on rent collected, management fees, maintenance costs, and reserve contributions. You configure the formula per owner agreement.',
                },
                {
                    question: 'Do you support multiple owners per property?',
                    answer: 'Yes. JumboTiger supports fractional ownership, joint ventures, and multi-investor structures. Each owner sees only their share of financials and distributions.',
                },
                {
                    question: 'Can owners approve maintenance from their phone?',
                    answer: 'Yes. The owner portal is fully responsive. Maintenance approvals, document access, and financial dashboards work on any device.',
                },
            ],
        },
        readybuild: {
            title: 'Ready to Transform Owner Relations?',
            description: "Book a demo and see how the owner portal delivers real-time transparency that builds trust and saves you hours every week.",
        },
    },
    'reporting-analytics': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: '',

            title: 'Reporting & Analytics',
            description:
                "Real-time dashboards, custom reports, automated distribution, and BI tool integrations — so you make decisions based on data, not gut feeling.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "You Can't Manage What You Can't Measure",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Spreadsheet Reports', desc: "Hours spent pulling data from 5 different systems into a spreadsheet that's outdated by the time it's finished."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Days of Delays', desc: "Monthly reports mean you're always looking backward. By the time you spot a problem, it's already cost you money."
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Portfolio View', desc: "You can see one property at a time, but not the whole picture. Cross-property comparisons require manual calculation."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Hidden Trends', desc: "Occupancy dipping on Floor 3? Maintenance costs rising at Property B? Without proper analytics, patterns stay hidden."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Different Reports for Different People', desc: "Owners want financials. Ops wants maintenance KPIs. Finance wants rent collection. Everyone needs a different view."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Predictive Insight', desc: "You know what happened last month. You don't know what's going to happen next month. Reactive management is expensive."
                },
            ],
        },
        grid: [
            {
                title: 'Real-Time KPI Dashboards',
                description: 'Live dashboards showing occupancy, revenue, maintenance, resident satisfaction, and operational KPIs — updated in real-time, not monthly.',
                points: [
                    'Portfolio-wide dashboard with drill-down to property, floor, and unit level',
                    'Occupancy rate, ADR, RevPAR, and void period tracking in real-time',
                    'Rent collection rate with arrears aging and payment trend analysis',
                    'Maintenance SLA compliance, open tickets, and cost-per-unit metrics',
                    'Resident NPS, churn rate, and renewal probability scoring',
                    'Fully customizable — drag and drop widgets, save views per role'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Custom Report Builder',
                description: 'Build any report without SQL or technical skills. Drag-and-drop fields, apply filters, schedule delivery, and save templates for reuse.',
                points: [
                    'Visual report builder with drag-and-drop field selection',
                    'Filter by property, date range, tenant type, lease status, or any custom field',
                    'Group, sort, and aggregate data with pivot-table-style controls',
                    'Scheduled report delivery via email (daily, weekly, monthly) to any stakeholder',
                    'Export to PDF, Excel, CSV, or Google Sheets',
                    'Report template library with 50+ pre-built templates for common use cases'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Financial Reporting & P&L',
                description: 'Automated profit and loss statements, budget vs. actual tracking, and financial summaries — broken down by property, portfolio, or entity.',
                points: [
                    'Automated P&L generation by property, portfolio, or legal entity',
                    'Budget vs. actual variance tracking with alert thresholds',
                    'Revenue breakdown: rent, ancillary, parking, facilities, penalties',
                    'Expense categorization with vendor and category drill-down',
                    'Cash flow statements with receivables and payables aging',
                    'Year-over-year and month-over-month comparison views'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Operational Analytics',
                description: 'Deep analytics for housekeeping, maintenance, leasing, and resident experience. Spot trends, optimize processes, and reduce costs.',
                points: [
                    'Maintenance analytics: cost per unit, resolution time, repeat issue detection',
                    'Housekeeping efficiency: clean time per room, quality scores, staff productivity',
                    'Leasing funnel analytics: lead sources, conversion rates, time-to-fill',
                    'Resident satisfaction trends: NPS over time, complaint categories, response times',
                    'Facility usage analytics: booking rates, peak hours, revenue per space',
                    'Energy and utility consumption trends with anomaly detection'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'BI Tool Integrations',
                description: 'Connect to Tableau, Power BI, Google BigQuery, and Data Studio. Push data to your enterprise analytics stack for advanced analysis.',
                points: [
                    'Native Tableau and Power BI connectors with pre-built data models',
                    'Google BigQuery and Data Studio integration for cloud analytics',
                    'Snowflake and Redshift data warehouse connectors for enterprise clients',
                    'Real-time data API for custom dashboards and third-party analytics tools',
                    'Scheduled data exports to SFTP, S3, or cloud storage',
                    'Data dictionary and documentation for self-service analytics'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Automated Alerts & Benchmarking',
                description: 'Set threshold alerts for any KPI. Get notified when occupancy drops, arrears rise, or maintenance costs spike. Benchmark against your own portfolio.',
                points: [
                    'Configurable alerts on any metric: occupancy, arrears, maintenance costs, NPS',
                    'Multi-channel alerts: email, SMS, in-app notification, Slack/Teams webhook',
                    'Internal benchmarking: compare properties against portfolio averages',
                    'Trend detection: automatic flagging of deteriorating metrics over time',
                    'Goal setting with progress tracking and achievement notifications',
                    'Weekly/monthly digest emails summarizing key metrics and changes'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Stop Guessing. Start Knowing.",
            description: 'See how real-time dashboards and automated reporting transform property management decision-making.',
        },
        stats: [
            { value: 'Real-Time', label: 'Dashboard updates across all KPIs' },
            { value: '50+', label: 'Pre-built report templates' },
            { value: '90%', label: 'Less time spent building reports' },
            { value: '0', label: 'SQL skills required' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "We went from spending 2 days building monthly reports to having everything live in real-time. The board gets a dashboard link now, not a 40-page PDF. It's changed how we make decisions.",
                    "name": "CFO",
                    "role": "European Flex Living Operator, 1,200 units"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Do I need SQL or technical skills?',
                    answer: "No. The report builder is drag-and-drop. Pre-built templates cover 90% of use cases. For advanced users, there's also a raw data API.",
                },
                {
                    question: 'How real-time is the data?',
                    answer: 'Dashboard data updates in real-time. Most metrics refresh within seconds of the underlying data changing.',
                },
                {
                    question: 'Can different team members see different dashboards?',
                    answer: 'Yes. Dashboards are fully role-based. Operations sees maintenance KPIs, finance sees revenue metrics, and owners see portfolio summaries.',
                },
                {
                    question: 'Which BI tools do you integrate with?',
                    answer: 'Tableau, Power BI, Google BigQuery, Google Data Studio, Snowflake, and Redshift. Plus a REST API for any custom integration.',
                },
                {
                    question: 'Can I schedule reports to be sent automatically',
                    answer: 'Yes. Any report can be scheduled for daily, weekly, or monthly delivery via email. You can set different schedules for different recipients.',
                }
            ],
        },
        readybuild: {
            title: 'Ready for Data-Driven Property Management?',
            description: "Book a demo and see how real-time analytics and custom reporting transform your operations.",
        },
    },
    'staff-workforce': {
        banner: {
            cardImage: 'images/booking-card.svg',
            cardDiscription: '',

            title: 'Staff & Workforce Management',
            description:
                "Schedule shifts, assign tasks, track performance, and manage your entire operations team — from housekeepers to property managers — in one platform.",
        },
        challenge: {
            heading: 'CHALLENGE',
            subtitle: "Your Team Deserves Better Than WhatsApp Groups",
            items: [
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'WhatsApp Coordination', desc: "Task assignments, shift swaps, and updates happen in chaotic group chats. Nothing is trackable. Nothing is accountable."
                },
                {
                    icon: {
                        name: 'clock',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Manual Scheduling', desc: "Shift rotas built in spreadsheets. No visibility into availability, overtime, or coverage gaps until it's too late."
                },
                {
                    icon: {
                        name: 'document',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'No Performance Visibility', desc: "You know who complains and who doesn't. But you don't have data on who's actually performing and who's underperforming."
                },
                {
                    icon: {
                        name: 'eyeOff',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Overtime Surprises', desc: "Hours aren't tracked properly. Overtime claims come at month-end with no way to verify them against actual work done."
                },
                {
                    icon: {
                        name: 'grid',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Onboarding Chaos', desc: "New staff have no structured onboarding. They learn by shadowing, which means inconsistent training across properties."
                },
                {
                    icon: {
                        name: 'result',
                        props: {
                            sizeClass: 'size-16',
                        },
                    },
                    title: 'Multi-Site Blind Spots', desc: "Staff across multiple properties, but no central view. Who's working where today? Who's available for tomorrow's emergency?"
                },
            ],
        },
        grid: [
            {
                title: 'Shift Scheduling & Rota Management',
                description: 'Visual shift planner with drag-and-drop scheduling, availability management, and automatic conflict detection. Publish rotas instantly to the staff app.',
                points: [
                    'Drag-and-drop shift scheduler with weekly, bi-weekly, and monthly views',
                    'Staff availability and preference management with time-off requests',
                    'Automatic conflict detection: double-bookings, overtime, and rest period violations',
                    'Shift templates for recurring patterns (e.g., housekeeping 3-shift rotation)',
                    'Multi-property scheduling with cross-site staff allocation',
                    'Push notification rota publishing with read-receipt confirmation'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Task Assignment & Tracking',
                description: 'Assign tasks to individuals or teams, set priorities and deadlines, and track completion in real-time. Integrated with maintenance, housekeeping, and operations.',
                points: [
                    'Task creation with priority levels, deadlines, and property/unit assignment',
                    'Bulk task generation from templates (e.g., turnover checklist, monthly inspections)',
                    'Real-time task status tracking: assigned, in-progress, completed, overdue',
                    'Photo and note attachments for task completion verification',
                    'Automatic task routing based on skills, location, and availability',
                    'Integration with maintenance work orders and housekeeping schedules'
                ],
                image: '/images/module-banner.webp',
            },
            {
                title: 'Mobile Staff App',
                description: 'A dedicated mobile app for field staff. View shifts, accept tasks, clock in/out, report issues, and communicate — all from their phone.',
                points: [
                    'Shift view with daily schedule, property details, and navigation',
                    'One-tap clock in/out with GPS verification and photo timestamping',
                    'Task list with priority sorting, instructions, and completion forms',
                    'Issue reporting with photo capture and escalation to management',
                    'In-app messaging with managers and team members',
                    'Offline mode for areas with poor connectivity (syncs when back online)'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Time Tracking & Payroll Integration',
                description: 'Accurate time tracking with GPS-verified clock in/out. Automated timesheet generation and payroll system integration.',
                points: [
                    'GPS-verified clock in/out to prevent buddy punching and time theft',
                    'Automated timesheet generation from shift and clock data',
                    'Overtime calculation with configurable rules (daily, weekly, monthly caps)',
                    'Break tracking and working time directive compliance',
                    'Integration with payroll providers: Xero, QuickBooks, Sage, ADP',
                    'Manager approval workflow for timesheets before payroll submission'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Performance Management & KPIs',
                description: 'Track individual and team performance against KPIs. Quality scores, task completion rates, response times, and resident feedback — all in one view.',
                points: [
                    'Individual performance dashboards with task completion rates and quality scores',
                    'Team leaderboards for healthy competition and recognition',
                    'Housekeeping quality scores linked to inspection results',
                    'Maintenance response time and first-fix rate per technician',
                    'Resident feedback attribution to specific staff members',
                    'Performance trend analysis for training and development planning'
                ],
                image: '/images/buildscale.webp',
            },
            {
                title: 'Training & Onboarding',
                description: 'Structured onboarding checklists, training modules, and certification tracking. Ensure every staff member is properly trained before they start work.',
                points: [
                    'Role-specific onboarding checklists with task assignments and deadlines',
                    'Training module library with completion tracking and quiz assessments',
                    'Certification tracking: first aid, fire safety, H&S, food hygiene',
                    'Automated re-certification reminders before expiry dates',
                    'Document signing for policies, NDAs, and employment contracts',
                    'New hire progress dashboard for managers'
                ],
                image: '/images/buildscale.webp',
            },
        ],
        automate: {
            title: "Empower Your Team With Better Tools",
            description: 'See how shift scheduling, task management, and performance tracking transform your operations team.',
        },
        stats: [
            { value: '35%', label: 'Reduction in scheduling time' },
            { value: '98%', label: 'Task completion visibility' },
            { value: '24/7', label: 'Mobile access for field staff' },
            { value: '100%', label: 'Timesheet accuracy with GPS' },
        ],
        clientWords: {
            "testimonials": [
                {
                    "quote": "Before JumboTiger, we had 3 WhatsApp groups, 2 spreadsheets, and a paper rota on the wall. Now everything is in one app. My team actually knows what they're doing each day, and I can see it all from my dashboard.",
                    "name": "Operations Manager",
                    "role": "London Coliving Operator, 4 properties, 35 staff"
                }
            ]
        },
        faq: {
            heading: 'FAQ',
            subtitle: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Does the staff app work offline?',
                    answer: "Yes. Staff can view their shift schedule and task list offline. Completed tasks sync automatically when connectivity is restored.",
                },
                {
                    question: 'How does GPS clock-in work?',
                    answer: 'Staff must be within a configurable radius of the property to clock in. GPS coordinates are recorded with each clock event to prevent time fraud.',
                },
                {
                    question: 'Can staff swap shifts with each other?',
                    answer: 'Yes. Staff can request shift swaps in the app. Swaps require manager approval to ensure coverage and compliance with working time rules.',
                },
                {
                    question: 'Does it integrate with our payroll system?',
                    answer: 'Yes. Approved timesheets export to Xero, QuickBooks, Sage, ADP, and other payroll providers. Custom CSV exports are also available.',
                },
                {
                    question: 'How many staff can be managed?',
                    answer: 'No limit. The system scales from small teams (5-10) to large multi-site operations (500+) with role-based access controls.',
                }
            ],
        },
        readybuild: {
            title: 'Ready to Modernize Your Workforce Management?',
            description: "Book a demo and see how shift scheduling, task tracking, and performance management work together.",
        },
    },
}
