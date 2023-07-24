function myToggle() {
  var element = document.getElementById("navbarNav");
  element.classList.toggle("show");
}

// Load your images on page-load
function preloader() {
  const imagesList = [
     "./img/pexels-pixabay-159397.jpg",
     "./img/pexels-singkham-1108572.jpg",
     "./img/pexels-pixabay-414837.jpg"
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
      images[i] = new Image();
      images[i].src = imagesList[i];
  }

  // Images ready to be used:
  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

// Resource Object
const resourceObject = {
  energy_storage: {
      headingContent: "Energy Storage",
      bodyText: "Using energy storage solutions such as batteries into clean energy systems can enhance reliability and reduce overall costs. Energy storage allows for extra energy to be stored and used during peak periods avoiding the need for expensive backup power sources and optimizing the use of clean energy resources.",
      imgUrl: "./img/pexels-pixabay-159397.jpg",
      imgAlt: "Energy Storage"
  },
  flexible_financing_options: {
      headingContent: "Flexible Financing Options",
      bodyText: "Financial institutions can develop specialized financing plans meant to clean energy projects. These plans may include low-interest loans, longer repayment terms, or performance-based financing options that make loan payments to energy savings. Flexible financing can decrease the burden of high upfront costs and encourage widespread adoption of clean energy technologies.",
      imgUrl: "./img/pexels-singkham-1108572.jpg",
      imgAlt: "Flexible Financing Options"
  },
  education_awareness: {
      headingContent: "Education Awareness",
      bodyText: "Awareness about the benefits of clean energy and its long-term cost savings can encourage greater public demand and support. Educational campaigns and outreach programs can inform individuals about the potential financial advantages of transitioning to clean energy, motivating more people to invest in renewable energy technologies for their homes and businesses.",
      imgUrl: "./img/pexels-pixabay-414837.jpg",
      imgAlt: "Education Awareness"
  }
};

const btn1 = document.getElementById("energy_storage");
const btn2 = document.getElementById("flexible_financing_options");
const btn3 = document.getElementById("education_awareness");
const solutionContainer = document.getElementById("solution-container");
const solutionHeading = document.getElementById("solution-heading");
const solutionImg = document.getElementById("solution-img");
const solutionText = document.getElementById("solution-text");

function handleSelection(event) {
  // Remove active-button class from all buttons
  btn1.classList.remove("active-button");
  btn2.classList.remove("active-button");
  btn3.classList.remove("active-button");

  // Set active-button class to the clicked button
  event.target.classList.add("active-button");

  // Get the id of the clicked button
  const selectedButtonId = event.target.id;

  // Get the corresponding solution from the resourceObject
  const selectedSolution = resourceObject[selectedButtonId];

  // Update the content in the solution container
  solutionHeading.innerText = selectedSolution.headingContent;
  solutionImg.src = selectedSolution.imgUrl;
  solutionImg.alt = selectedSolution.imgAlt;
  solutionText.innerText = selectedSolution.bodyText;
}

// Register all buttons to click event
btn1.addEventListener("click", handleSelection);
btn2.addEventListener("click", handleSelection);
btn3.addEventListener("click", handleSelection);