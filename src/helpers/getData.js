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

export function getDetails(type = "anime", id) {
  return Promise.all([fetch(`https://api.jikan.moe/v3/${type}/${id}`), fetch(`https://api.jikan.moe/v3/${type}/${id}/reviews`)])
    .then(([details, reviews]) => {
      return Promise.all([details.json(), reviews.json()]);
    })
    .then(([details, reviews]) => {
      return ({
        ...details,
        reviews: reviews.reviews.slice(0, 3),
      });
    }).catch(console.log);
}
