export interface AddVacancy {
  title: string;
  description: string;
  salary: number;
  requirements: string;
  companyWebsite: string;
  typeOfJob: string;
  location: string;
  country: string;
  benefits?: string;
}
