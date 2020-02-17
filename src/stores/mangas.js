import { writable } from "svelte/store";

export const mangas = writable({
  list: [],
  details: {}
});
