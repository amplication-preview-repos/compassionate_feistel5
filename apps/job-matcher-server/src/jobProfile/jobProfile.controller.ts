import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobProfileService } from "./jobProfile.service";
import { JobProfileControllerBase } from "./base/jobProfile.controller.base";

@swagger.ApiTags("jobProfiles")
@common.Controller("jobProfiles")
export class JobProfileController extends JobProfileControllerBase {
  constructor(protected readonly service: JobProfileService) {
    super(service);
  }
}
