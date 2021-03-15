// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f7c0f29ebc1462b9762b86e03419613";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
