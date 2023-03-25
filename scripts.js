document.querySelectorAll(".more-info").forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    const serviceId = target.dataset.serviceId;
    const serviceDetails = document.querySelector(
      `.service-details[data-service-detail-id="${serviceId}"]`
    );

    if (serviceDetails.classList.contains("open")) {
      serviceDetails.classList.remove("open");
    } else {
      serviceDetails.classList.add("open");
    }
  });
});

