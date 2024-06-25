import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  jobProfileId?: SortOrder;
  name?: SortOrder;
  resume?: SortOrder;
  updatedAt?: SortOrder;
};
