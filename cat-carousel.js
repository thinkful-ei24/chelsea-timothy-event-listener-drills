// change the display image when we click on the image use mouse or keyboard
// updated display image should have updated alt attribute

//set listener for mouse click event on image
"use strict";

function mainDom() {
  $(".thumbnail").click(event => {
    let selectedImg = $(event.currentTarget);

    $(".hero").html(selectedImg.html());
  });
}

$(mainDom);
