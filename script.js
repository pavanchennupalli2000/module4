document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("loadDataButton");
  const contentDiv = document.getElementById("content");

  button.addEventListener("click", function () {
    // Simulate loading data
    const data = [
      { name: "Item 1", description: "This is the first item." },
      { name: "Item 2", description: "This is the second item." },
      { name: "Item 3", description: "This is the third item." },
    ];

    // Clear previous content
    contentDiv.innerHTML = "";

    // Display the data
    data.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
      contentDiv.appendChild(itemDiv);
    });
  });
});
