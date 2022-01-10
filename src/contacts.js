/**
 * Тут в основном алгоритмическая проблема, нам нет смысла обходить все элементы каждый раз.
 * Но при её решении можно неплохо пострелять себе в ногу
 */
const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

// TODO: плохой вариант
contacts.addEventListener("scroll", (e) => {
  const items = Array.from(contacts.getElementsByClassName("contact"));
  const itemOffsets = items.map((item) => item.offsetTop);
  const topItemIndex = itemOffsets.findIndex(
    (offset) => contacts.scrollTop - offset <= -18
  );
  if (topItemIndex !== -1) {
    stickyHeader.textContent = items[topItemIndex].textContent;
  }
});

// TODO: хороший вариант
// contacts.addEventListener("scroll", () => {
//   stickyHeader.textContent = Math.floor(contacts.scrollTop / 18);
// });

addContacts();

// TODO: другой потенциально хороший вариант, выполнять строго после addContacts
// const items = Array.from(contacts.getElementsByClassName("contact"));
// const itemOffsets = items.map((item) => item.offsetTop);

// contacts.addEventListener("scroll", (e) => {
//   const topItemIndex = itemOffsets.findIndex(
//     (offset) => contacts.scrollTop - offset <= -18
//   );
//   if (topItemIndex !== -1) {
//     stickyHeader.textContent = items[topItemIndex].textContent;
//   }
// });