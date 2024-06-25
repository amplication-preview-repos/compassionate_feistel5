import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";
import { JobProfileUpdateManyWithoutCompaniesInput } from "./JobProfileUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  jobProfile?: JobProfileWhereUniqueInput | null;
  jobProfiles?: JobProfileUpdateManyWithoutCompaniesInput;
  location?: string | null;
  name?: string | null;
};
