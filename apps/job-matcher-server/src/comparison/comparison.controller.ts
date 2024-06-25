import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComparisonService } from "./comparison.service";
import { ComparisonControllerBase } from "./base/comparison.controller.base";

@swagger.ApiTags("comparisons")
@common.Controller("comparisons")
export class ComparisonController extends ComparisonControllerBase {
  constructor(protected readonly service: ComparisonService) {
    super(service);
  }
}
