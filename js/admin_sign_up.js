function admin_sign_up() {
  get_html('admin_sign_up', function(page_html) {
    $('#page_div').html(page_html);
  });
}
