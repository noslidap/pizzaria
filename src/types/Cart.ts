export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: string;
}