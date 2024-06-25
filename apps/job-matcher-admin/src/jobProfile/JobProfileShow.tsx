import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOBPROFILE_TITLE_FIELD } from "./JobProfileTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const JobProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="requirements" source="requirements" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Candidate"
          target="jobProfileId"
          label="Candidates"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="JobProfile"
              source="jobprofile.id"
              reference="JobProfile"
            >
              <TextField source={JOBPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="resume" source="resume" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Company"
          target="jobProfileId"
          label="Companies"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="JobProfile"
              source="jobprofile.id"
              reference="JobProfile"
            >
              <TextField source={JOBPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="location" source="location" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Comparison"
          target="jobProfileId"
          label="Comparisons"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="comparisonResult" source="comparisonResult" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="JobProfile"
              source="jobprofile.id"
              reference="JobProfile"
            >
              <TextField source={JOBPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
