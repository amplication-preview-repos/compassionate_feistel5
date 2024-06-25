import { Module } from "@nestjs/common";
import { JobProfileModuleBase } from "./base/jobProfile.module.base";
import { JobProfileService } from "./jobProfile.service";
import { JobProfileController } from "./jobProfile.controller";
import { JobProfileResolver } from "./jobProfile.resolver";

@Module({
  imports: [JobProfileModuleBase],
  controllers: [JobProfileController],
  providers: [JobProfileService, JobProfileResolver],
  exports: [JobProfileService],
})
export class JobProfileModule {}
