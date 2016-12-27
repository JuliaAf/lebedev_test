$(document).ready(function(){
  var toggle = $(".news__announces-small-item");
    toggle.click(function(){
    var that = $(this),
        togglePosition = that.index(),
        preview = $(".news__announces-big-item");

      toggle.removeClass("active");
      that.addClass("active");

      preview.removeClass("active");
      preview.eq(togglePosition).addClass("active");
    });
})//ready-end
