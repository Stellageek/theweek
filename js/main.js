

  $("#nav-toggle").click(function() {
  		this.classList.toggle("active")
  		$("#item-toggle").toggle("hide")
  		$("#sub-toggle").toggle("show")
  		return false;
  });
