import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComparisonServiceBase } from "./base/comparison.service.base";

@Injectable()
export class ComparisonService extends ComparisonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
