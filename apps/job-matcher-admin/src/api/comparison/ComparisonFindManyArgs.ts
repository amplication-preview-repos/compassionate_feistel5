import { ComparisonWhereInput } from "./ComparisonWhereInput";
import { ComparisonOrderByInput } from "./ComparisonOrderByInput";

export type ComparisonFindManyArgs = {
  where?: ComparisonWhereInput;
  orderBy?: Array<ComparisonOrderByInput>;
  skip?: number;
  take?: number;
};
