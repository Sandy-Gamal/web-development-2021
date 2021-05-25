$(document).ready(function(){

    // showing pop-up section by clicking on its images in the gallery section
   $(" .gallery .gallery-box .box-img img ").on("click", function() {
       $(".pop-up").show();
       $(".pop-up img").attr("src", $(this).attr("src"))
   })

    // clicking on pop-up div for hiding this
   $(".close, .pop-up").on("click", function() {
    $(".pop-up").hide();
   })

   // stop propagation when click on image
   $(".pop-up img").click(function(event){
    event.stopPropagation();
   })

   // clicking esc button for hiding popus
   $(document).on("keydown", function(event) {
        if(event.which === 27){
            $(".pop-up").hide();
        }
  })


})