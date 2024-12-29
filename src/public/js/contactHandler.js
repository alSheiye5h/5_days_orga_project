const overlay = document.getElementById("overlay");
const container55 = document.getElementById("contact");
const dropdown = document.getElementById("dropdown");
const cancel = document.getElementById("cancel");

const sendorder = document.getElementById("sendorder");
const loading = document.getElementById("loading");

const err1 = document.getElementById("err1");
const err2 = document.getElementById("err2");
const err3 = document.getElementById("err3");
const err4 = document.getElementById("err4");
const err5 = document.getElementById("err5");
const err6 = document.getElementById("err6");

document.addEventListener("DOMContentLoaded", () => {
  let dropdwn = "";

  const consulters = [
    {
      element: document.getElementById("consulter1"),
      name: "consulter1",
      task: () => (dropdwn = "photoid"),
    },
    {
      element: document.getElementById("consulter2"),
      name: "consulter2",
      task: () => (dropdwn = "shootmod"),
    },
    {
      element: document.getElementById("consulter3"),
      name: "consulter3",
      task: () => (dropdwn = "shootfam"),
    },
    {
      element: document.getElementById("consulter4"),
      name: "consulter4",
      task: () => (dropdwn = "shootobj"),
    },
    {
      element: document.getElementById("consulter5"),
      name: "consulter5",
      task: () => (dropdwn = "shooteve"),
    },
    {
      element: document.getElementById("consulter6"),
      name: "consulter6",
      task: () => (dropdwn = "ext"),
    },
  ];

  const container55 = document.getElementById("contact");
  const overlay = document.getElementById("overlay");
  const dropdown = document.getElementById("dropdown");

  consulters.forEach((consulter) => {
    if (consulter.element) {
      consulter.element.addEventListener("click", (e) => {
        consulter.task();

        container55.style.display = "flex";
        overlay.style.display = "block";

        dropdown.value = dropdwn;

        console.log(`Dropdown set to: ${dropdwn}`);
      });
    } else {
      console.warn(`Element with ID ${consulter.name} not found.`);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target == overlay || e.target == cancel) {
      container55.style.display = "none";
      overlay.style.display = "none";
      loading.style.display = "none";
      [err1, err2, err3, err4, err5, err6].map((e) => {
        e.style.display = "none";
      });
    }
  });

  sendorder.addEventListener("click", async (e) => {
    e.preventDefault();

    loading.style.display = "block";

    try {
      const type = document.getElementById("dropdown").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("addr").value;
      const code = document.getElementById("zip").value;
      const message = document.getElementById("msg").value;

      const payload = { type, phone, address, code, message };

      const response = await fetch("http://localhost:3001/api/v1/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log(data);
      console.log(`Response Status: ${response.status}`);

      if (response.ok) {
        loading.style.display = "none";
        alert("Order successfully created!");
      } else {
        loading.style.display = "none";

        if (response.status === 333) {
          err6.style.display = "block";
        } else if (response.status === 334) {
          err2.style.display = "block";
        } else if (response.status === 335) {
          err1.style.display = "block";
        } else if (response.status === 336) {
          err3.style.display = "block";
        } else if (response.status === 337) {
          err4.style.display = "block";
        } else {
        }
      }
    } catch (err) {
      console.error("Request failed:", err);
      alert("Failed to connect to the server. Please try again later.");
      loading.style.display = "none";
    }
  });
});
