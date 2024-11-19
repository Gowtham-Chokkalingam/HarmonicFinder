// navbar

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

const Retracement = [1.13, 1.272, 1.414, 1.618];
const XB = [0.3, 0.7];
const XD = {
  1.13: [
    {
      value: 0.886,
      type: "Shark",
      type: "Shark",
      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",

      comments: "",
    },
    {
      value: 1.13,
      type: "Alt Shark",
      img: "https://www.shutterstock.com/image-vector/smiling-shark-cartoon-mascot-character-260nw-2415068577.jpg",
      comments: "Prev Fails",
    },
    {
      value: 1.272,
      type: "Ext Shark",
      img: "https://cdn.vectorstock.com/i/500p/41/38/smiling-shark-cartoon-vector-894138.jpg",

      comments: "Prev Fails",
    },
  ],
  1.272: [
    {
      value: 0.786,
      type: "Cyper",
      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",
      comments: "",
    },
    {
      value: 0.886,
      type: "Shark",
      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",

      comments: "Prev Fails",
    },
    {
      value: 1.13,
      type: "Alt Shark",
      img: "https://www.shutterstock.com/image-vector/smiling-shark-cartoon-mascot-character-260nw-2415068577.jpg",

      comments: "Prev Fails",
    },
  ],
  1.414: [
    {
      value: 0.786,
      type: "Cyper",
      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",
      comments: "",
    },
    {
      value: 0.886,
      type: "Shark",

      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",

      comments: "Prev Fails",
    },
    {
      value: 1.13,
      type: "Alt Shark",
      img: "https://www.shutterstock.com/image-vector/smiling-shark-cartoon-mascot-character-260nw-2415068577.jpg",

      comments: "Prev Fails",
    },
  ],
  1.618: [
    {
      value: 0.886,
      type: "Shark",
      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",
      comments: "",
    },
    {
      value: 1.13,
      type: "Alt Shark",
      img: "https://www.shutterstock.com/image-vector/smiling-shark-cartoon-mascot-character-260nw-2415068577.jpg",
      comments: "Prev Fails",
    },
    {
      value: 1.272,
      type: "Ext Shark",
      img: "https://cdn.vectorstock.com/i/500p/41/38/smiling-shark-cartoon-vector-894138.jpg",
      comments: "Prev Fails",
    },
  ],
  1.272: [
    {
      value: 0.786,
      type: "Cyper",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJQ99E7lml55Jt8tWXxcKyvlqftpGoP5kcQ&s",
      comments: "",
    },
    {
      value: 0.886,
      type: "Shark",

      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",

      comments: "Prev Fails",
    },
    {
      value: 1.13,
      type: "Alt Shark",
      img: "https://www.shutterstock.com/image-vector/smiling-shark-cartoon-mascot-character-260nw-2415068577.jpg",

      comments: "Prev Fails",
    },
  ],
  1.414: [
    {
      value: 0.786,
      type: "Cyper",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJQ99E7lml55Jt8tWXxcKyvlqftpGoP5kcQ&s",

      comments: "",
    },
    {
      value: 0.886,
      type: "Shark",

      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",

      comments: "Prev Fails",
    },
    {
      value: 1.13,
      type: "Alt Shark",
      img: "https://www.shutterstock.com/image-vector/smiling-shark-cartoon-mascot-character-260nw-2415068577.jpg",

      comments: "Prev Fails",
    },
  ],
  0.9: [
    {
      value: 1.272,
      type: "Ext Shark",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJQ99E7lml55Jt8tWXxcKyvlqftpGoP5kcQ&s",

      comments: "",
    },
    {
      value: 1.618,
      type: "ExtendShark",

      img: "https://e7.pngegg.com/pngimages/1/628/png-clipart-shark-cartoon-shark-marine-mammal-animals.png",

      comments: "Prev Fails",
    },
    {
      value: 2.618,
      type: "Deep Shark",
      img: "https://www.shutterstock.com/image-vector/smiling-shark-cartoon-mascot-character-260nw-2415068577.jpg",

      comments: "Prev Fails",
    },
  ],
};

const instructions = [
  { instruction: "Draw Fib Retracement on X to A , mark projection value of XB-AC" },
  { instruction: "Draw Fib Retracement on B to C leg , mark nearest FIB value to D Point" },
];
// Function to handle the Enter key press
function handleKeyPress(event) {
  if (event.key === "Enter") {
    findNearestValue();
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

function findNearestValue() {
  const compareValueXB = parseFloat(document.getElementById("compareInputXB").value);
  const compareValueAC = parseFloat(document.getElementById("compareInputAC").value);

  if (isNaN(compareValueXB) || compareValueXB <= 0.3 || compareValueXB >= 0.97) {
    showPopupMessage("Please enter XB a valid number greater than 0.3 and less than 0.97.");
    document.getElementById("compareInputXB").value = null;
    document.getElementById("compareInputAC").value = null;
    document.getElementById("resultsTable").innerHTML = null;
    document.getElementById("instructions").innerHTML = null;

    return;
  }
  if (isNaN(compareValueAC) || compareValueAC < 1 || compareValueAC > 2) {
    showPopupMessage("Please enter AC a valid number greater than 1 and less than 2.");
    document.getElementById("compareInputXB").value = null;
    document.getElementById("compareInputAC").value = null;
    document.getElementById("resultsTable").innerHTML = null;
    document.getElementById("instructions").innerHTML = null;

    return;
  }
  let finalNearestValue = 0;
  if (compareValueXB < 0.7) {
    finalNearestValue = Retracement.reduce((closest, current) => {
      // Calculate the difference between current value and compareValueAC
      const difference = current - compareValueAC;

      // If the current difference is positive and smaller than the closest difference, update the closest value
      if (difference > 0 && (closest === null || difference < closest - compareValueAC)) {
        return current;
      }

      // Otherwise, keep the existing closest value
      return closest;
    }, null);
  } else {
    finalNearestValue = 0.9;
  }
  document.getElementById("nearestValueOutput").textContent = `Nearest Retracement Value: ${finalNearestValue}`;

  // Get the XD values for the nearest retracement
  const xdValues = XD[finalNearestValue];

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
