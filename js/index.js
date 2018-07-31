$(window).scroll(function(e){
   console.log($(window).scrollTop());
  if ($(window).scrollTop()<=0)
    $(".view,.navbar").addClass("at_top");
  else
    $(".view,.navbar").removeClass("at_top");
  
});

$(document).on('click','a',function(event){
  event.preventDefault();
  var target= $(this).attr('href');
  console.log(target);
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
});

function dogs(dogs_id,x){
  var dogplace=$(dogs_id).offset().left+$(dogs_id).width()/2;
  if(Math.abs(x-dogplace)<80)
    $(dogs_id).css("bottom","0px")
  else
    $(dogs_id).css("bottom","-50px")
}


$(window).mousemove(function(evt){
  var pagex=evt.pageX;
  var pagey=evt.pageY;
  
  var x=pagex-$("#section_about").offset().left;
  var y=pagey-$("#section_about").offset().top;
  
  // console.log(x+","+y)
  
  if (y<0 || y>$("#section_about").outerHeight())
    $("#ball").css("opacity",0);
  else
    $("#ball").css("opacity",1);
  
  $("#ball").css("left",x+"px");
  $("#ball").css("top",y+"px");
  
  var dogplace=$("#shiba").offset().left+$("#shiba").width()/2;
  var dogtop=$("#shiba").offset().top;
  
  var img_url="http://leifen.byethost9.com/alison_svg/"
  
  if (pagex<dogplace-200)
    $("#shiba").attr("src",img_url+"dog_left.svg")
  else if (pagex>dogplace+80)
    $("#shiba").attr("src",img_url+"dog_right.svg")
  else
    $("#shiba").attr("src",img_url+"dog_center.svg")
  
  dogs("#dog_orange",pagex);
  dogs("#dog_black",pagex);
  dogs("#dog_white",pagex);
  
 $(".mountain").css("transform","translateX("+(pagex/-20+50)+"px)")
 $(".text01").css("transform","translateX("+(y/-5)+"px)")
 $(".text02").css("transform","translateX("+(y/-10)+"px)")
 $(".text03").css("transform","translateX("+(y/-12)+"px)")
  $(".pic-arrow").css("transform","translateX("+(x/-5)+"px)")
   
  
});