// --- Nonprofit Directory ---
const nonprofits = [
  {
    name: "Newark Food Bank",
    category: "Food",
    description: "Providing meals and food assistance to Newark families.",
    link: "https://www.newarkfoodbank.org"
  },
  {
    name: "Youth Empowerment Alliance",
    category: "Youth",
    description: "Mentorship and leadership programs for local youth.",
    link: "#"
  },
  {
    name: "Habitat for Humanity Newark",
    category: "Housing",
    description: "Building affordable housing for Newark residents.",
    link: "#"
  },
  {
    name: "Arts Newark",
    category: "Arts",
    description: "Supporting creative expression through community art.",
    link: "#"
  },
  {
    name: "Newark Education Fund",
    category: "Education",
    description: "Expanding access to quality education opportunities.",
    link: "#"
  }
];

const grid = document.getElementById("nonprofitGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderNonprofits() {
  if (!grid) return;
  grid.innerHTML = "";

  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  nonprofits
    .filter(n =>
      (category === "all" || n.category === category) &&
      n.name.toLowerCase().includes(search)
    )
    .forEach(n => {
      const card = document.createElement("div");
      card.className = "nonprofit-card";
      card.onclick = () => window.open(n.link, "_blank");

      card.innerHTML = `
        <h3>${n.name}</h3>
        <span>${n.category}</span>
        <p>${n.description}</p>
      `;

      grid.appendChild(card);
    });
}

if (searchInput && categoryFilter) {
  searchInput.addEventListener("input", renderNonprofits);
  categoryFilter.addEventListener("change", renderNonprofits);
  renderNonprofits();
}
