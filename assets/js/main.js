$('.chart-trigger').on("click", function(){
  console.log('clicked');
  $(this).find('i').toggleClass('hidden');
  $('.chart').slideToggle('slow');
});

setTimeout(function(){
  $('#mins').animateNumber({ number: 68 });
},1000);

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.back2top').fadeIn();
    } else {
        $('.back2top').fadeOut();
    }
});

function update() {
  $('.clock .date').html(moment().format('ddd D MMM'));
  $('.clock .time').html(moment().format('HH:mm'));
}


$('.wrapper').on('click', function(){
  $('aside.sidenav').removeClass('open');
  $('body').removeClass('sidenav-open');
});

function aside() {
    event.stopPropagation();
    $('aside.sidenav').toggleClass('open');
    $('body').toggleClass('sidenav-open');
}

$('.aside-trigger').click(aside);
$('.button-close').click(aside);

setInterval(update, 500);

$('.filters').on('click','.btn',function(){
  var vtype = $(this).attr('class');
  vtype = vtype.replace('btn ','').replace('btn-default ','').replace(' active','').replace(' ','');
  console.log(vtype);
  function showOnlyCard(card) {
    // $('.card').hide();
    $('.card').each(function(){
      if ($(this).hasClass(vtype)){
        $(this).slideDown();
      } else {
        $(this).slideUp();
      }
    })
  }
  if (~vtype.indexOf("all")) {
    $(".card").slideDown('fast');
  } else {
    showOnlyCard(vtype);
  }
})


function randRange(data) {
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
}

function toggleSomething() {
       var timeArray = new Array(2000, 3000, 1500, 2500, 20000, 30000, 10000, 15000);

       // do stuff, happens to use jQuery here (nothing else does)
       $(".notified").addClass("visible");
       setTimeout(function(){
         $(".notified").removeClass("visible");
         clearInterval(timer);
         timer = setInterval(toggleSomething, randRange(timeArray));
       },3000);
}

var timer = setInterval(toggleSomething, 1000);
// 1000 = Initial timer when the page is first loaded
