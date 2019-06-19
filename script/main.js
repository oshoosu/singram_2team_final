$(function() {
    var inWrap = $('.inner-wrapper');
    $('.prev').on('click', function() {
    inWrap.animate({left: '0%'}, 300, function(){
      inWrap.css('left', '-100%');
      $('.slide').first().before($('.slide').last());
    });
    });
    $('.next').on('click', function() {
    inWrap.animate({left: '-200%'}, 300, function(){
      inWrap.css('left', '-100%');
      $('.slide').last().after($('.slide').first());
    });
    });
    setInterval(function () {
    inWrap.animate({left: '-200%'}, 700, function(){
      inWrap.css('left', '-100%');
      $('.slide').last().after($('.slide').first());
    });
    },3000);
    
});


$(function(){
 $(".nav_dropdown").hide();
 $(".nav_wrap ul").hover(function(){
        $(".nav_dropdown").stop().slideDown(500);
    },
    function(){
       $(".nav_dropdown").stop().slideUp(500);
    });
});	

$(document).ready(function() {
   $('#video_bt').click(function() {
      $('#modal-window').addClass('active');
      $('#sing_video').get(0).play();
   });
   $('.modal-close').click(function() {
      $(this).parent().removeClass('active');
      $('#sing_video').get(0).pause();
   });
    $('.cont_close_btn').click(function() {
      $('#modal-window').removeClass('active');
      $('#sing_video').get(0).pause();
   });
});

$(document).ready(function() {
   $('#use-site').click(function() {
      $('#fot_modal-window').addClass('active');
   });
   $('.fot_modal-close').click(function() {
      $(this).parent().removeClass('active');
   });
    $('.fot_cont_close_btn').click(function() {
      $('#fot_modal-window').removeClass('active');
   });
});

$(document).ready(function() {
   $('#user-info').click(function() {
      $('#fot_modal-window2').addClass('active');
   });
   $('.fot_modal-close2').click(function() {
      $(this).parent().removeClass('active');
   });
    $('.fot_cont_close_btn2').click(function() {
      $('#fot_modal-window2').removeClass('active');
   });
});

$(document).ready(function() {
   $('#user-mail').click(function() {
      $('#fot_modal-window3').addClass('active');
   });
   $('.fot_modal-close3').click(function() {
      $(this).parent().removeClass('active');
   });
    $('.fot_cont_close_btn3').click(function() {
      $('#fot_modal-window3').removeClass('active');
   });
});

$(document).ready(function() {
   $('#site-map-modal').click(function() {
      $('#fot_modal-window4').addClass('active');
   });
   $('.fot_modal-close4').click(function() {
      $(this).parent().removeClass('active');
   });
    $('.fot_cont_close_btn4').click(function() {
      $('#fot_modal-window4').removeClass('active');
   });
});

$(document).ready(function(){
  $(".nav_ul_sec").hover(function(){
    $(".nav_ul_sec2").css("color", "#78a55a");
    }, function(){
    $(".nav_ul_sec2").css("color", "#555555");
  });
});

$(document).ready(function(){
  $(".nav_ul_fir").hover(function(){
    $(".nav_ul_fir2").css("color", "#78a55a");
    }, function(){
    $(".nav_ul_fir2").css("color", "#555555");
  });
});


$(document).ready(function(){
  $(".nav_ul_thr").hover(function(){
    $(".nav_ul_thr2").css("color", "#78a55a");
    }, function(){
    $(".nav_ul_thr2").css("color", "#555555");
  });
});


