function admin_home() {
  get_html('admin_home', function(page_html) {
    $('#page_div').html(page_html);
  });
}
