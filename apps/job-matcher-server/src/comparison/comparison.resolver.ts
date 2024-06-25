import * as graphql from "@nestjs/graphql";
import { ComparisonResolverBase } from "./base/comparison.resolver.base";
import { Comparison } from "./base/Comparison";
import { ComparisonService } from "./comparison.service";

@graphql.Resolver(() => Comparison)
export class ComparisonResolver extends ComparisonResolverBase {
  constructor(protected readonly service: ComparisonService) {
    super(service);
  }
}
