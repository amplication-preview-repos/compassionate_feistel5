import { SortOrder } from "../../util/SortOrder";

export type JobProfileOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  requirements?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
