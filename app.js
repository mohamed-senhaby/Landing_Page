/**
*sectionNumber To clarify the number of sections
*/
let sectionNumber = 0;
const newSection = () => {
    sectionNumber++;
  const content = `<section id="section${sectionNumber}" data-nav="Section ${sectionNumber}">
    <div class="landing__container">
    <h2>Section ${sectionNumber}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};
/**
 * To add new li in #navbar__list every time i want to add a new Section
 */

 const navBar = document.getElementById("navbar__list");
 const createNavItems = () => {
   navBar.innerHTML = "";
   document.querySelectorAll("section").forEach((section) => {
     const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
     navBar.insertAdjacentHTML("beforeend", listItem);
   });
 };



/**
 * create by defult four-section
 */
for (let i = 1; i < 5; i++) newSection();
createNavItems();

// creating more sections by click on the button
document.getElementById("add_section").addEventListener("click", () => {
    newSection();
  createNavItems();
});

/*
*Make the navigation bar hidden when i scroll down by using addEventListener
*/
const nav = document.querySelector(".page__header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });