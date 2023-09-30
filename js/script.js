//name - Jay Patel
//Assignment - #3
 
const mssg = "Loading...";
const errorMssg = "Can't display the data";
const proro = () => {
  $.getJSON("team.json", function (data) {
    $.each(data.members, function (index, obj) {
      $("#team").append("<h2>" + obj.name + "</h2>");
      $("#team").append("<h5>" + obj.position + "</h5>");
      $("#team").append("<p>" + obj.bio + "</p>");
    });
  });
};
const name = () => {
  $.ajax({
    type: "GET",
    url: "team.json",
    dataType: "json",
    beforeSend: function () {
      $("#team").append("<p>" + mssg + "</p>");
    },
    success: function (response) {
      setTimeout(function () {
        $("#team").empty();
        $.each(response.members, function (index, obj) {
          $("#team").append("<h2>" + obj.name + "</h2>");
          $("#team").append("<h5>" + obj.position + "</h5>");
          $("#team").append("<p>" + obj.bio + "</p>");
        });
      }, 3000);
    },
    error: function () {
      $("#team").append("<p>" + errorMssg + "</p>");
    }
  });
};
$(document).ready(function () {
  // name();
  // proro();
});