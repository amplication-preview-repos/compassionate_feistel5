import { JobProfile } from "../jobProfile/JobProfile";

export type Company = {
  createdAt: Date;
  id: string;
  jobProfile?: JobProfile | null;
  jobProfiles?: Array<JobProfile>;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
