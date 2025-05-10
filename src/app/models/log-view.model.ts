import { AdminView } from './admin-view.model';

export interface LogView {
  body: string;
  admin: AdminView;
  createdAt: string;
}
