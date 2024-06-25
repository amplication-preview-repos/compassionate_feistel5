import { Module } from "@nestjs/common";
import { ComparisonModuleBase } from "./base/comparison.module.base";
import { ComparisonService } from "./comparison.service";
import { ComparisonController } from "./comparison.controller";
import { ComparisonResolver } from "./comparison.resolver";

@Module({
  imports: [ComparisonModuleBase],
  controllers: [ComparisonController],
  providers: [ComparisonService, ComparisonResolver],
  exports: [ComparisonService],
})
export class ComparisonModule {}
