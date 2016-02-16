var under_construction_html = '';

$(document).ready(function() {
  $('#under-construction-link').hide();
  load_html(function() {
    $('#main').html(under_construction_html);
    $('#under-construction-link').click(function() { /* admin_click(); */ });
  });
});

$(window).on('load', window_load());

function window_load() {
  $('#under-construction-link').show();
}

function load_html(cb) {
  $.get('html/under_construction.html', function(data) { under_construction_html = data; cb(); });
}

function admin_click() {
  window.location = '/admin/';
}
