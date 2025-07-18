export interface Product {
  id: string;
  name: string;
  price: number;
  urgentPrice: number;
  category: string;
  description: string;
  image: string;
  stock: number;
  company?: string;
  sku?: string;
  weight?: number;
  location?: string;
  leadTime?: number;
  suppliers?: string;
  storageConditions?: string;
}

export interface Cart {
  [productId: string]: number
}

export interface Order {
  id: string
  userId: string
  products: OrderProduct[]
  deliveryType: 'normal' | 'urgent'
  totalPrice: number
  customerInfo: CustomerInfo
  status: OrderStatus
  orderDate: string
  estimatedDelivery: string
  trackingNumber: string
  updatedAt?: string
  trackingInfo?: TrackingInfo[]
}

export interface OrderProduct {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface TrackingInfo {
  status: string
  message: string
  timestamp: string
  location?: string
}

export interface Alert {
  id: string;
  type: 'payment' | 'dispatch' | 'stock' | 'production' | 'route';
  message: string;
  timestamp: string;
  reason?: string;
  contactInfo?: {
    name: string;
    email: string;
    phone: string;
  };
}
export interface InventoryItem {
  _id: string;
  category: string;
  Product_Name: string;
  Quantity_in_stock: number;
  Unit_Cost: number;
  Total_inventory_value: number;
  reorder_point: number;
}

export interface ActiveOrderProduct {
  productId: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  stock: number;
  company?: string;
  sku?: string;
  weight?: number;
  storageConditions?: string;
  quantity: number;
}

export interface ActiveOrder {
  _id: string;
  orderId: string;
  date: string;
  time: string;
  transaction_id: string;
  customer_id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  sub_total: number;
  products: ActiveOrderProduct[];
  total_amount: number;
  status: 'pending' | 'packed' | 'out_for_delivery' | 'delivered';
  vehicleAssignment?: VehicleAssignment;
  customer_info?: {
    name: string;
    email: string;
    phone: string;
    address: {
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
}

export interface PastOrder {
  _id: string;
  Date: string;
  Time: string;
  Store_ID: string;
  Transaction_ID: string;
  Customer_ID: string;
  Customer_Type: string;
  Category: string;
  Product_Name: string;
  Quantity: number;
  Unit_Cost: number;
  Unit_Price: number;
  Discount_Rate: number;
  Discount_Amount: number;
  Subtotal: number;
  Tax_Amount: number;
  Total_Amount: number;
  Gross_Profit: number;
  Profit_Margin_Percent: number;
  Payment_Method: string;
  Day_of_Week: string;
  Month: string;
  Hour_of_Day: number;
  Transaction_Total: number;
  Items_Per_Transaction: number;
  status: 'fulfilled' | 'delivered';
}

export interface ForecastingData {
  productName: string;
  currentStock: number;
  averageDailySales: number;
  predictedDemand: number;
  confidence: number;
  recommendations: string[];
  category: string;
  seasonalTrend: 'increasing' | 'decreasing' | 'stable';
  stockoutRisk: 'low' | 'medium' | 'high';
  suggestedOrderQuantity: number;
  predictedRevenue: number;
  factors: {
    salesTrend: number;
    socialMediaTrend: number;
    climaticFactor: number;
    areaFactor: number;
    seasonalityFactor: number;
    competitionFactor: number;
  };
}

export interface ForecastingMetrics {
  totalProducts: number;
  highRiskProducts: number;
  predictedRevenue: number;
  stockoutRisk: number;
  averageConfidence: number;
  topGrowthProducts: string[];
  topRiskProducts: string[];
}

export interface ProductRecommendation {
  productName: string;
  reason: string;
  potentialRevenue: number;
  category: string;
  priority: 'high' | 'medium' | 'low';
  marketTrend: number;
  demandScore: number;
}

export interface ClimateData {
  temperature: number;
  humidity: number;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  weatherCondition: string;
  impact: number;
}

export interface SocialMediaTrend {
  product: string;
  mentions: number;
  sentiment: number;
  trendingScore: number;
  platform: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'drone' | 'robot' | 'vehicle';
  status: 'active' | 'idle' | 'maintenance' | 'charging';
  battery?: number;
  location: string;
  currentDelivery?: string;
  deliveriesCompleted: number;
  lastMaintenance: string;
  capacity?: number;
  currentLoad?: number;
}

export interface VehicleAssignment {
  orderId: string;
  vehicleId: string;
  vehicleName: string;
  vehicleType: 'drone' | 'robot' | 'vehicle';
  assignedAt: string;
  estimatedDeliveryTime?: string;
  status: 'assigned' | 'in_transit' | 'delivered' | 'failed';
}

export interface OrderForAssignment {
  orderId: string;
  customerLocation: string;
  priority: 'normal' | 'urgent';
  weight?: number;
  estimatedDistance?: number;
  deliveryType?: 'same_day' | 'next_day' | 'standard';
}