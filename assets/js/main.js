$('.chart-trigger').on("click", function(){
  console.log('clicked');
  $(this).find('i').toggleClass('hidden');
  $('.chart').slideToggle('slow');
})
