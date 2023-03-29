const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const ratingDisplay = document.querySelector("#rating-display");
const commentDisplay = document.querySelector("#comment-display");
const newRamenForm = document.querySelector("#new-ramen");

// Display all ramen images
window.addEventListener("load", () => {
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramenList) => {
      ramenList.forEach((ramen) => {
        const ramenImg = document.createElement("img");
        ramenImg.src = ramen.image;
        ramenImg.addEventListener("click", () => {
          displayRamenDetail(ramen);
        });
        ramenMenu.appendChild(ramenImg);
      });
    });
});

// Display the details of a clicked ramen
function displayRamenDetail(ramen) {
  ramenDetail.querySelector(".detail-image").src = ramen.image;
  ramenDetail.querySelector(".name").textContent = ramen.name;
  ramenDetail.querySelector(".restaurant").textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}

// Create a new ramen
newRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newRamen = {
    name: event.target.elements.name.value,
    restaurant: event.target.elements.restaurant.value,
    image: event.target.elements.image.value,
    rating: event.target.elements.rating.value,
    comment: event.target.elements.comment.value,
  };
  const ramenImg = document.createElement("img");
  ramenImg.src = newRamen.image;
  ramenImg.addEventListener("click", () => {
    displayRamenDetail(newRamen);
  });
  ramenMenu.appendChild(ramenImg);
});

// Update the featured ramen
const editRamenForm = document.querySelector("#edit-ramen");
editRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newRating = event.target.elements.rating.value;
  const newComment = event.target.elements.comment.value;
  ratingDisplay.textContent = newRating;
  commentDisplay.textContent = newComment;
});