document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const pages = document.querySelector(".pages");

  let currentPage = 0;
  const totalPages = document.querySelectorAll(".pages img").length;
  const pageWidth = document.querySelector(".book-slider").offsetWidth;
  console.log(totalPages);

  function showPage(pageNumber) {
    const isSinglePage = pageNumber <= 2 || pageNumber >= totalPages - 3;

    if (isSinglePage) {
      const offset = -pageNumber * pageWidth;
      pages.style.transform = `translateX(${offset}px)`;
      // Set the size for single-page display
      document.querySelector(".book-slider").style.width = "640px";
      document.querySelector(".book-slider").style.height = "959px";
    } else {
      let doublePageNumber;
      if (pageNumber === 3) {
        doublePageNumber = 2; // Display pages 4 and 5
      } else {
        doublePageNumber = pageNumber - 2; // Adjusting the starting index for other double pages
      }
      const offset = -(doublePageNumber * pageWidth * 2 - pageWidth); // Adjusting the offset for double pages
      pages.style.transform = `translateX(${offset}px)`;
      // Set the size for double-page display
      document.querySelector(".book-slider").style.width = "1280px";
      document.querySelector(".book-slider").style.height = "959px";
    }

    // Hide or show prev/next buttons based on current page
    if (currentPage === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }

    if (currentPage === 18) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }

  prevBtn.addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentPage < totalPages - 1) {
      currentPage++;
      showPage(currentPage);
      console.log(currentPage);
    }
  });

  window.addEventListener("resize", function () {
    showPage(currentPage);
  });

  showPage(currentPage);
});
