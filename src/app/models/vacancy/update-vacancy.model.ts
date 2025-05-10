export interface UpdateVacancy {
  description: string;
  salary: number;
  requirements: string;
  companyWebsite: string;
  typeOfJob: string;
  location: string;
  vacancyId: string;
  benefits?: string;
}
