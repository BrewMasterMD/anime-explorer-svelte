export async function getTopData(type = "anime", page = 1) {
  try {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/${type}/${page}/${
        type === "anime" ? "tv" : "manga"
      }`
    );
    const jsonData = await data.json();
    return jsonData.top;
  } catch (err) {
    console.log(err);
  }
}
