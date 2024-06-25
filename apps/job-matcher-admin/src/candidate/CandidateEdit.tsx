import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ComparisonTitle } from "../comparison/ComparisonTitle";
import { JobProfileTitle } from "../jobProfile/JobProfileTitle";

export const CandidateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comparisons"
          reference="Comparison"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComparisonTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput
          source="jobProfile.id"
          reference="JobProfile"
          label="JobProfile"
        >
          <SelectInput optionText={JobProfileTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="resume" multiline source="resume" />
      </SimpleForm>
    </Edit>
  );
};
