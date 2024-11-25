fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // After navbar is loaded, highlight the active link
    highlightActiveNavLink();
  });

// Function to highlight the active link in the navbar
function highlightActiveNavLink() {
  const navLinks = {
    "AC-Finder": "/",
    "Group1-Finder": "/group1",
    "Group2-Finder": "/group2",
  };

  // Get the current path
  const currentPath = window.location.pathname;
  console.log("Current Path:", currentPath);

  // Loop through the navLinks and add/remove the active class
  for (const [linkId, linkPath] of Object.entries(navLinks)) {
    const linkElement = document.getElementById(linkId);
    console.log("Checking link:", linkId, "Path:", linkPath, "Element:", linkElement);

    if (linkElement) {
      if (currentPath.endsWith(linkPath)) {
        linkElement.classList.add("active");
        console.log("Added active class to:", linkId);
      } else {
        linkElement.classList.remove("active");
        console.log("Removed active class from:", linkId);
      }
    } else {
      console.warn("No element found with id:", linkId);
    }
  }
}
const Retracement = [0.382, 0.5, 0.618, 0.786, 0.886];
const XD = {
  0.382: [
    {
      value: 0.886,
      type: "Bat",
      img: "https://thumbs.dreamstime.com/b/cute-baby-bat-cartoon-tattoo-design-black-vector-illustration-isolated-white-background-cute-baby-bat-cartoon-tattoo-design-320740769.jpg",
      comments: "",
    },
    {
      value: 1.13,
      type: "Alt Bat",
      img: "https://t3.ftcdn.net/jpg/09/04/96/00/360_F_904960052_t0BDBYccc3BNG5u9rj5pC8YHddWtgS8T.jpg",
      comments: "Prev Fails",
    },
    {
      value: 1.618,
      type: "Crab",
      img: "https://media.istockphoto.com/id/1164392644/vector/crab-character-smiling-with-big-claws-on-a-white.jpg?s=612x612&w=0&k=20&c=79Ik5YMEDu6WnCJAV9ozlSwyB8SvjBsWoaQ5hVAFFVg=",
      comments: "Prev Fails",
    },
  ],
  0.5: [
    {
      value: 0.886,
      type: "Bat",
      img: "https://thumbs.dreamstime.com/b/cute-baby-bat-cartoon-tattoo-design-black-vector-illustration-isolated-white-background-cute-baby-bat-cartoon-tattoo-design-320740769.jpg",
      comments: "",
    },
    {
      value: 1.13,
      type: "Alt Bat",
      img: "https://t3.ftcdn.net/jpg/09/04/96/00/360_F_904960052_t0BDBYccc3BNG5u9rj5pC8YHddWtgS8T.jpg",
      comments: "Prev Fails",
    },
    {
      value: 1.618,
      type: "Crab",
      img: "https://media.istockphoto.com/id/1164392644/vector/crab-character-smiling-with-big-claws-on-a-white.jpg?s=612x612&w=0&k=20&c=79Ik5YMEDu6WnCJAV9ozlSwyB8SvjBsWoaQ5hVAFFVg=",
      comments: "Prev Fails",
    },
  ],
  0.618: [
    {
      value: 0.786,
      type: "Gartley",
      img: "https://pbs.twimg.com/profile_images/1292894785964068866/ryCpLy6l_400x400.jpg",
      comments: "",
    },
    {
      value: 0.886,
      type: "Alt Gartley",
      img: "https://pbs.twimg.com/profile_images/1292894785964068866/ryCpLy6l_400x400.jpg",
      comments: "Prev Fails",
    },
    {
      value: 1.618,
      type: "Crab",
      img: "https://media.istockphoto.com/id/1164392644/vector/crab-character-smiling-with-big-claws-on-a-white.jpg?s=612x612&w=0&k=20&c=79Ik5YMEDu6WnCJAV9ozlSwyB8SvjBsWoaQ5hVAFFVg=",
      comments: "Prev Fails",
    },
  ],
  0.786: [
    {
      value: 1.272,
      type: "Butterfly",
      img: "https://static.vecteezy.com/system/resources/thumbnails/046/498/192/small_2x/cartoon-butterfly-isolated-on-transparent-background-colorful-and-detailed-nature-illustration-png.png",
      comments: "",
    },
    {
      value: 1.618,
      type: "Crab",
      img: "https://media.istockphoto.com/id/1164392644/vector/crab-character-smiling-with-big-claws-on-a-white.jpg?s=612x612&w=0&k=20&c=79Ik5YMEDu6WnCJAV9ozlSwyB8SvjBsWoaQ5hVAFFVg=",
      comments: "Prev Fails",
    },
  ],
  0.886: [
    {
      value: 1.618,
      type: "Crab",
      img: "https://media.istockphoto.com/id/1164392644/vector/crab-character-smiling-with-big-claws-on-a-white.jpg?s=612x612&w=0&k=20&c=79Ik5YMEDu6WnCJAV9ozlSwyB8SvjBsWoaQ5hVAFFVg=",
      comments: "",
    },
    {
      value: 2.818,
      type: "Deep Crab",
      img: "https://as1.ftcdn.net/v2/jpg/00/70/49/52/1000_F_70495217_LbWWFAnHq8cGLXEqUnsA0WvvWMMRaTom.jpg",
      comments: "Prev Fails",
    },
  ],
};
const instructions = [
  { instruction: "Draw Fib Retracement on X to A, Mark Projection Value XB" },
  { instruction: "Draw Fib Retracement on B to C leg, Mark nearest fib value to D Point" },
  { instruction: "Draw trend based Fib extension on ABC leg, mark the nearest fib value to the D point" },
];

function showPopupMessage(message) {
  const popup = document.getElementById("popupMessage");
  popup.textContent = message;
  popup.classList.add("show");

  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}
// Function to handle the Enter key press
function handleKeyPress(event) {
  if (event.key === "Enter") {
    findNearestValue();
  }
}

function findNearestValue() {
  const compareValue = parseFloat(document.getElementById("compareInput").value);

  if (isNaN(compareValue) || compareValue <= 0.3 || compareValue >= 0.9) {
    showPopupMessage("Please enter a valid number greater than 0.3 and less than 0.9.");
    return;
  }

  const nearestValue = Retracement.reduce((closest, current) => {
    return Math.abs(current - compareValue) < Math.abs(closest - compareValue) ? current : closest;
  });

  document.getElementById("nearestValueOutput").textContent = `Nearest Retracement Value: ${nearestValue}`;

  // Get the XD values for the nearest retracement
  const xdValues = XD[nearestValue];

  // Create a table for the results
  const tableHTML = `
  <table>
    <thead>
      <tr>
        <th>XD Value</th>
        <th>Type</th>
    
        <th>Image</th>
        <th>Check</th>
      </tr>
    </thead>
    <tbody>
      ${xdValues
        .map(
          (entry, index) => `
        <tr>
          <td>${entry.value}</td>
          <td>${entry.type}</td>
          
          <td><img src="${entry.img}" alt="${entry.type}" /></td>
          <td>${entry.comments}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
`;

  // Display the table
  document.getElementById("resultsTable").innerHTML = tableHTML;

  // Display the Instructions

  const instructionsHTML = `
  <table>
    <thead>
      <tr>
        <th>Step</th>
        <th>Instructions</th>
    
      </tr>
    </thead>
    <tbody>
      ${instructions
        .map(
          (entry, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${entry.instruction}</td>
          
       
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
`;
  document.getElementById("instructions").innerHTML = instructionsHTML;
}
