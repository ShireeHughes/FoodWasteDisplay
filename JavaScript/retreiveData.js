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

function getDate(dateToGet) {
 $.ajax({
  method:"GET",
  dataType: "jsonp",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?ID=3&DATE='+dateToGet,
  });
}

function getWeek(dateToGet) {
 $.ajax({
  method:"GET",
  dataType: "jsonp",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?ID=2&DATE='+dateToGet,
  });
}