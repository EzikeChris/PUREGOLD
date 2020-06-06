const app = {
  checkBoxCtrl: function() {
    var checkBox = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    );
    checkBox.forEach(function(check) {
      check.addEventListener("click", function(e) {
        var text = e.target.parentElement.previousElementSibling;
        check.checked == true
          ? (text.style.color = "#0090f7")
          : (text.style.color = "#a4aab3");
      });
    });
  },
  // boxToggle: function() {
  //   var close = document.getElementById("close");
  //   var round_box = Array.from(document.getElementsByClassName("round__box"));
  //   round_box.forEach(function(box) {
  //     close.addEventListener("click", function() {
  //       box.style.display = "none";
  //     });
  //   });
  // }
};
