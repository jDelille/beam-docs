import { supabase } from "../lib/supabase";
import type { Template } from "../types/template";

export async function fetchTemplates(): Promise<Template[]> {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("fetchTemplates error:", error);
    throw error;
  }

  return data ?? [];
}

export async function fetchTemplateById(id: string): Promise<Template | null> {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("fetchTemplateById error:", error);
    return null;
  }

  return data;
}