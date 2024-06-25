import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { JobProfileTitle } from "../jobProfile/JobProfileTitle";

export const ComparisonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput
          source="jobProfile.id"
          reference="JobProfile"
          label="JobProfile"
        >
          <SelectInput optionText={JobProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
