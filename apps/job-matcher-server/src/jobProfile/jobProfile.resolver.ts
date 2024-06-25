import * as graphql from "@nestjs/graphql";
import { JobProfileResolverBase } from "./base/jobProfile.resolver.base";
import { JobProfile } from "./base/JobProfile";
import { JobProfileService } from "./jobProfile.service";

@graphql.Resolver(() => JobProfile)
export class JobProfileResolver extends JobProfileResolverBase {
  constructor(protected readonly service: JobProfileService) {
    super(service);
  }
}
