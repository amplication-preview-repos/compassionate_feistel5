import { Comparison as TComparison } from "../api/comparison/Comparison";

export const COMPARISON_TITLE_FIELD = "id";

export const ComparisonTitle = (record: TComparison): string => {
  return record.id?.toString() || String(record.id);
};
