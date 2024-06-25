import { JobProfileWhereUniqueInput } from "../jobProfile/JobProfileWhereUniqueInput";
import { JobProfileCreateNestedManyWithoutCompaniesInput } from "./JobProfileCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  jobProfile?: JobProfileWhereUniqueInput | null;
  jobProfiles?: JobProfileCreateNestedManyWithoutCompaniesInput;
  location?: string | null;
  name?: string | null;
};
