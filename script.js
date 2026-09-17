//your code here!
// Get the list container element
const list = document.getElementById("infi-list");

// Keep track of item indices
let itemCount = 1;

// Function to add a specific number of items to the list
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
    itemCount++;
  }
}

// Add 10 items by default on page load
addItems(10);

// Add 2 more items automatically when the user reaches the end of the list
window.addEventListener("scroll", () => {
  // Check if user has scrolled to the bottom of the visible page
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
    addItems(2);
  }
});

