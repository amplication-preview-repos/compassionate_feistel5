import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";

export type ComparisonCreateInput = {
  candidate?: CandidateWhereUniqueInput | null;
  comparisonResult?: InputJsonValue;
  jobProfile?: JobProfileWhereUniqueInput | null;
};