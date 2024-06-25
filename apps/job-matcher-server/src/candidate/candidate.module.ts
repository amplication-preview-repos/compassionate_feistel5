import { Module } from "@nestjs/common";
import { CandidateModuleBase } from "./base/candidate.module.base";
import { CandidateService } from "./candidate.service";
import { CandidateController } from "./candidate.controller";
import { CandidateResolver } from "./candidate.resolver";

@Module({
  imports: [CandidateModuleBase],
  controllers: [CandidateController],
  providers: [CandidateService, CandidateResolver],
  exports: [CandidateService],
})
export class CandidateModule {}
