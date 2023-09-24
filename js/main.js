// WEB303 Assignment 2
$(document).ready(function () {
  const content = $("#content");

  function handleLoadContent(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", page, true);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        content.fadeOut(400, function () {
          content.html(xhttp.responseText);
          content.fadeIn(400);
        });
      }
    };
    xhttp.send();
  }

  $("#prospect").click(function () {
    content.empty();
    handleLoadContent("prospect.html");
  });

  $("#convert").click(function () {
    content.empty();
    handleLoadContent("convert.html");
  });

  $("#retain").click(function () {
    content.empty();
    handleLoadContent("retain.html");
  });
});
