import { Candidate } from "../candidate/Candidate";
import { Company } from "../company/Company";
import { Comparison } from "../comparison/Comparison";

export type JobProfile = {
  candidates?: Array<Candidate>;
  companies?: Array<Company>;
  company?: Company | null;
  comparisons?: Array<Comparison>;
  createdAt: Date;
  description: string | null;
  id: string;
  requirements: string | null;
  title: string | null;
  updatedAt: Date;
};
