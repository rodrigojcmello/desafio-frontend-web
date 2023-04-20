export type CheckList = Farmer[];

export interface Farmer {
  had_supervision: boolean;
  updated_at: string;
  __v: number;
  farmer: { city: string; name: string };
  created_at: string;
  amount_of_milk_produced: string;
  from: { name: string };
  number_of_cows_head: string;
  location: { latitude: number; longitude: number };
  _id: number;
  to: { name: string };
  type: string;
}
