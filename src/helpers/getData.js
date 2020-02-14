export async function getData() {
  try {
    const data = await this.fetch("https://api.jikan.moe/v3/top/anime/1/tv");
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}
