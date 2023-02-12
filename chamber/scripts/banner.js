var currentDate = new Date();
  var dayOfWeek = currentDate.getDay();
  if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    document.getElementById("banner").style.display = "block";
  }