export type Task = {
  id: number;
  description: string;
  done: boolean;
  assigned_to: number;
};

export type Person = {
  personid: number;
  name: string;
}