import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GgServiceBase } from "./base/gg.service.base";

@Injectable()
export class GgService extends GgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
