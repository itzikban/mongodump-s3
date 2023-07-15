import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GgService } from "./gg.service";
import { GgControllerBase } from "./base/gg.controller.base";

@swagger.ApiTags("ggs")
@common.Controller("ggs")
export class GgController extends GgControllerBase {
  constructor(
    protected readonly service: GgService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
