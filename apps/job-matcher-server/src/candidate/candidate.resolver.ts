import * as graphql from "@nestjs/graphql";
import { CandidateResolverBase } from "./base/candidate.resolver.base";
import { Candidate } from "./base/Candidate";
import { CandidateService } from "./candidate.service";

@graphql.Resolver(() => Candidate)
export class CandidateResolver extends CandidateResolverBase {
  constructor(protected readonly service: CandidateService) {
    super(service);
  }
}
