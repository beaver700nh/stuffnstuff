$(document).ready(
  () => {
    $(".simlink").click(
      function () {
        location.href = $(this).attr("data-link");
      }
    );
  }
);
