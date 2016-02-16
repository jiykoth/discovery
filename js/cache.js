function admin_analytics() {
  get_html('admin_analytics', function(page_html) {
    $('#page_div').html(page_html);
  });
}
<<<<<<< HEAD
function admin_auto_buy() {
  get_html('admin_auto_buy', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_crm_master_list() {
  get_html('admin_crm_master_list', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_crm_profile_activity() {
  get_html('admin_crm_profile_activity', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_crm_profile_flyout() {
  get_html('admin_crm_profile_flyout', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_home() {
  get_html('admin_home', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_leads_cart() {
  get_html('admin_leads_cart', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_leads_checkout() {
  get_html('admin_leads_checkout', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_leads_lead_created() {
  get_html('admin_leads_lead_created', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_leads_new_lead() {
  get_html('admin_leads_new_lead', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_leads_purchased() {
  get_html('admin_leads_purchased', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_leads_sticky_footer() {
  get_html('admin_leads_sticky_footer', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_leads_submit_order() {
  get_html('admin_leads_submit_order', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_profile_logged_in() {
  get_html('admin_profile_logged_in', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_sign_up() {
  get_html('admin_sign_up', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function admin_sign_up_confirmation() {
  get_html('admin_sign_up_confirmation', function(page_html) {
    $('#page_div').html(page_html);
  });
}
var config = '';
var html = '';
var quick_link_html = `
  <div class="link_container">
    <a id="{0}-link" class="quick_nav_link" href="javascript:;">{0}</a>
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
    eval(e.currentTarget.id.split('-')[0] + '();');
  });
}

function msg(m) { $('#messages').append('<p>{0}</p>'.f(m)); }

String.prototype.f = function () { // like .net's string.format() function
  var args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, n) {
    return args[n];
  });
};
function facility() {
  get_html('facility', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function search_results() {
  get_html('search_results', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function search_results_filters() {
  get_html('search_results_filters', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function user_about() {
  get_html('user_about', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function user_ammenities() {
  get_html('user_ammenities', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function user_community() {
  get_html('user_community', function(page_html) {
    $('#page_div').html(page_html);
  });
}
function user_reviews() {
  get_html('user_reviews', function(page_html) {
    $('#page_div').html(page_html);
  });
}
=======
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
>>>>>>> c9886744dcb797815848bd0c7b51d4f0cf1ee64a
