export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export type User = {
  _id?: string;
  image?: string;
  name: string;
  email: string;
  role: string;
  password: string;
};
