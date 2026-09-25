export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  simpleSubtitle?: string;
  moduleGroup?: 'rentals' | 'repairs' | 'deployments' | 'emergency' | 'sales';
  description: string;
  technologies: string[];
  deliverables: string[];
  slaNote?: string;
  iconName: string;
  badge?: string;
  actionLabel?: string;
  actionType?: 'quote' | 'calibration' | 'call' | 'catalog';
}

export interface EquipmentItem {
  id: string;
  brand: 'UCL Swift' | 'EXFO' | 'VIAVI' | 'Raviga Infrastructure';
  model: string;
  category: 'Fusion Splicer' | 'OTDR' | 'Optical Tester' | 'Analyzer' | 'Cleaver & Accessories' | 'Cabling & Hardware';
  title: string;
  description: string;
  features: string[];
  applications: string[];
  isExclusiveDistributor?: boolean;
  servicesAvailable: ('Sales' | 'Repairs' | 'Calibration' | 'Spare Parts')[];
  specs?: Record<string, string>;
  imageTag: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  fullName: string;
  subTitle?: string;
  category: 'Client' | 'Technology Partner';
  badge?: string;
  worksDone: string[];
  ongoingWorks?: string[];
  highlight: string;
}

export interface ManagementNode {
  id: string;
  title: string;
  subtitle?: string;
  count?: number;
  department: 'executive' | 'operations' | 'field' | 'admin';
  description: string;
  children?: ManagementNode[];
}

export interface QuoteEstimation {
  serviceType: string;
  scopeSize: string;
  equipmentCount: number;
  urgency: 'standard' | 'priority' | 'emergency_24_7';
  estimatedTurnaround: string;
  estimatedTier: string;
}
