// KORDINAT 
navigator.geolocation.getCurrentPosition((loc) => {
  //console.log('The location in lat lon format is: [', loc.coords.latitude, ',', loc.coords.longitude, ']');
  $("#lokasi").html( loc.coords.latitude+','+loc.coords.longitude);
})

