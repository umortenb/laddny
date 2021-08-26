import { Descendant } from "slate";
import supabase from "../supabase";

export const upsertEditorElements = async (elements: Descendant[]) => {
  const payload = [{ type: 1 }, { type: 0 }];
  let { data, error } = await supabase.rpc("update_editor", {
    payload: payload,
  });

  if (error) console.error(error);
  else console.log(data);
};
