export type CheckList = Farmer[];

export interface Farmer {
  had_supervision: boolean;
  updated_at: Date;
  __v?: number;
  farmer: { city: string; name: string };
  created_at: Date;
  amount_of_milk_produced: number;
  from: { name: string };
  number_of_cows_head: number;
  location: { latitude: number; longitude: number };
  _id: string;
  to: { name: string };
  type: 'BPA' | 'Antibiótico' | 'BPF';
}
