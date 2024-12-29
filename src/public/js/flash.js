const roche = () => {
  const img = document.getElementById("rocher");

  img.style.visibility = "visible";

  img.classList.add("flash");

  img.addEventListener(
    "animationend",
    () => {
      img.style.visibility = "hidden";
      img.classList.remove("flash");
    },
    { once: true }
  );
};
