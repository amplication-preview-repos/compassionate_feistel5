import { Candidate } from "../candidate/Candidate";
import { JsonValue } from "type-fest";
import { JobProfile } from "../jobProfile/JobProfile";

export type Comparison = {
  candidate?: Candidate | null;
  comparisonResult: JsonValue;
  createdAt: Date;
  id: string;
  jobProfile?: JobProfile | null;
  updatedAt: Date;
};
