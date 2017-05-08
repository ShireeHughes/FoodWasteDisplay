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

function getStorylineByDate(dateToGet) {
console.log("story1");
 $.ajax({
  method:"GET",
  dataType: "jsonp",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?ID=5&DATE='+dateToGet,
  });
}

function getStoryline() {
console.log("story1");
time = new Date();
dateToGet=time.getMonth()+1 +'-'+time.getDate()+'-'+time.getFullYear();
 $.ajax({
  method:"GET",
  dataType: "jsonp",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?ID=5&DATE='+dateToGet,
  });
}
