var index = new Firebase('http://alphatrend.firebaseio.com/analytics/tech');

//overall page count
index.transaction(function(currentData) {
  return currentData+1;
});
