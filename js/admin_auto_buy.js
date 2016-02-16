function admin_auto_buy() {
  get_html('admin_auto_buy', function(page_html) {
    $('#page_div').html(page_html);
  });
}
