$(document).ready(function() {
$('#nav').onePageNav();
   $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 120) {
             $('#contmenu').addClass('menuu');
             $('#contmenu').removeClass('menus');
         }
         else {
             $('#contmenu').removeClass('menuu');
             $('#contmenu').addClass('menus');
         }
    });
   $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 120) {
             $('#iden').addClass('alto');
         }
         else {
             $('#iden').removeClass('alto');
         }
    });
});