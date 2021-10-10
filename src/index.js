import "./style.css";
import bgImg from "./imgs/background.jpg";

const page_load = () => {
  const content = document.querySelector("#content");

  //Load Background Image
  const bg = new Image();
  bg.src = bgImg;
  bg.classList.add("backgroudImg");
  content.appendChild(bg);

  // Main DOM Creation
  const $header = document.createElement("header");
  const $nav = document.createElement("nav");
  const $home = document.createElement("div");
  const $menu = document.createElement("div");
  const $contact = document.createElement("div");
  $header.textContent = "Pizzeria";

  $header.classList.add("header");
  $nav.classList.add("nav");
  $home.id = "home";
  $home.classList.add("show");
  $menu.id = "menu";
  $contact.id = "contact";
  const main = [$header, $nav, $home, $menu, $contact];
  main.forEach((ele) => content.appendChild(ele));

  //Nav DOM Creation
  const $nav_home = document.createElement("div");
  const $nav_menu = document.createElement("div");
  const $nav_contact = document.createElement("div");
  $nav_home.classList.add("home");
  $nav_menu.classList.add("menu");
  $nav_contact.classList.add("contact");
  $nav_home.textContent = "Home";
  $nav_menu.textContent = "Menu";
  $nav_contact.textContent = "Contact";
  $nav.appendChild($nav_home);
  $nav.appendChild($nav_menu);
  $nav.appendChild($nav_contact);

  //Home DOM Creation
  const $home_title = document.createElement("h1");
  const $home_content = document.createElement("p");
  $home_title.classList.add("home_title");
  $home_content.classList.add("home_content");
  $home_title.textContent = "About";
  $home_content.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates    explicabo error soluta sint quasi ex consectetur officia commodi earum est dolor, quaerat dolorem illum cupiditate esse perferendis impedit tempore laudantium. Fugiat aliquam consequuntur at deserunt praesentium maxime temporibus deleniti iure laborum excepturi animinecessitatibus, qui eligendi! A pariatur excepturi esse quos earum  unde dolorum officiis praesentium? Vero eius nobis explicabo? At sintullam dolore dolorum, quaerat provident. Molestias, deseruntrepellendus? Dignissimos harum minus cum? Nesciunt cupiditate illo sapiente accusantium saepe cumque laborum id, magni in atque. Ullamest dolor repellendus?";

  $home.appendChild($home_title);
  $home.appendChild($home_content);

  //Menu DOM Creation
  for (let i = 0; i < 5; i++) {
    const item = document.createElement("div");
    const item_name = document.createElement("div");
    const item_price = document.createElement("div");
    item.classList.add(`item`);
    item_name.classList.add(`item_name-${i}`);
    item_name.classList.add(`itemsName`);
    item_price.classList.add(`item_price-${i}`);
    item_price.classList.add(`itemsPrice`);
    item.appendChild(item_name);
    item.appendChild(item_price);
    $menu.appendChild(item);
  }

  document.querySelector(".item_name-0").textContent = "Pizza Mariana";
  document.querySelector(".item_name-1").textContent = "Pizza Margherita";
  document.querySelector(".item_name-2").textContent = "Chicago Pizza";
  document.querySelector(".item_name-3").textContent = "NY Style Pizza";
  document.querySelector(".item_name-4").textContent = "Scicilian Pizza";

  document.querySelector(".item_price-0").textContent = "$14.95";
  document.querySelector(".item_price-1").textContent = "$14.95";
  document.querySelector(".item_price-2").textContent = "$16.95";
  document.querySelector(".item_price-3").textContent = "$13.95";
  document.querySelector(".item_price-4").textContent = "$15.95";

  // Contact DOM Creation
  const $contact_title = document.createElement("h1");
  const $contact_phoneNumber = document.createElement("div");
  const $contact_email = document.createElement("div");
  const $contact_location = document.createElement("div");
  $contact_title.classList.add("contact_title");
  $contact_phoneNumber.classList.add("contact_phoneNumber");
  $contact_email.classList.add("contact_email");
  $contact_location.classList.add("contact_location");
  $contact_title.textContent = "Contact";
  $contact_phoneNumber.textContent = "000-000-0000";
  $contact_email.textContent = "pizzeria@pizzeria.com";
  $contact_location.textContent = "123 King Street V1R 1V1, NY, USA";
  $contact.appendChild($contact_title);
  $contact.appendChild($contact_phoneNumber);
  $contact.appendChild($contact_email);
  $contact.appendChild($contact_location);
};

//Event Listeners
const eventEmit = () => {
  const $homeBtn = document.querySelector(".home");
  const $menuBtn = document.querySelector(".menu");
  const $contactBtn = document.querySelector(".contact");
  const $homeContent = document.querySelector("#home");
  const $menuContent = document.querySelector("#menu");
  const $contactContent = document.querySelector("#contact");

  function toggleMenu(e) {
    const contents = [$homeContent, $menuContent, $contactContent];

    contents.forEach((content) => {
      e.target.classList[0] === content.id
        ? (content.style.display = "flex")
        : (content.style.display = "none");
    });
  }

  $homeBtn.addEventListener("click", toggleMenu);
  $menuBtn.addEventListener("click", toggleMenu);
  $contactBtn.addEventListener("click", toggleMenu);
};

page_load();
eventEmit();
