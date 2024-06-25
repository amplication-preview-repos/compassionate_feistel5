import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";

export type ComparisonWhereInput = {
  candidate?: CandidateWhereUniqueInput;
  comparisonResult?: JsonFilter;
  id?: StringFilter;
  jobProfile?: JobProfileWhereUniqueInput;
};
