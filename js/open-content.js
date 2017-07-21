function openContent(evt, contentName) {
  // Get all elements with class="tabcontent" and hide them
  $(".tab-content").css('display','none')

  // Get all elements with class="tablinks" and remove the class "active"
  $(".tab-link").removeClass('active');

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
}
