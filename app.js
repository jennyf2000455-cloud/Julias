const menuContainer = document.getElementById("menuContainer");
const tabsContainer = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const filterSpicy = document.getElementById("filterSpicy");
const filterVegetarian = document.getElementById("filterVegetarian");
const filterGlutenFree = document.getElementById("filterGlutenFree");

const modal = document.getElementById("dishModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalTags = document.getElementById("modalTags");

let menuData = [];
let activeCategory = "All";

const tagLabels = {
  spicy: "Spicy 🌶️",
  vegetarian: "Vegetarian 🌿",
  glutenFree: "Gluten-Free",
  chefSpecial: "Chef's Special",
  seasonal: "Seasonal",
  houseFavorite: "House Favorite"
};

const formatPrice = (value) => `$${value.toFixed(2)}`;

const closeModal = () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
};

const openModal = (item) => {
  modalTitle.textContent = item.name;
  modalDescription.textContent = item.description;
  modalPrice.textContent = `Price: ${formatPrice(item.price)}`;
  modalTags.textContent = item.tags?.length
    ? `Tags: ${item.tags.map((tag) => tagLabels[tag] || tag).join(", ")}`
    : "";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
};

const buildTabs = (categories) => {
  tabsContainer.innerHTML = "";
  const allButton = document.createElement("button");
  allButton.textContent = "All";
  allButton.classList.add("active");
  allButton.addEventListener("click", () => {
    activeCategory = "All";
    updateTabs();
    renderMenu();
  });
  tabsContainer.appendChild(allButton);

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      updateTabs();
      renderMenu();
    });
    tabsContainer.appendChild(button);
  });
};

const updateTabs = () => {
  const buttons = tabsContainer.querySelectorAll("button");
  buttons.forEach((button) => {
    const isActive = button.textContent === activeCategory;
    button.classList.toggle("active", isActive);
  });
};

const passesFilters = (item) => {
  const searchValue = searchInput.value.toLowerCase().trim();
  const matchesSearch = item.name.toLowerCase().includes(searchValue);

  const spicyOk = !filterSpicy.checked || item.tags?.includes("spicy");
  const vegOk = !filterVegetarian.checked || item.tags?.includes("vegetarian");
  const gfOk = !filterGlutenFree.checked || item.tags?.includes("glutenFree");

  return matchesSearch && spicyOk && vegOk && gfOk;
};

const renderMenu = () => {
  menuContainer.innerHTML = "";

  const categories = [...new Set(menuData.map((item) => item.category))];
  const sortedCategories = categories.sort((a, b) => a.localeCompare(b));

  const filteredCategories = activeCategory === "All"
    ? sortedCategories
    : sortedCategories.filter((category) => category === activeCategory);

  filteredCategories.forEach((category) => {
    const categoryItems = menuData
      .filter((item) => item.category === category)
      .filter(passesFilters)
      .sort((a, b) => a.name.localeCompare(b.name));

    if (!categoryItems.length) {
      return;
    }

    const section = document.createElement("div");
    section.className = "category";

    const title = document.createElement("h2");
    title.className = "category__title";
    title.textContent = category;

    const cards = document.createElement("div");
    cards.className = "cards";

    categoryItems.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";
      card.addEventListener("click", () => openModal(item));

      const titleRow = document.createElement("div");
      titleRow.className = "card__title";

      const name = document.createElement("h4");
      name.textContent = item.name;

      const price = document.createElement("span");
      price.className = "card__price";
      price.textContent = formatPrice(item.price);

      titleRow.append(name, price);

      const description = document.createElement("p");
      description.className = "card__description";
      description.textContent = item.description;

      const tags = document.createElement("div");
      tags.className = "tags";
      (item.tags || []).forEach((tag) => {
        const tagSpan = document.createElement("span");
        tagSpan.className = "tag";
        tagSpan.textContent = tagLabels[tag] || tag;
        tags.appendChild(tagSpan);
      });

      const note = document.createElement("div");
      note.className = "note";
      note.textContent = "Add note";

      card.append(titleRow, description, tags, note);
      cards.appendChild(card);
    });

    section.append(title, cards);
    menuContainer.appendChild(section);
  });
};

const initFilters = () => {
  [searchInput, filterSpicy, filterVegetarian, filterGlutenFree].forEach((input) => {
    input.addEventListener("input", renderMenu);
    input.addEventListener("change", renderMenu);
  });
};

const initModal = () => {
  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-modal-close]")) {
      closeModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
};

fetch("/data/menu.json")
  .then((response) => response.json())
  .then((data) => {
    menuData = data.items || [];
    const categories = [...new Set(menuData.map((item) => item.category))].sort((a, b) =>
      a.localeCompare(b)
    );
    buildTabs(categories);
    initFilters();
    initModal();
    renderMenu();
  })
  .catch(() => {
    menuContainer.innerHTML = "<p>Menu unavailable. Please refresh.</p>";
  });
