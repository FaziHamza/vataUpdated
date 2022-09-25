export interface User {
  user_details: userDetails;
  token_key: string;
  cart_id: string;
  has_shop: boolean;
  shop_details: ShopDetails;
}

interface userDetails {
  id: string;
  password: string;
  is_active: boolean;
  username: string;
  email: string;
  gender: string;
  first_name: string;
  last_name: string;
  profile_pic: string;
  birth_date: string;
  is_verified: boolean;
  is_physical: boolean;
  is_business: boolean;
  street: string;
  street_num: string;
  city: string;
  country: string;
  location: string;
  postcode: number;
  phone_isd: string;
  phone_number: string;
  store_name: string;
  registered: boolean;
  registered_code: number;
  VAT_liable: boolean;
  VAT_liable_code: number;
  authorized: boolean;
  authorized_signer: AuthSigner;
  stripe_customer_id: string;
  business_type: string;
  business_field: string;
  account_type: string;
  department_industry: string;
  user_has_card: boolean;
  user_card_list: [];
  parent_user: string;
  shipping_addresses: ShippingAddress[];
  is_online: boolean;
  is_business_user: boolean;
  is_private_user: boolean;
  address: string;
  is_subscribed: boolean;
  subscription_details: {};
}

interface AuthSigner {
  GSTIN: string;
}

interface ShippingAddress {
  id: string;
  street: string;
  country: string;
  city: string;
  postcode: number;
  location_field: string;
}

interface ShopDetails {
  id: string;
  name: string;
}
