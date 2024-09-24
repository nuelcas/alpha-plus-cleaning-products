document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the search query from the input field
  const query = document
    .querySelector('input[name="query"]')
    .value.toLowerCase()
    .trim();

  // Define a map of search terms to corresponding URLs
  const searchMap = {
    "liquid soap": "categories.html#liquid-soap",
    soap: "categories.html#liquid-soap",
    soaps: "categories.html#liquid-soap",
    "multi-purpose liquid soap": "categories.html#liquid-soap",
    "multi-purpose soap": "categories.html#liquid-soap",
    "multipurpose liquid soap": "categories.html#liquid-soap",
    "multipurpose soap": "categories.html#liquid-soap",
    "tile cleaner": "categories.html#tile-cleaner",
    "tiles cleaner": "categories.html#tile-cleaner",
    tile: "categories.html#tile-cleaner",
    cleaner: "categories.html#tile-cleaner",
    "toilet cleaner": "categories.html#toilet-cleaner",
    toilet: "categories.html#tile-cleaner",
    toilets: "categories.html#tile-cleaner",
    disinfectant: "categories.html#germicide",
    izal: "categories.html#germicide",
    germicide: "categories.html#germicide",
  };

  // Check if the search query exists in the searchMap
  if (searchMap[query]) {
    // Redirect to the corresponding URL
    window.location.href = searchMap[query];
  } else {
    // If no match found, show an alert or redirect to a default page
    alert(
      "No results found for '" + query + "'. Redirecting to Categories page."
    );
    window.location.href = "index.html";
  }
});
