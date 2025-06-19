// User types
export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  userType: 'teacher' | 'guardian' | 'student' | 'house_owner' | 'general_buyer';
  isTeacher: boolean;
  isGuardian: boolean;
  location: {
    division: string;
    district: string;
    upazila?: string;
    address?: string;
    coordinates?: [number, number];
  };
  teacherProfile?: {
    education: Education[];
    specializations: string[];
    preferredClasses: string[];
    coverageAreas: string[];
    salaryRange: {
      min: number;
      max: number;
    };
    experience: number;
    teachingType: 'home_tuition' | 'online' | 'both';
    availableTime: string[];
    bio: string;
  };
  guardianProfile?: {
    studentInfo: {
      name: string;
      class: string;
      subjects: string[];
      studyLevel: string;
    };
    requirements: {
      preferredGender: 'male' | 'female' | 'any';
      budgetRange: {
        min: number;
        max: number;
      };
      preferredTime: string[];
      tutionType: 'home' | 'online' | 'both';
    };
  };
  accountBalance: number;
  totalSpent: number;
  totalEarned: number;
  isVerified: boolean;
  rating: number;
  totalRatings: number;
  reviews: Review[];
  lastActive: string;
  joinedAt: string;
  preferences: {
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
    language: string;
    theme: 'light' | 'dark';
  };
}

export interface Education {
  institution: string;
  degree: string;
  department?: string;
  passingYear?: number;
  result?: string;
  description?: string;
}

export interface Review {
  _id: string;
  reviewerId: string | User;
  rating: number;
  comment: string;
  createdAt: string;
}

// Post types
export interface Post {
  _id: string;
  title: string;
  description: string;
  images: string[];
  category: 'tuition' | 'land' | 'house_rent' | 'house_buy' | 'tolet';
  postedBy: string | User;
  location: {
    division: string;
    district: string;
    upazila?: string;
    area?: string;
    address?: string;
    coordinates?: [number, number];
  };
  price: {
    amount?: number;
    currency: string;
    type: 'fixed' | 'negotiable' | 'range';
    range?: {
      min: number;
      max: number;
    };
  };
  tuitionDetails?: {
    subjects?: string[];
    classes?: string[];
    preferredGender?: 'male' | 'female' | 'any';
    tutionType?: 'home' | 'online' | 'both';
    availableTime?: string[];
    salaryExpectation?: {
      min: number;
      max: number;
    };
    studentInfo?: {
      class: string;
      subjects: string[];
      studyLevel: string;
      gender: string;
    };
    requirements?: {
      teacherGender: 'male' | 'female' | 'any';
      experience: string;
      qualification: string;
      budget: {
        min: number;
        max: number;
      };
    };
  };
  propertyDetails?: {
    size?: string;
    bedrooms?: number;
    bathrooms?: number;
    floors?: number;
    facing?: string;
    landType?: string;
    ownership?: string;
    houseType?: 'apartment' | 'house' | 'duplex' | 'studio';
    furnishing?: 'furnished' | 'semi_furnished' | 'unfurnished';
    amenities?: string[];
    utilities?: {
      electricity: boolean;
      water: boolean;
      gas: boolean;
      internet: boolean;
    };
    advancePayment?: number;
    rentType?: 'monthly' | 'yearly';
    availableFrom?: string;
    nearbyFacilities?: string[];
    roadWidth?: string;
    parking?: string;
  };
  contactInfo?: {
    name: string;
    phone: string;
    email: string;
    alternatePhone?: string;
    preferredContactTime?: string;
  };
  status: 'active' | 'sold' | 'rented' | 'expired' | 'draft';
  isActive: boolean;
  isFeatured: boolean;
  featuredUntil?: string;
  views: number;
  contactViews: number;
  favorites: string[];
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  canViewContact?: boolean;
  isFavorited?: boolean;
  daysRemaining?: number;
  formattedPrice?: string;
}

// Transaction types
export interface Transaction {
  _id: string;
  transactionId: string;
  user: string | User;
  type: 'recharge' | 'contact_view' | 'featured_post' | 'subscription' | 'refund';
  amount: number;
  currency: string;
  paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'bank_transfer' | 'card' | 'admin_credit';
  paymentGateway: {
    provider?: string;
    transactionId?: string;
    paymentId?: string;
    reference?: string;
    status?: string;
    fee?: number;
  };
  status: 'pending' | 'completed' | 'failed' | 'cancelled' | 'refunded';
  description: string;
  metadata?: {
    postId?: string;
    contactOwnerId?: string;
    subscriptionType?: string;
    subscriptionDuration?: number;
    adminNote?: string;
  };
  initiatedAt: string;
  completedAt?: string;
  failedAt?: string;
  balanceBefore?: number;
  balanceAfter?: number;
  createdAt: string;
  updatedAt: string;
}

// Notification types
export interface Notification {
  _id: string;
  recipient: string | User;
  sender?: string | User;
  type: 'post_view' | 'contact_view' | 'review' | 'favorite' | 'system' | 'payment';
  title: string;
  message: string;
  data?: {
    postId?: string;
    transactionId?: string;
    userId?: string;
  };
  isRead: boolean;
  readAt?: string;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    posts?: T[];
    teachers?: T[];
    users?: T[];
    transactions?: T[];
    notifications?: T[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
}

// Auth types
export interface LoginCredentials {
  identifier: string; // email or phone
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  userType: 'teacher' | 'guardian' | 'student' | 'house_owner' | 'general_buyer';
  location: {
    division: string;
    district: string;
    upazila?: string;
    address?: string;
  };
}

// Filter types
export interface PostFilters {
  page?: number;
  limit?: number;
  category?: string;
  division?: string;
  district?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  userType?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface TeacherFilters {
  page?: number;
  limit?: number;
  subjects?: string;
  classes?: string;
  division?: string;
  district?: string;
  minRating?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Dashboard types
export interface DashboardData {
  user: User;
  statistics: {
    totalPosts: number;
    activePosts: number;
    totalViews: number;
    totalContactViews: number;
    favoritePostsCount: number;
    accountBalance: number;
    totalSpent: number;
    totalEarned: number;
  };
  recentTransactions: Transaction[];
}
