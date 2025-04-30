export interface RegisteredAccountShortView {
  firstName: string;
  lastName: string;
  role: UserType;
  userId: string;
  createdAt: string;
}

export enum UserType {
  Admin = 'Admin',
  User = 'User',
  Recruiter = 'Recruiter',
}
