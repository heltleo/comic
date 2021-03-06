// Dynamic behaviour definitions for the general user interface
$(document).ready(function() {
  // Main menu needs to be hidden immediately as the page is loaded
  // The user will see it slide up on page load - this is intentional
  // so that they notice the availability of a drop down menu
  $('#home-toggle-dropdown').slideUp();

  $('#home-toggle-menu').click(function(){
    $('#home-toggle-dropdown').slideToggle();
  });

  $('.home-menu-link').click(function(){
    $('#home-toggle-dropdown').slideToggle();
  });

  $('.home-menu-item').mouseenter(function() {
    $(this).find('.home-menu-text').removeClass('home-menu-text-hide').addClass('home-menu-text-show');
  });

  $('.home-menu-item').mouseleave(function() {
    $(this).find('.home-menu-text').removeClass('home-menu-text-show').addClass('home-menu-text-hide');
  });

  $('.nav-menu').mouseleave(function() {
    $('#home-toggle-dropdown').slideUp();
  });

  $('body').scrollspy({ target: '#doc-toc' });

  // Show/hide payment amount field on the "raise a bug/feature" form
  // Features should be paid for whereas bugs are raised for free
  $('#div_id_feature_cost').hide();
  $('#id_feature_cost').val(1.0);

  $('#ticket-add-form #id_type').change(function() {
    if ($(this).val() == 'Feature') {
      $('#div_id_feature_cost').show();
    } else {
      $('#div_id_feature_cost').hide();
      $('#id_feature_cost').val(1.0);
    }
  });

  $('#chart-button-daily').addClass('alternate')
  $('.ct-chart').show();
  $('.ct-chart-week').hide();
  $('.ct-chart-month').hide();

  $('#chart-button-daily').click(function() {
    $(this).addClass('alternate')
    $('#chart-button-weekly').removeClass('alternate')
    $('#chart-button-monthly').removeClass('alternate')
    $('.ct-chart').fadeIn("slow");
    $('.ct-chart-week').hide();
    $('.ct-chart-month').hide();
  });

  $('#chart-button-weekly').click(function() {
    $(this).addClass('alternate')
    $('#chart-button-daily').removeClass('alternate')
    $('#chart-button-monthly').removeClass('alternate')
    $('.ct-chart').hide();
    $('.ct-chart-week').fadeIn("slow");
    $('.ct-chart-month').hide();
  });

  $('#chart-button-monthly').click(function() {
    $(this).addClass('alternate')
    $('#chart-button-daily').removeClass('alternate')
    $('#chart-button-weekly').removeClass('alternate')
    $('.ct-chart').hide();
    $('.ct-chart-week').hide();
    $('.ct-chart-month').fadeIn("slow");
  });
});
