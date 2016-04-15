const index = new Firebase('http://alphatrend.firebaseio.com/analytics/home');
/*var b1 = new Firebase('http://alphatrend.firebaseio.com/analytics/home/block1');
var b2 = new Firebase('http://alphatrend.firebaseio.com/analytics/home/block2');
var b3 = new Firebase('http://alphatrend.firebaseio.com/analytics/home/block3');
var b4 = new Firebase('http://alphatrend.firebaseio.com/analytics/home/block4');*/
/*
var count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0;*/

//overall page count
index.transaction(function(currentData) {
  return currentData+1;
});

//individual blocks
/*$('.block1').click(function () {
  count1++;
  if (count1 == 0 ) {
    b1.transaction(function(currentData) {
      currentData+1;
    })
  } else {
    console.log('more than one click');
    console.log(count1);
  }
});

$('.block2').click(function () {
  count2++;
  if (count1 == 0 ) {
    b2.transaction(function(currentData) {
      currentData+1;
    })
  } else {
    console.log('more than one click');
    console.log(count1);
  }
});

$('.block3').click(function () {
  count3++;
  if (count3 == 0 ) {
    b3.transaction(function(currentData) {
      currentData+1;
    })
  } else {
    console.log('more than one click');
    console.log(count1);
  }
});

$('.block4').click(function () {
  count4++;
  if (count4 == 0 ) {
    b4.transaction(function(currentData) {
      currentData+1;
    })
  } else {
    console.log('more than one click');
    console.log(count4);
  }
});*/
