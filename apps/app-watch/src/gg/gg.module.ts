import { Module } from "@nestjs/common";
import { GgModuleBase } from "./base/gg.module.base";
import { GgService } from "./gg.service";
import { GgController } from "./gg.controller";
import { GgResolver } from "./gg.resolver";

@Module({
  imports: [GgModuleBase],
  controllers: [GgController],
  providers: [GgService, GgResolver],
  exports: [GgService],
})
export class GgModule {}
