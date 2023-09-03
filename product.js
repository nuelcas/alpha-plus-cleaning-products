let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();

function initMap() {
  // Replace 'LATITUDE' and 'LONGITUDE' with your address coordinates
  var myLatLng = { lat: 6.547036917547874, lng: 3.2362647197992773 };

  // Map options: you can customize these as needed
  var mapOptions = {
    zoom: 14,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  // Create the map in the 'map' div
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Add a marker to the map
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "My Address",
  });
}
