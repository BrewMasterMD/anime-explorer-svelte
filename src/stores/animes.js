import { writable } from "svelte/store";

export const animes = writable({
  list: [],
  details: {}
});
