import { JobProfile as TJobProfile } from "../api/jobProfile/JobProfile";

export const JOBPROFILE_TITLE_FIELD = "title";

export const JobProfileTitle = (record: TJobProfile): string => {
  return record.title?.toString() || String(record.id);
};
