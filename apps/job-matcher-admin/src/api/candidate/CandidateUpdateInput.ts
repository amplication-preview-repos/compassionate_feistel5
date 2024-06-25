import { ComparisonUpdateManyWithoutCandidatesInput } from "./ComparisonUpdateManyWithoutCandidatesInput";
import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";

export type CandidateUpdateInput = {
  comparisons?: ComparisonUpdateManyWithoutCandidatesInput;
  email?: string | null;
  jobProfile?: JobProfileWhereUniqueInput | null;
  name?: string | null;
  resume?: string | null;
};
