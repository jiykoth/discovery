$(document).ready(function() {
  $('#rebuild-cache-link').click(function() { rebuild_cache(); });
});

function rebuild_cache() {
  $.post('lib/cache.php', function(data) { msg(data); })
}

function msg(m) {
  $('#messages').append('<p>' + m + '</p>');
}
