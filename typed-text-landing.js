// set up text to print, each item in array is new line
let aTextLanding = new Array(
    "This is what I do......", 
    );
    let iSpeedLanding = 350; // time delay of print out
    let iIndexLanding = 0; // start printing array at this posision
    let iArrLengthL = aTextLanding[0].length; // the length of the text array
    let iScrollAtL = 20; // start scrolling up at this many lines
     
    let iTextPosL = 0; // initialise text position
    let sContentsL = ''; // initialise contents letiable
    let iRowL; // initialise current row
     
    function typewriterLanding()
    {
     sContentsL =  ' ';
     iRowL = Math.max(0, iIndexLanding-iScrollAtL);
     let destination = document.getElementById("typedtext-landing");
     
     while ( iRowL < iIndexLanding ) {
      sContentsL += aTextLanding[iRowL++] + '<br />';
     }
     destination.innerHTML = sContentsL + aTextLanding[iIndexLanding].substring(0, iTextPosL) + "_";
     if ( iTextPosL++ == iArrLengthL ) {
      iTextPosL = 0;
      iIndexLanding++;
      if ( iIndexLanding != aTextLanding.length ) {
       iArrLengthL = aTextLanding[iIndexLanding].length;
       setTimeout("typewriterLanding()", 500);
      }
     } else {
      setTimeout("typewriterLanding()", iSpeedLanding);
     }
    }
    
    
    typewriterLanding();