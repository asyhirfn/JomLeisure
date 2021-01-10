function choice() {
  var des = document.getElementById("destinations").value;
  var cat = document.getElementById("categories").value;

//Kelantan
  if (des === "Kelantan" && cat === "Historical Places") {
    window.location.href = "KelantanHP.html";
  }
  else if (des === "Kelantan" && cat === "Islands" ) {
    window.location.href = "KelantanIS.html";
  }
  else if (des === "Kelantan" && cat === "Food & Beverages" ) {
    window.location.href = "KelantanF&B.html";
  }
  else if (des === "Kelantan" && cat === "Holiday Resorts" ) {
    window.location.href = "KelantanHR.html";
  }

//Terengganu
  else if (des === "Terengganu" && cat === "Historical Places") {
      window.location.href = "TerengganuHP.html";
  }
  else if (des === "Terengganu" && cat === "Islands" ) {
    window.location.href = "TerengganuIS.html";
  }
  else if (des === "Terengganu" && cat === "Food & Beverages" ) {
    window.location.href = "TerengganuF&B.html";
  }
  else if (des === "Terengganu" && cat === "Holiday Resorts" ) {
    window.location.href = "TerengganuHR.html";
  }

//Pahang
  else if (des === "Pahang" && cat === "Historical Places") {
      window.location.href = "PahangHP.html";
  }
  else if (des === "Pahang" && cat === "Islands" ) {
    window.location.href = "PahangIS.html";
  }
  else if (des === "Pahang" && cat === "Food & Beverages" ) {
    window.location.href = "PahangF&B.html";
  }
  else if (des === "Pahang" && cat === "Holiday Resorts" ) {
    window.location.href = "PahangHR.html";
  }
  else {
    alert("Invalid options for Destinations or Categories.");
  }

}
