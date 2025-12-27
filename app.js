const CONFIG = {
  nombre: "Julia's Restaurant",
  subtitulo: "Tradición mexicana desde 1991",
  historia: [
    "Julia Mancilla nació en Tampico, México, en 1952 y emigró a Corpus Christi, Texas.",
    "Tras años de experiencia trabajando en restaurantes del Valle, en 1991 abrió Julia’s Restaurant en Los Fresnos.",
    "Nuestro enfoque es servir comida casera, honesta y con gran sabor, en un ambiente familiar."
  ],
  direccion: "Los Fresnos, Texas",
  ciudadEstado: "TX",
  telefono: "(956) 233-5653",
  horarios: {
    Lunes: "7:00 AM – 4:00 PM",
    Martes: "7:00 AM – 4:00 PM",
    "Miércoles": "7:00 AM – 8:00 PM",
    Jueves: "7:00 AM – 8:00 PM",
    Viernes: "7:00 AM – 8:00 PM",
    Sábado: "7:00 AM – 4:00 PM",
    Domingo: "Cerrado"
  },
  whatsapp: "9562335653",
  crmUrl: "",
  notasMenu:
    "Breakfast servido 6:00 AM a 11:30 AM. Después de 11:30 AM puede haber aumento de precio. Grupos de 6 o más: 15% gratuity. Carry-out: +$0.25.",
  menu: [
    {
      categoria: "Breakfast Platters",
      items: [
        { nombre: "Huevos Rancheros", precio: 9.95, nota: "2 huevos, salsa ranchera, frijoles refritos y tortillas." },
        { nombre: "Chorizo con Huevos", precio: 9.95, nota: "Servido con papas, frijoles y tortillas." },
        { nombre: "Machacado", precio: 10.5, nota: "Carne seca con huevo, papas y tortillas." }
      ]
    },
    {
      categoria: "Carne en Breakfast",
      items: [
        { nombre: "Carne Guisada con Huevos", precio: 11.25, nota: "Incluye papas y tortillas." },
        { nombre: "Carne Asada con Huevos", precio: 12.75, nota: "Servido con papas y tortillas." }
      ]
    },
    {
      categoria: "South of the Border Favorites (breakfast)",
      items: [
        { nombre: "Breakfast Taco Plate", precio: 8.95, nota: "3 tacos con elección de guiso." },
        { nombre: "Breakfast Quesadilla", precio: 9.5, nota: "Huevo con queso, servida con salsa." }
      ]
    },
    {
      categoria: "Barbacoa & Menudo",
      items: [
        { nombre: "Barbacoa Plate", precio: 12.95, nota: "Barbacoa, frijoles y tortillas." },
        { nombre: "Menudo Bowl", precio: 11.95, nota: "Con pan o tortillas." },
        { nombre: "Menudo Plate", precio: 13.5, nota: "Menudo con guarniciones completas." }
      ]
    },
    {
      categoria: "Pork & Beef",
      items: [
        { nombre: "Pork Chops", precio: 13.95, nota: "2 chuletas con arroz y frijoles." },
        { nombre: "Beef Tips", precio: 14.5, nota: "Servido con arroz y frijoles." }
      ]
    },
    {
      categoria: "Three Egg Omelets",
      items: [
        { nombre: "Omelet de Queso", precio: 9.5, nota: "3 huevos con queso derretido." },
        { nombre: "Omelet de Jamón", precio: 10.25, nota: "Jamón, queso y tomate." },
        { nombre: "Omelet Vegetariano", precio: 10.75, nota: "Champiñones, espinaca y pimientos." }
      ]
    },
    {
      categoria: "Pancakes",
      items: [
        { nombre: "Buttermilk Pancakes", precio: 8.5, nota: "Orden de 3 con mantequilla y miel." },
        { nombre: "Pancakes con Fresas", precio: 9.75, nota: "Fresas frescas y crema." }
      ]
    },
    {
      categoria: "Julia-Made Taquitos",
      items: [
        { nombre: "Taquitos de Pollo", precio: 9.95, nota: "6 piezas con guacamole." },
        { nombre: "Taquitos de Res", precio: 10.5, nota: "6 piezas con crema y salsa." }
      ]
    },
    {
      categoria: "Sides",
      items: [
        { nombre: "Frijoles Refritos", precio: 2.5 },
        { nombre: "Arroz", precio: 2.5 },
        { nombre: "Papas", precio: 3.25 },
        { nombre: "Tortillas (4)", precio: 1.5 }
      ]
    },
    {
      categoria: "Appetizers",
      items: [
        { nombre: "Chips & Salsa", precio: 4.5 },
        { nombre: "Guacamole", precio: 6.5, nota: "Servido con chips." },
        { nombre: "Queso Fundido", precio: 7.95, nota: "Queso con chorizo y tortillas." }
      ]
    },
    {
      categoria: "Soups & Salads",
      items: [
        { nombre: "Caldo de Pollo", precio: 8.95 },
        { nombre: "Caldo de Res", precio: 9.5 },
        { nombre: "Ensalada de Casa", precio: 6.75, nota: "Lechuga, tomate, cebolla y aderezo." }
      ]
    },
    {
      categoria: "South Texas Sandwiches",
      items: [
        { nombre: "Club Sandwich", precio: 10.95, nota: "Pavo, jamón, tocino, queso." },
        { nombre: "BLT", precio: 8.95, nota: "Tocino, lechuga y tomate." }
      ]
    },
    {
      categoria: "Julia’s Traditional American Platters",
      items: [
        { nombre: "Chicken Fried Steak", precio: 13.95, nota: "Con gravy, puré y vegetales." },
        { nombre: "Fried Fish", precio: 12.95, nota: "Con papas fritas y ensalada." }
      ]
    },
    {
      categoria: "Julia’s Juicy Burgers",
      items: [
        { nombre: "Classic Burger", precio: 9.5, nota: "Carne, queso, lechuga y tomate." },
        { nombre: "Bacon Cheeseburger", precio: 10.5, nota: "Tocino y queso cheddar." }
      ]
    },
    {
      categoria: "Chicken Burgers",
      items: [
        { nombre: "Grilled Chicken Burger", precio: 9.75 },
        { nombre: "Crispy Chicken Burger", precio: 9.75, nota: "Empanizado y crujiente." }
      ]
    },
    {
      categoria: "South of the Border Favorites (comidas)",
      items: [
        { nombre: "Fajita Plate", precio: 15.95, nota: "Res o pollo con arroz y frijoles." },
        { nombre: "Taco Plate", precio: 11.95, nota: "3 tacos con guarniciones." }
      ]
    },
    {
      categoria: "Enchiladas",
      items: [
        { nombre: "Enchiladas Rojas", precio: 11.5, nota: "Queso con salsa roja." },
        { nombre: "Enchiladas de Pollo", precio: 12.25, nota: "Pollo deshebrado y queso." }
      ]
    },
    {
      categoria: "American Tacos & Chalupas",
      items: [
        { nombre: "American Tacos", precio: 9.95, nota: "3 tacos crujientes." },
        { nombre: "Chalupas", precio: 10.5, nota: "2 chalupas con carne molida." }
      ]
    },
    {
      categoria: "Burritos",
      items: [
        { nombre: "Burrito de Carne Guisada", precio: 10.75 },
        { nombre: "Burrito de Pollo", precio: 10.25 }
      ]
    },
    {
      categoria: "Flour Tortillas Tacos",
      items: [
        { nombre: "Tacos de Harina", precio: 10.5, nota: "3 tacos de harina con guiso." }
      ]
    },
    {
      categoria: "Southern Mexican Dishes",
      items: [
        { nombre: "Mole Plate", precio: 13.95, nota: "Pollo con mole y arroz." },
        { nombre: "Chile Relleno", precio: 12.95, nota: "Chile relleno con queso." }
      ]
    },
    {
      categoria: "Tacos & Chalupas a la Mexicana",
      items: [
        { nombre: "Tacos Mexicanos", precio: 11.25, nota: "3 tacos al pastor." },
        { nombre: "Chalupas Mexicanas", precio: 11.5, nota: "2 chalupas con pollo." }
      ]
    },
    {
      categoria: "Southern Tex Chicken & Beef Fajitas",
      items: [
        { nombre: "Chicken Fajitas", precio: 14.95, nota: "Servidas con arroz, frijoles y tortillas." },
        { nombre: "Beef Fajitas", precio: 16.95, nota: "Con guarniciones completas." }
      ]
    },
    {
      categoria: "Quesadillas & Nachos",
      items: [
        { nombre: "Quesadilla", precio: 10.95, nota: "Queso y elección de carne." },
        { nombre: "Nachos", precio: 11.5, nota: "Frijoles, queso, jalapeños y carne." }
      ]
    },
    {
      categoria: "Kids Lunch Menu",
      items: [
        { nombre: "Kids Chicken Tenders", precio: 6.95, nota: "Con papas fritas." },
        { nombre: "Kids Taco", precio: 5.95, nota: "1 taco con arroz y frijoles." }
      ]
    },
    {
      categoria: "Botanas & Parrilladas",
      items: [
        { nombre: "Parrillada Mixta", precio: 24.95, nota: "Para compartir: res, pollo y chorizo." },
        { nombre: "Botana de Fajita", precio: 18.95, nota: "Con queso y guacamole." }
      ]
    },
    {
      categoria: "South of the Border Steaks",
      items: [
        { nombre: "Ribeye", precio: 24.95, nota: "Con arroz, frijoles y tortillas." },
        { nombre: "Sirloin", precio: 21.95, nota: "Corte clásico con guarniciones." }
      ]
    },
    {
      categoria: "Fajita & Seafood Botana Platters",
      items: [
        { nombre: "Fajita Botana", precio: 19.95, nota: "Fajita con queso fundido." },
        { nombre: "Seafood Botana", precio: 20.95, nota: "Camarones y pescado." }
      ]
    },
    {
      categoria: "Buffalo Wings",
      items: [
        { nombre: "6 Wings", precio: 8.5, nota: "Salsa buffalo o BBQ." },
        { nombre: "12 Wings", precio: 14.5, nota: "Acompañadas de ranch." }
      ]
    },
    {
      categoria: "Drinks",
      items: [
        { nombre: "Refresco", precio: 2.95 },
        { nombre: "Iced Tea", precio: 2.75 },
        { nombre: "Café", precio: 2.5 }
      ]
    },
    {
      categoria: "On the Sea Side",
      items: [
        { nombre: "Shrimp Plate", precio: 15.95, nota: "Camarones empanizados." },
        { nombre: "Fish Plate", precio: 14.95, nota: "Filete de pescado." }
      ]
    },
    {
      categoria: "Blackened Fish",
      items: [
        { nombre: "Blackened Fish Tacos", precio: 13.95, nota: "3 tacos con salsa especial." }
      ]
    },
    {
      categoria: "Mexican Style",
      items: [
        { nombre: "Pescado a la Mexicana", precio: 15.95, nota: "Con tomate, cebolla y chile." }
      ]
    },
    {
      categoria: "Rodeo Platter",
      items: [
        { nombre: "Rodeo Platter", precio: 18.95, nota: "Combinación de carnes y guarniciones." }
      ]
    },
    {
      categoria: "Lunch Specials (Mon-Fri 11-2)",
      items: [
        { nombre: "Special #1", precio: 9.95, nota: "Taco plate con arroz y frijoles." },
        { nombre: "Special #2", precio: 10.95, nota: "Enchiladas con guarniciones." }
      ]
    },
    {
      categoria: "Night Specials (Wed-Thu-Fri 4-8)",
      items: [
        { nombre: "Night Special #1", precio: 12.95, nota: "Fajita plate con tortillas." },
        { nombre: "Night Special #2", precio: 13.95, nota: "Parrillada para dos." }
      ]
    },
    {
      categoria: "Desserts",
      items: [
        { nombre: "Flan", precio: 5.5 },
        { nombre: "Tres Leches", precio: 5.95 },
        { nombre: "Sopapillas", precio: 4.95, nota: "Con miel y canela." }
      ]
    },
    {
      categoria: "Ice Cream",
      items: [
        { nombre: "Vanilla", precio: 3.5 },
        { nombre: "Chocolate", precio: 3.5 },
        { nombre: "Fresa", precio: 3.5 }
      ]
    }
  ]
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const formatPrice = (price) => {
  if (typeof price === "number") {
    return `$${price.toFixed(2)}`;
  }
  return price || "";
};

const renderHistoria = () => {
  const container = document.getElementById("historiaContent");
  container.innerHTML = "";
  CONFIG.historia.forEach((texto) => {
    const p = document.createElement("p");
    p.textContent = texto;
    container.appendChild(p);
  });
};

const renderHorarios = () => {
  const list = document.getElementById("horarios");
  list.innerHTML = "";
  Object.entries(CONFIG.horarios).forEach(([dia, horario]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${dia}:</strong> ${horario}`;
    list.appendChild(li);
  });
};

const renderMenu = () => {
  const container = document.getElementById("menuContent");
  container.innerHTML = "";

  CONFIG.menu.forEach((category) => {
    const section = document.createElement("article");
    section.className = "menu-category";

    const title = document.createElement("h3");
    title.textContent = category.categoria;

    section.appendChild(title);

    category.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "menu-item";

      const name = document.createElement("div");
      name.className = "menu-item__name";
      name.textContent = item.nombre;

      const price = document.createElement("div");
      price.className = "menu-item__price";
      price.textContent = formatPrice(item.precio);

      row.append(name, price);

      if (item.nota) {
        const note = document.createElement("div");
        note.className = "menu-item__note";
        note.textContent = item.nota;
        row.appendChild(note);
      }

      section.appendChild(row);
    });

    container.appendChild(section);
  });
};

const renderAcciones = () => {
  const whatsappButton = document.getElementById("whatsappButton");
  whatsappButton.href = `https://wa.me/${CONFIG.whatsapp}`;

  const crmButton = document.getElementById("crmButton");
  if (CONFIG.crmUrl) {
    crmButton.href = CONFIG.crmUrl;
    crmButton.removeAttribute("aria-disabled");
  } else {
    crmButton.classList.add("btn--disabled");
  }

  const qrImage = document.getElementById("qrImage");
  const qrPlaceholder = document.getElementById("qrPlaceholder");

  qrImage.addEventListener("error", () => {
    qrImage.style.display = "none";
    qrPlaceholder.style.display = "grid";
  });

  qrImage.addEventListener("load", () => {
    qrPlaceholder.style.display = "none";
  });
};

const init = () => {
  setText("restaurantName", CONFIG.nombre);
  setText("restaurantSubtitle", CONFIG.subtitulo);
  setText("direccion", CONFIG.direccion);
  setText("ciudadEstado", CONFIG.ciudadEstado);
  setText("telefono", CONFIG.telefono);
  setText("notasMenu", CONFIG.notasMenu);

  renderHistoria();
  renderHorarios();
  renderMenu();
  renderAcciones();
};

init();
