import { Comparison } from "../comparison/Comparison";
import { JobProfile } from "../jobProfile/JobProfile";

export type Candidate = {
  comparisons?: Array<Comparison>;
  createdAt: Date;
  email: string | null;
  id: string;
  jobProfile?: JobProfile | null;
  name: string | null;
  resume: string | null;
  updatedAt: Date;
};
