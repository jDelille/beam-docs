import { supabase } from "../lib/supabase";
import type { CreateTemplateInput, Template } from "../types/template";


export async function uploadTemplate(
  input: CreateTemplateInput
): Promise<Template> {
  const { data, error } = await supabase
    .from("templates")
    .insert({
      ...input,
      downloads: 0,
      rating: 0,
    })
    .select("*")
    .single();

  if (error) {
    console.error("uploadTemplate error:", error);
    throw error;
  }

  return data;
}