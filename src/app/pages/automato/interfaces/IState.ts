export interface IState {
  id: number;
  status: 'ACTIVE' | 'INACTIVE' | 'ERROR';
  arrow?: string;
}
