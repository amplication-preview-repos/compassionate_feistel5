import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOBPROFILE_TITLE_FIELD } from "../jobProfile/JobProfileTitle";

export const CandidateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Candidates"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
