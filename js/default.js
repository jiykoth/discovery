<<<<<<< HEAD
$(document).ready(function() {
  $('#rebuild-cache-link').click(function() { rebuild_cache(); });
});

function rebuild_cache() {
  $.post('lib/cache.php', function(data) { msg(data); })
}

function msg(m) {
  $('#messages').append('<p>' + m + '</p>');
}
=======
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
>>>>>>> c9886744dcb797815848bd0c7b51d4f0cf1ee64a
