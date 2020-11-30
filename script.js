
  /* toggle nav */
  $(`.menu-btn`).click(function(){
    $(`.navbar .menu`).toggleClass("active");
    $(`.menu-btn i`).toggleClass("active");
}); 




  $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(`.navbar`).addClass("sticky");
        }else{
            $(`.navbar`).removeClass("sticky");
        }
    });
  });

  var typed =new Typed(".typing", {
    strings:["Web Developer."],
    typeSpeed:150,
    backSpeed:60,
    loop:true
    });
    var typed =new Typed(".manwlis", {
      strings:["Web Developer."],
      typeSpeed:150,
      backSpeed:60,
      loop:true
      });
  



