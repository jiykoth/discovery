var config = '';
var html = '';
var quick_link_html = `
  <div class="link_container">
    <a id="{0}" class="quick_nav_link" href="javascript:;">{0}</a>
  </div>
`;

$(document).ready(function() {
  $('#rebuild_cache_link').click(function() { rebuild_cache(); });
  load_config(function() { build_quick_nav(); });
  load_html(function() { default_html(); });
});

function rebuild_cache() {
  $.get('lib/cache.php', function(data) {
    msg(data);
    $('#refresh_link').click(function() { window.location.reload(); });
  });
}

function load_config(cb) {
  $.get('config.json', function(data) {
    config = data; cb();
  },'json');
}

function load_html(cb) {
  $.get('html/cache.json', function(data) {
    html = data; cb();
  },'json');
}

function get_html(page, cb) {
  for (var i = 0; i < html.length; i++) {
    if (html[i].name == page) { cb(html[i].html); }
  }
}

function default_html() { // page loader
  get_html('default_html', function(default_html) {
    $('#page_div').html(default_html);
  });
}

function build_quick_nav() {
  cp = config.pages;
  for (var i = 0; i < cp.length; i++) {
    $('#quick_nav').append(quick_link_html.f(cp[i].name));
  }
  $('.quick_nav_link').click(function(e) {
    eval(e.currentTarget.id + '();');
  });
}

function msg(m) { $('#messages').append('<p>{0}</p>'.f(m)); }

String.prototype.f = function () { // like .net's string.format() function
  var args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, n) {
    return args[n];
  });
};
