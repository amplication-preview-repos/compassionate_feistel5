import { JobProfileWhereInput } from "./JobProfileWhereInput";
import { JobProfileOrderByInput } from "./JobProfileOrderByInput";

export type JobProfileFindManyArgs = {
  where?: JobProfileWhereInput;
  orderBy?: Array<JobProfileOrderByInput>;
  skip?: number;
  take?: number;
};
