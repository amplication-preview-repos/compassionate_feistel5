/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  JobProfile as PrismaJobProfile,
  Candidate as PrismaCandidate,
  Company as PrismaCompany,
  Comparison as PrismaComparison,
} from "@prisma/client";

export class JobProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.JobProfileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.jobProfile.count(args);
  }

  async jobProfiles(
    args: Prisma.JobProfileFindManyArgs
  ): Promise<PrismaJobProfile[]> {
    return this.prisma.jobProfile.findMany(args);
  }
  async jobProfile(
    args: Prisma.JobProfileFindUniqueArgs
  ): Promise<PrismaJobProfile | null> {
    return this.prisma.jobProfile.findUnique(args);
  }
  async createJobProfile(
    args: Prisma.JobProfileCreateArgs
  ): Promise<PrismaJobProfile> {
    return this.prisma.jobProfile.create(args);
  }
  async updateJobProfile(
    args: Prisma.JobProfileUpdateArgs
  ): Promise<PrismaJobProfile> {
    return this.prisma.jobProfile.update(args);
  }
  async deleteJobProfile(
    args: Prisma.JobProfileDeleteArgs
  ): Promise<PrismaJobProfile> {
    return this.prisma.jobProfile.delete(args);
  }

  async findCandidates(
    parentId: string,
    args: Prisma.CandidateFindManyArgs
  ): Promise<PrismaCandidate[]> {
    return this.prisma.jobProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .candidates(args);
  }

  async findCompanies(
    parentId: string,
    args: Prisma.CompanyFindManyArgs
  ): Promise<PrismaCompany[]> {
    return this.prisma.jobProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .companies(args);
  }

  async findComparisons(
    parentId: string,
    args: Prisma.ComparisonFindManyArgs
  ): Promise<PrismaComparison[]> {
    return this.prisma.jobProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comparisons(args);
  }

  async getCompany(parentId: string): Promise<PrismaCompany | null> {
    return this.prisma.jobProfile
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }
}
