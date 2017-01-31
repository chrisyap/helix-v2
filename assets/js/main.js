$('.chart-trigger').on("click", function(){
  console.log('clicked');
  $(this).find('i').toggleClass('hidden');
  $('.chart').slideToggle('slow');
});

setTimeout(function(){
  $('#mins').animateNumber({ number: 68 });
},1000);

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
