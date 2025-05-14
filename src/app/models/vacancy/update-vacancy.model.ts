export interface UpdateVacancy {
  description: string;
  requirements: string;
  companyWebsite: string;
  typeOfJob: string;
  location: string;
  vacancyId: string;
  benefits?: string;
}
