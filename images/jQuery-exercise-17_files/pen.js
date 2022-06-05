$(document).ready(function () {
  $(document).bind("click", function (e) {
    $(e.target).closest("li").toggleClass("highlight");
  });
});