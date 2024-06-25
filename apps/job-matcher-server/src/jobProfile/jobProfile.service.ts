import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobProfileServiceBase } from "./base/jobProfile.service.base";

@Injectable()
export class JobProfileService extends JobProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
