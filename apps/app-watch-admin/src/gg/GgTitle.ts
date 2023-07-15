import { Gg as TGg } from "../api/gg/Gg";

export const GG_TITLE_FIELD = "id";

export const GgTitle = (record: TGg): string => {
  return record.id || String(record.id);
};
