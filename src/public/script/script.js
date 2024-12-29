const faceId = document.getElementById("Face-ID");
const photoIdent = document.getElementById("photoIdent");

const shootModel = document.getElementById("shootModel");
const shotmodsvg = document.getElementById("shotmodsvg");

const thirdobj = document.getElementById("thirdobj");
const thirdobjsvg = document.getElementById("thirdobjsvg");

const fourthobj = document.getElementById("fourthobj");
const fourthobjsvg = document.getElementById("fourthobjsvg");

const fifthobj = document.getElementById("fifthobj");
const fifthobjsvg = document.getElementById("fifthobjsvg");

photoIdent.addEventListener("mouseenter", () => {
  faceId.setAttribute("fill", "black");
});

photoIdent.addEventListener("mouseleave", () => {
  faceId.setAttribute("fill", "white");
});

shootModel.addEventListener("mouseenter", () => {
  shotmodsvg.setAttribute("fill", "black");
});

shootModel.addEventListener("mouseleave", () => {
  shotmodsvg.setAttribute("fill", "white");
});

shootModel.addEventListener("mouseenter", () => {
  shotmodsvg.setAttribute("fill", "black");
});

shootModel.addEventListener("mouseleave", () => {
  shotmodsvg.setAttribute("fill", "white");
});

thirdobj.addEventListener("mouseenter", () => {
  thirdobjsvg.setAttribute("fill", "black");
});

thirdobj.addEventListener("mouseleave", () => {
  thirdobjsvg.setAttribute("fill", "white");
});

fourthobj.addEventListener("mouseenter", () => {
  fourthobjsvg.setAttribute("fill", "black");
});

fourthobj.addEventListener("mouseleave", () => {
  fourthobjsvg.setAttribute("fill", "white");
});

fifthobj.addEventListener("mouseenter", () => {
  fifthobjsvg.setAttribute("fill", "black");
});

fifthobj.addEventListener("mouseleave", () => {
  fifthobjsvg.setAttribute("fill", "white");
});

const consulter1 = document.getElementById("consulter1");
const consulter2 = document.getElementById("consulter2");
const consulter3 = document.getElementById("consulter3");
const consulter4 = document.getElementById("consulter4");
const consulter5 = document.getElementById("consulter5");
const consulter6 = document.getElementById("consulter6");

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

document.addEventListener("click", (e) => {
  if (
    e.target == consulter1 ||
    e.target == consulter2 ||
    e.target == consulter3 ||
    e.target == consulter4 ||
    e.target == consulter5 ||
    e.target == consulter6
  ) {
    container55.style.display = "flex";
    overlay.style.display = "block";

    if (e.target == consulter1) {
      dropdown.value = "photoid";
    } else if (e.target == consulter2) {
      dropdown.value = "shootmod";
    } else if (e.target == consulter3) {
      dropdown.value = "shootfam";
    } else if (e.target == consulter4) {
      dropdown.value = "shootobj";
    } else if (e.target == consulter5) {
      dropdown.value = "shooteve";
    } else if (e.target == consulter6) {
      dropdown.value = "ext";
    }
  }
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
