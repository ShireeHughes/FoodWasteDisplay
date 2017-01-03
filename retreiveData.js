$.ajax({
  dataType: "text",
  url: 'http://portal-isense.fau.edu:8080/wrs/mongo?numSamples=2880',
  }).done(function ( data ) {
  // do my stuff
  console.log('here');
  console.log(data);
});
