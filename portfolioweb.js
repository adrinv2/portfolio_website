
    function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "media/102.jpg")
        {
            document.getElementById("imgClickAndChange").src = "media/103.jpg";
        }
        else
        {
            document.getElementById("imgClickAndChange").src = "media/104.jpg";
        }
    }





@media only screen and (max-width: 600px){
  section {
    background-color: red !important;
  }
}

@media only screen and (max-width: 2560px){
  section {
    background-color: blue !important;

  }
}
