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
