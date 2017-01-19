function getMaxMin() {
 $.ajax({
  method:"GET",
  dataType: "jsonp",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?ID=1',
  });
}

function retrieveData() {
 $.ajax({
  method:"GET",
  dataType: "jsonp",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?ID=0',
  });
}