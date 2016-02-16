function admin_analytics() {
  get_html('admin_analytics', function(page_html) {
    $('#page_div').html(page_html);
  });
}
