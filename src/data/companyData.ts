import { ServiceItem, EquipmentItem, ClientPartner, ManagementNode } from '../types';

export const COMPANY_DETAILS = {
  name: 'Raviga Engineering Limited',
  shortName: 'Raviga Engineering',
  foundedDate: 'August 31, 2020',
  headquarters: 'Accra, Ghana',
  operatingRegions: ['Greater Accra', 'Ashanti Region (Kumasi)', 'Western Region (Takoradi)', 'Eastern Region', 'Northern Corridors'],
  email: 'info@ravigaengineering.com',
  opsEmail: 'operations@ravigaengineering.com',
  supportEmail: 'service@ravigaengineering.com',
  phone: '+233 24 676 2220',
  emergencyHotline: '+233 24 676 2220',
  whatsapp: '+233 24 676 2220',
  address: 'Plot 14, Telecom Industrial Zone, Spintex Road, Accra, Ghana',
  mission: 'To deliver high-quality, safe, cost efficient telecom solutions and services by employing innovative solutions and optimum project strategies.',
  vision: 'Vision (2030): To Become the preferred partner for solving multifaceted fiber optic network issues for Telecom giants in Ghana.',
  goal: 'To Maintain the Lead as the most dynamic, high quality and competitive service provider in the telecom market.',
  values: [
    { title: 'Professionalism', description: 'Certified engineers adhering to international FOA and ITU-T standards on every field deployment.' },
    { title: 'Quality Delivery', description: 'Zero-compromise optical splicing loss thresholds and precision-calibrated test execution.' },
    { title: 'Innovation', description: 'Deploying advanced AirPon, GPON micro-architectures and swift core-alignment splicing technologies.' },
    { title: 'Integrity', description: 'Honest, verifiable optical test certificates, OTDR traces, and transparent client reporting.' },
    { title: 'Customer-Centric Approach', description: 'Tailored SLA response times with 3 dedicated rapid-response field maintenance teams.' },
    { title: 'Transparency', description: 'Clear project milestones, uncompromised safety audits, and real-time operational status updates.' },
  ],
  ehsPolicy: {
    commitment: 'Raviga Engineering Limited is unwaveringly committed to protecting the environment and ensuring the absolute health and safety of our workforce, subcontractors, and host communities.',
    practices: [
      {
        id: 'secure-env',
        title: 'Secure Work Environments & Employee Awareness',
        description: 'Comprehensive risk assessments before all OSP and tower activities. Continuous provision of certified personal protective equipment (PPE) and strict adherence to OSHA and local safety codes.',
        icon: 'ShieldCheck'
      },
      {
        id: 'cyber-security',
        title: 'Cybersecurity Compliance & Data Governance',
        description: 'Strict adherence to national and telecom enterprise cybersecurity protocols to protect network asset data, OTDR traces, and customer topology schematics against unauthorized access.',
        icon: 'Lock'
      },
      {
        id: 'paperless-tech',
        title: 'Paper Reduction Through E-Technology',
        description: 'Digitized field job dispatch, electronic work orders, mobile optical test logging, and paperless quality audits to minimize ecological footprint and drive green efficiency.',
        icon: 'FileSpreadsheet'
      },
      {
        id: 'biannual-reviews',
        title: 'Bi-Annual Policy Reviews & Continual Improvement',
        description: 'Formal bi-annual reviews by our dedicated EHS/Quality Officer to incorporate emerging environmental regulations, incident-free protocols, and evolving telecom industry best practices.',
        icon: 'RefreshCw'
      }
    ]
  },
  stats: [
    { label: 'Founded in Ghana', value: 'Aug 31, 2020', sub: 'Over 5 Years of Field Excellence' },
    { label: 'Field Maintenance Force', value: '12 Engineers', sub: '3 Dedicated 24/7 Response Teams' },
    { label: 'UCL Swift In Ghana', value: 'Sole Distributor', sub: 'Exclusive Splicer Distribution' },
    { label: 'Splicing & Test Devices', value: '100% Certified', sub: 'EXFO & VIAVI Authorized Lab' },
    { label: 'Network SLA Target', value: '99.9% Uptime', sub: 'Sub-4hr Emergency Response MTTR' },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'rent-equipment-fleet',
    title: 'Rent Vehicles & Telecom Equipment',
    tagline: 'Flexible Daily, Weekly, or Monthly Project Rentals',
    simpleSubtitle: 'Rent 4x4 telecom utility trucks, mobile splicing labs & fusion splicers',
    moduleGroup: 'rentals',
    description: 'Equipped telecom operations fleet and precision tools available for short or long-term project hire. Includes rugged 4x4 utility vehicles, air-conditioned mobile splicing labs, and calibrated UCL Swift splicers ready for immediate deployment.',
    technologies: ['4x4 Utility Pickups', 'Mobile Splicing Labs', 'UCL Swift Splicers', 'OTDR Testers'],
    deliverables: [
      'Rugged 4x4 utility pickups fitted with ladder racks & onboard power inverters',
      'Mobile dust-controlled fiber splicing trailers with clean-bench & AC',
      'Calibrated fusion splicers & OTDRs available on flexible rental terms',
      'Routine maintenance and mechanical contingency replacement guarantee'
    ],
    slaNote: 'Available for immediate project dispatch across all regions of Ghana.',
    iconName: 'Truck',
    badge: 'Flexible Rentals',
    actionLabel: 'Rent Vehicles / Tools',
    actionType: 'quote'
  },
  {
    id: 'precision-repair',
    title: 'Equipment Repair, Calibration & Servicing',
    tagline: 'Accredited Accra Lab for Splicers, OTDRs & Telecom Fleets',
    simpleSubtitle: 'Official calibration, electrode replacement & vehicle servicing',
    moduleGroup: 'repairs',
    description: 'Ghana’s certified engineering lab for the diagnostic testing, optical realignment, electrode replacement, and official calibration of UCL Swift, EXFO, and VIAVI devices, along with telecom vehicle fleet maintenance.',
    technologies: ['Electrode Spark Calibration', 'Optical Realignment', 'OTDR Calibration', 'Vehicle Fleet Servicing'],
    deliverables: [
      'Official calibration certificates recognized by leading telecom telcos',
      'Electrode replacement, optical V-groove cleaning & camera realignment',
      'Micro-cleaver blade sharpening with genuine manufacturer parts in Accra',
      'Telecom fleet vehicle maintenance, electrical diagnostics & preventive care'
    ],
    slaNote: 'Certified service engineers trained directly by equipment OEMs.',
    iconName: 'Wrench',
    badge: 'Accredited Accra Lab',
    actionLabel: 'Book Repair / Calibration',
    actionType: 'calibration'
  },
  {
    id: 'osp-implementation',
    title: 'Fiber Network Construction & Deployments',
    tagline: 'Turnkey OSP Engineering: FTTx, FTTH, GPON & Micro-Trenching',
    simpleSubtitle: 'Civil trenching, ducting & aerial fiber installations across Ghana',
    moduleGroup: 'deployments',
    description: 'Complete Outside Plant (OSP) fiber network design and construction. From civil trenching, duct laying, and aerial strand stringing to customer terminal installations and final acceptance testing.',
    technologies: ['FTTX / FTTH Rollout', 'GPON & AirPon', 'Micro-Trenching & HDD', 'Aerial ADSS Fiber'],
    deliverables: [
      'Turnkey civil trenching, manhole construction & HDPE subduct installation',
      'Aerial strand and figure-8 / ADSS fiber line deployment',
      'Optical Distribution Frame (ODF) & Cabinet termination',
      'Full As-Built documentation with GIS coordinates & splice matrix'
    ],
    slaNote: 'Conforming strictly to international fiber optic standards.',
    iconName: 'Network',
    badge: 'Turnkey Infrastructure',
    actionLabel: 'Request Build Quote',
    actionType: 'quote'
  },
  {
    id: 'field-maintenance',
    title: '24/7 Emergency Repairs & Cut Restoration',
    tagline: 'Guaranteed Sub-4 Hour Fiber Outage Response Across Ghana',
    simpleSubtitle: 'Rapid 24/7 response squads ready for accidental cuts & outages',
    moduleGroup: 'emergency',
    description: 'Round-the-clock emergency field dispatch. When fiber cuts or network failures strike, our rapid-response squads deploy in under 45 minutes to restore critical links with minimum downtime.',
    technologies: ['24/7 Rapid Dispatch', 'OTDR Fault Pinpointing', 'Core Fusion Splicing', 'Live Link Restoration'],
    deliverables: [
      'Guaranteed Sub-4 Hour MTTR (Mean Time to Repair) response',
      '3 Dedicated full-time field maintenance squads (12 engineers)',
      'Emergency splice enclosure re-entry and cable replacements',
      'Comprehensive before/after OTDR trace diagnostic certification'
    ],
    slaNote: '24/7/365 On-Call Emergency SLA with mobile lab mobilization under 45 minutes.',
    iconName: 'Activity',
    badge: '24/7 Emergency SLA',
    actionLabel: 'Call 24/7 Hotline',
    actionType: 'call'
  },
  {
    id: 'telecom-supplies',
    title: 'Buy Splicers, Cables & Hardware Supplies',
    tagline: 'Official Distributor of UCL Swift Splicers & Fiber Hardware',
    simpleSubtitle: 'Sole distributor in Ghana with hardware in stock in Accra',
    moduleGroup: 'sales',
    description: 'Purchase genuine UCL Swift fusion splicers, precision cleavers, single-mode and multimode fiber cables, splice closures, patch cords, and optical accessories directly from stock in Accra.',
    technologies: ['UCL Swift Splicers', 'Armored Fiber Cables', 'Joint Closures', 'PLC Splitters'],
    deliverables: [
      'Sole Distributor of UCL Swift Core-Alignment Fusion Splicers in Ghana',
      'Armored direct-burial and aerial ADSS fiber optic cables (12F to 288F)',
      'IP68 waterproof outdoor fiber joint closures and termination boxes',
      'Local warehouse stock in Accra for immediate dispatch nationwide'
    ],
    slaNote: 'Stocked in our Accra warehouse for rapid next-day dispatch nationwide.',
    iconName: 'Layers',
    badge: 'In Stock in Accra',
    actionLabel: 'Browse Equipment / Buy',
    actionType: 'catalog'
  }
];

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  // UCL Swift
  {
    id: 'ucl-k11',
    brand: 'UCL Swift',
    model: 'K11 Core Alignment Fusion Splicer',
    category: 'Fusion Splicer',
    title: 'UCL Swift K11 Core Alignment Splicer',
    description: 'State-of-the-art core-to-core alignment fusion splicer built for long-haul backbone networks and ultra-low splice loss requirements.',
    features: [
      'IPAAS Core Alignment Technology for microscopic precision',
      'Lightning-fast 6 second splicing & 13 second heating time',
      'Shock, dust, and water resistant industrial exterior',
      'High capacity lithium polymer battery with 300+ splice/heat cycles'
    ],
    applications: ['Long Haul Telecom Backbone', 'Metro Core Networks', 'Subsea Cable Landing Interconnects'],
    isExclusiveDistributor: true,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration', 'Spare Parts'],
    specs: {
      'Alignment Method': 'Core Alignment (IPAAS)',
      'Average Loss': 'SM: 0.02dB, MM: 0.01dB',
      'Splice Time': '6 seconds (Quick Mode)',
      'Display': '5.0-inch color high-resolution LCD touchscreen',
      'Warranty': '3-Year Manufacturer Warranty + Local Raviga Support'
    },
    imageTag: 'splicer-k11'
  },
  {
    id: 'ucl-k33a',
    brand: 'UCL Swift',
    model: 'K33A Premium Core Alignment (All-In-One)',
    category: 'Fusion Splicer',
    title: 'UCL Swift K33A Premium All-in-One Fusion Splicer',
    description: 'World-renowned All-in-One fusion splicer integrating a motorized thermal stripper, high-precision cleaver, alcohol dispenser, and sleeve oven into a single portable housing.',
    features: [
      'Patented All-In-One design: strip, clean, cleave, splice, and protect in one unit',
      'Motorized auto-thermal stripper prevents fiber micro-scratches',
      'Core alignment with real-time arc calibration',
      'Significantly accelerates FTTH and FTTX drop installations'
    ],
    applications: ['FTTH Drop Deployment', 'Enterprise Data Centers', 'High-Density OSP Closures'],
    isExclusiveDistributor: true,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration', 'Spare Parts'],
    specs: {
      'Integration': 'Thermal Stripper + Auto Cleaver + Alcohol Dispenser + Splicer',
      'Splice Time': '6 seconds',
      'Heat Time': '9-13 seconds (Continuous heating oven)',
      'Blade Life': '75,000 cleaves',
      'Touchscreen': '5.0-inch color capacitive screen'
    },
    imageTag: 'splicer-k33a'
  },
  {
    id: 'ucl-kf4a',
    brand: 'UCL Swift',
    model: 'KF4A Active V-Groove Fusion Splicer',
    category: 'Fusion Splicer',
    title: 'UCL Swift KF4A Compact Active V-Groove Splicer',
    description: 'Compact, ultra-lightweight active V-groove splicer engineered for urban FTTH drops, aerial bucket operations, and rapid installation scenarios.',
    features: [
      'Ultralight weight (under 1.5kg including battery)',
      'Active V-groove alignment with four motors',
      'Compatible with Splice-On Connectors (SOC)',
      'Integrated auto-stripper and cleaving options'
    ],
    applications: ['FTTH Last Mile', 'Tower Pole Aerial Splicing', 'AirPon Field Closures'],
    isExclusiveDistributor: true,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration', 'Spare Parts'],
    specs: {
      'Weight': '1.45 kg with battery',
      'Splice Time': '7 seconds',
      'Battery Capacity': '200 splice & heat cycles',
      'Drop Resistance': 'Survives 76cm impact drop onto concrete'
    },
    imageTag: 'splicer-kf4a'
  },
  {
    id: 'ucl-soc-cleavers',
    brand: 'UCL Swift',
    model: 'SOC (Splice On Connectors) & Precision Cleavers',
    category: 'Cleaver & Accessories',
    title: 'UCL Swift Precision Cleavers & SOC Connectors',
    description: 'Eliminate failure-prone mechanical field connectors with factory-polished Splice-On Connectors (SC, LC, APC/UPC) and single-action diamond cleavers.',
    features: [
      'Factory polished ferrule for superior return loss (>60dB APC)',
      'Single-action precision angle cleavers (<0.5 degree typical)',
      'Eliminates the need for excess slack management in splice trays',
      'High tensile strength connector crimp'
    ],
    applications: ['FTTH Termination', 'Data Center Patching', 'Premises Distribution'],
    isExclusiveDistributor: true,
    servicesAvailable: ['Sales', 'Spare Parts'],
    specs: {
      'Connector Types': 'SC/UPC, SC/APC, LC/UPC, LC/APC',
      'Cleave Angle': '< 0.5 degrees',
      'Blade Durability': '50,000+ cleaves'
    },
    imageTag: 'cleavers-soc'
  },
  // EXFO
  {
    id: 'exfo-otdr',
    brand: 'EXFO',
    model: 'MaxTester / FTB Series OTDR',
    category: 'OTDR',
    title: 'EXFO Optical Time-Domain Reflectometer (OTDR)',
    description: 'Industry-standard optical reflectometer providing high dynamic range, pinpoint fault location, macrobend detection, and automated iOLM trace interpretation.',
    features: [
      'iOLM (intelligent Optical Link Mapper) automated analysis',
      'Dynamic range up to 45dB for metro and long-haul characterization',
      'Integrated Power Meter and Visual Fault Locator (VFL)',
      'Rugged outdoor touchscreen with sunlight readability'
    ],
    applications: ['Backbone Commissioning', 'OSP Fiber Cut Pinpointing', 'Acceptance Testing (PAT)'],
    isExclusiveDistributor: false,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration', 'Spare Parts'],
    specs: {
      'Wavelengths': '1310 / 1550 / 1625 / 1650 nm (Filtered for live testing)',
      'Event Dead Zone': '0.5 m typical',
      'Attenuation Dead Zone': '2.5 m typical',
      'Calibration': 'Annual Factory Calibration Certificates by Raviga'
    },
    imageTag: 'exfo-otdr'
  },
  {
    id: 'exfo-test-kits',
    brand: 'EXFO',
    model: 'Optical Power Meter (OPM), Laser Source (OLS) & VFL',
    category: 'Optical Tester',
    title: 'EXFO Optical Loss Test Kits & Fault Locators',
    description: 'Precision handheld power meters and stable dual/quad laser sources for optical insertion loss (IL) verification and visible fiber tracing.',
    features: [
      'Broad measurement range (-70 dBm to +26 dBm)',
      'Multi-wavelength recognition for automatic loss calculation',
      'Bright 650nm Red Laser VFL for pinpointing patch cord breaks',
      'Long battery life of up to 300 hours continuous use'
    ],
    applications: ['Tier 1 Certification', 'Daily Field Link Verification', 'Patch Cord Quality Inspection'],
    isExclusiveDistributor: false,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration', 'Spare Parts'],
    specs: {
      'Measurement Range': '-70 dBm to +10 dBm (Standard) or +26 dBm (CATV/High Power)',
      'Accuracy': '±0.18 dB (5%)',
      'Wavelength Calibration': '850, 1300, 1310, 1490, 1550, 1625 nm'
    },
    imageTag: 'exfo-opm'
  },
  {
    id: 'exfo-fiber-id',
    brand: 'EXFO',
    model: 'Site Master & Live Fiber Optical Identifier (LFI)',
    category: 'Analyzer',
    title: 'EXFO Site Master & Live Optical Fiber Identifier',
    description: 'Non-intrusive fiber identifiers that clamp onto coated fibers to detect live traffic signals and modulation tones without interrupting service.',
    features: [
      'Non-destructive macrobend optical detection clamp',
      'Displays traffic presence, modulation tone (270Hz, 1kHz, 2kHz), and power level',
      'Site Master RF & Antenna line sweeper for tower coax/fiber interface testing',
      'Prevents accidental disconnection of active revenue-generating fiber strands'
    ],
    applications: ['Live Fiber Splicing Audits', 'Manhole Circuit Identification', 'Tower Feed Sweeps'],
    isExclusiveDistributor: false,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration'],
    specs: {
      'Fiber Compatibility': '250um, 900um, 2mm, 3mm jackets',
      'Insertion Loss': '< 0.5dB during clamping',
      'Tone Detection': '270 Hz, 1 kHz, 2 kHz'
    },
    imageTag: 'exfo-lfi'
  },
  // VIAVI
  {
    id: 'viavi-otdr',
    brand: 'VIAVI',
    model: 'MTS Series (MTS-2000 / MTS-4000) OTDR',
    category: 'OTDR',
    title: 'VIAVI Solutions Modular OTDR & Smart Link Mapper',
    description: 'High performance modular optical platform with Smart Link Mapper (SLM) for unambiguous icon-based trace diagnostics and rapid qualification.',
    features: [
      'Modular platform supporting OTDR, CWDM/DWDM analyzer, and PON power meter',
      'Smart Link Mapper (SLM) translates complex traces into clear link schematic icons',
      'Cloud connectivity for instant automated report synchronization',
      'Optimized for high-split GPON and XGS-PON splitter testing'
    ],
    applications: ['GPON Splitter Qualification', 'High Density Metro Rings', 'Enterprise Data Links'],
    isExclusiveDistributor: false,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration', 'Spare Parts'],
    specs: {
      'Dynamic Range': '37 dB to 43 dB',
      'Display': '7-inch indoor/outdoor color touch display',
      'PON Testing': 'Up to 1:128 split ratios'
    },
    imageTag: 'viavi-otdr'
  },
  {
    id: 'viavi-meters',
    brand: 'VIAVI',
    model: 'SmartPocket Optical Power Meters & Laser Sources',
    category: 'Optical Tester',
    title: 'VIAVI SmartPocket OLS, OPM & Visual Fault Locators',
    description: 'Pocket-sized optical test instruments offering high measurement accuracy and rugged durability for day-to-day fiber installation crews.',
    features: [
      'Extra-large illuminated LCD display',
      'Universal optical connector interface for all common standards',
      'Rugged rubber boot for protection against field drops',
      'Pre-programmed standard telecommunications wavelengths'
    ],
    applications: ['Field Quality Assurance', 'Contractor Sign-off', 'Maintenance Diagnostics'],
    isExclusiveDistributor: false,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration'],
    specs: {
      'Interface': 'Universal 2.5mm / 1.25mm adapter',
      'Power Range': '-60 to +10 dBm',
      'Battery': 'Standard AA batteries (Over 200 hours)'
    },
    imageTag: 'viavi-opm'
  },
  {
    id: 'viavi-site-master',
    brand: 'VIAVI',
    model: 'OneExpert / Site Master & Cable Antenna Analyzer',
    category: 'Analyzer',
    title: 'VIAVI Site Master & Live Fiber Optical Identifier',
    description: 'Comprehensive cell site and cable line verification, measuring distance-to-fault (DTF), return loss, and live optical fiber verification.',
    features: [
      'Sweeps optical fiber and RF coax feed lines in a single field visit',
      'High accuracy Distance-to-Fault pinpointing',
      'Safe macro-bending live fiber identification',
      'Generates automated PDF reports compliant with operator acceptance criteria'
    ],
    applications: ['Cell Site Commissioning', 'Fiber-to-the-Antenna (FTTA)', 'Tower OSP Audits'],
    isExclusiveDistributor: false,
    servicesAvailable: ['Sales', 'Repairs', 'Calibration'],
    specs: {
      'Frequency & Optical Range': 'Full broadband optical + RF support',
      'Field Testing': 'One-button autotest routines'
    },
    imageTag: 'viavi-sitemaster'
  }
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    id: 'linfra',
    name: 'Linfra Ghana Limited',
    fullName: 'Linfra Ghana Limited (Member of IPT PowerTech Group)',
    subTitle: 'Leading Telecom Infrastructure Provider across Africa & Middle East',
    category: 'Client',
    badge: 'Strategic Client',
    worksDone: [
      'Supply of UCL Swift Splicers and EXFO precision test instruments',
      'Turnkey repairs, electrode servicing, and optical calibration lab support',
      'Supply of high-grade Fiber Optic Cables, Closures & Passive Accessories',
      'Fleet Management and specialized 4x4 engineering utility vehicle rentals'
    ],
    highlight: 'Comprehensive multi-year partnership spanning precision equipment supply, accredited calibration, and specialized fleet rentals.'
  },
  {
    id: 'dds',
    name: 'Dynamic Data Solutions (dds55)',
    fullName: 'Dynamic Data Solutions Limited',
    subTitle: 'Premier Ghanaian Telecommunications & Data Infrastructure Firm',
    category: 'Client',
    badge: 'Ongoing Works',
    worksDone: [
      'OSP Fiber Network Infrastructure Design & Turnkey Implementation',
      'Critical civil trenching, ducting and aerial ADSS deployments'
    ],
    ongoingWorks: [
      '24/7 Fiber Optic Maintenance & SLA Emergency Restoration Services',
      'Continuous OSP Expansion and Metro Link Upgrades'
    ],
    highlight: 'Active ongoing operational contracts delivering emergency restoration and metro OSP design across Ghana.'
  },
  {
    id: 'datacom',
    name: 'Datacom Telecommunications Limited',
    fullName: 'Datacom Telecommunications Limited',
    subTitle: 'Enterprise Telecom Solutions & Communications Network Specialist',
    category: 'Client',
    badge: 'Ongoing Works',
    worksDone: [
      'Turnkey OSP Implementation and Link Commissioning',
      'Deployment of Certified Fiber Optics Specialists for field execution',
      'Fleet Management and Specialized Equipment Rentals'
    ],
    ongoingWorks: [
      'Fiber Optic Maintenance & 24/7 Emergency Break-Fix SLA Services',
      'OSP Design and Network Architecture Expansion'
    ],
    highlight: 'Multi-faceted collaboration encompassing emergency maintenance, large-scale OSP rollout, and deployment of FOA-certified field technicians.'
  }
];

