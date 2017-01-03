function retreiveData() {
 $.ajax({
  method:"GET",
  dataType: "jsonp",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?numSamples=3',
  });
}