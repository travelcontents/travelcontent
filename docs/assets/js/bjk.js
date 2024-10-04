const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // 버튼 활성화 상태 관리
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // 필터 적용
    items.forEach((item) => {
      if (filter === "all") {
        item.classList.add("show");
      } else {
        if (item.classList.contains(filter)) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      }
    });
  });
});