export const MANAGEMENT_ORGANIZATION: ManagementNode = {
  id: 'ceo',
  title: 'Chief Executive Officer (CEO)',
  subtitle: 'Executive Leadership & Strategic Direction',
  department: 'executive',
  description: 'Oversees overall vision, strategic partnerships with global manufacturers (UCL Swift, EXFO, VIAVI), corporate governance, and nationwide growth.',
  children: [
    {
      id: 'hr-officer',
      title: 'HR Officer',
      subtitle: 'Human Resources & Talent Management',
      department: 'admin',
      description: 'Manages human capital, certified engineering credentials, safety onboarding, and staff welfare.'
    },
    {
      id: 'finance-officer',
      title: 'Finance Officer',
      subtitle: 'Fiscal Management & Contract Accounting',
      department: 'admin',
      description: 'Handles capital expenditures, equipment leasing, supplier credit facilities, and project financial controls.'
    },
    {
      id: 'procurement-officer',
      title: 'Procurement Officer',
      subtitle: 'Global Supply Chain & Logistics',
      department: 'admin',
      description: 'Coordinates international import of UCL Swift splicers, EXFO/VIAVI spares, fiber cables, and local warehousing.'
    },
    {
      id: 'operations-manager',
      title: 'Operations Manager',
      subtitle: 'Field Operations & Service Delivery Head',
      department: 'operations',
      description: 'Directs all field operations, technical project execution, SLA performance, service lab throughput, and quality assurance.',
      children: [
        {
          id: 'after-sales-lead',
          title: 'After Sales Service Team Lead',
          subtitle: 'Equipment Lab & Customer Care',
          department: 'operations',
          description: 'Manages the precision repair and calibration laboratory for UCL Swift, EXFO, and VIAVI instruments.',
          children: [
            {
              id: 'service-engineers',
              title: 'Service Engineers (x2)',
              subtitle: 'Precision Lab Technicians',
              count: 2,
              department: 'field',
              description: 'Specialized lab technicians handling electrode spark replacement, optical motor alignment, OTDR recalibration, and hardware diagnostics.'
            }
          ]
        },
        {
          id: 'fiber-ms-coordinator',
          title: 'Fiber MS Project Coordinator',
          subtitle: 'Maintenance Services Lead',
          department: 'operations',
          description: 'Coordinates 24/7 SLA maintenance contracts, dispatching emergency cut-restoration teams and monitoring MTTR metrics.',
          children: [
            {
              id: 'field-maint-engineers',
              title: 'Field Maintenance Engineers (x12 in 3 Teams)',
              subtitle: 'Rapid Response Tactical Units',
              count: 12,
              department: 'field',
              description: '12 dedicated field maintenance engineers organized into 3 tactical squads equipped with emergency mobile labs for 24/7 fault restoration.'
            }
          ]
        },
        {
          id: 'ehs-quality-officer',
          title: 'EHS / Quality Officer',
          subtitle: 'Health, Safety & Standards Compliance',
          department: 'operations',
          description: 'Enforces environmental health and safety policy, PPE compliance, cybersecurity standards, paperless inspections, and bi-annual audits.'
        },
        {
          id: 'fiber-osp-coordinator',
          title: 'Fiber OSP Project Coordinator',
          subtitle: 'Outside Plant Infrastructure Lead',
          department: 'operations',
          description: 'Oversees turnkey FTTX, FTTH, GPON, and AirPon civil builds, trenching, cable blowing, and aerial cable stringing.',
          children: [
            {
              id: 'site-supervisors',
              title: 'Site Supervisors / Engineers (x4)',
              subtitle: 'Civil & Aerial Deployment Leads',
              count: 4,
              department: 'field',
              description: '4 site engineers overseeing civil contractors, HDPE pipe blowing, splicing matrices, and client Provisional Acceptance Testing (PAT).'
            }
          ]
        }
      ]
    }
  ]
};
