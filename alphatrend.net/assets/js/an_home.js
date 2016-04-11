var index = new Firebase('http://alphatrend.firebaseio.com/analytics/home');

//overall page count
index.transaction(function(currentData) {
  return currentData+1;
});

//individual blocks
