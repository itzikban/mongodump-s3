/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteGgArgs } from "./DeleteGgArgs";
import { GgCountArgs } from "./GgCountArgs";
import { GgFindManyArgs } from "./GgFindManyArgs";
import { GgFindUniqueArgs } from "./GgFindUniqueArgs";
import { Gg } from "./Gg";
import { GgService } from "../gg.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Gg)
export class GgResolverBase {
  constructor(
    protected readonly service: GgService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Gg",
    action: "read",
    possession: "any",
  })
  async _ggsMeta(@graphql.Args() args: GgCountArgs): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Gg])
  @nestAccessControl.UseRoles({
    resource: "Gg",
    action: "read",
    possession: "any",
  })
  async ggs(@graphql.Args() args: GgFindManyArgs): Promise<Gg[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Gg, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Gg",
    action: "read",
    possession: "own",
  })
  async gg(@graphql.Args() args: GgFindUniqueArgs): Promise<Gg | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Gg)
  @nestAccessControl.UseRoles({
    resource: "Gg",
    action: "delete",
    possession: "any",
  })
  async deleteGg(@graphql.Args() args: DeleteGgArgs): Promise<Gg | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
