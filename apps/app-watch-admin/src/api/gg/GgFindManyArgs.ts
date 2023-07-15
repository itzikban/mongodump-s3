import { GgWhereInput } from "./GgWhereInput";
import { GgOrderByInput } from "./GgOrderByInput";

export type GgFindManyArgs = {
  where?: GgWhereInput;
  orderBy?: Array<GgOrderByInput>;
  skip?: number;
  take?: number;
};
