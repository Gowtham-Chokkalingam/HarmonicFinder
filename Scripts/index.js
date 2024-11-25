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
const Retracement = [0.236, 0.382, 0.5, 0.618, 0.707, 0.786, 0.886];
const ProjectionValue = {
  0.236: 3.0,
  0.382: 2.618,
  0.5: 2.0,
  0.618: 1.618,
  0.707: 1.414,
  0.786: 1.272,
  0.886: 1.13,
};
const instructions = [
  { instruction: "Draw Fib Retracement on B to C leg, Mark projection value AC" },

  { instruction: "Draw trend based Fib extension on ABC leg, mark the nearest fib value 1" },
  { instruction: "If Value 1 Fails -> Draw the trend based fib retracement on ABC leg.Mark the fib value of 1.272 " },
  { instruction: "If Value 1.272 Fails ->  Draw trend based Fib extension on ABC leg, mark the nearest fib value 1.618" },
];

// Function to populate the Projection table with data
function populateProjectionTable() {
  const tableBody = document.getElementById("projectionTableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  for (const [retracement, projection] of Object.entries(ProjectionValue)) {
    const row = document.createElement("tr");

    const cellRetracement = document.createElement("td");
    cellRetracement.textContent = retracement;

    const cellProjection = document.createElement("td");
    cellProjection.textContent = projection;

    row.appendChild(cellRetracement);
    row.appendChild(cellProjection);

    tableBody.appendChild(row);
  }
}

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
  // Get the compare value from the input field
  const compareValue = parseFloat(document.getElementById("compareInput").value);

  // Check if compareValue is a valid number and within the specified range
  if (isNaN(compareValue) || compareValue <= 0 || compareValue >= 1) {
    showPopupMessage("Please enter a valid number greater than 0 and less than 1.");
    return;
  }

  // Find the nearest value in the Retracement array
  const nearestValue = Retracement.reduce((closest, current) => {
    // Check for an exact match first
    if (current === compareValue) {
      return current; // Return the exact match immediately
    }
      // Otherwise, calculate the differences
    const diffCurrent = current - compareValue;
    const diffClosest = closest - compareValue;

    // Choose `current` if its difference is closer to zero than `closest`'s difference
    return (diffCurrent >= 0 && diffCurrent < diffClosest) || (diffCurrent < 0 && diffClosest < 0 && diffCurrent > diffClosest) ? current : closest;
  });

  // Get the corresponding projection value based on the nearest value found
  const projection = ProjectionValue[nearestValue];

  // Display the results
  document.getElementById("nearestValueOutput").textContent = `Nearest Retracement Value: ${nearestValue}`;
  document.getElementById("projectionValueOutput").textContent = `Projection Value AC: ${projection}`;

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

// Populate the projection table on page load
// populateProjectionTable();
