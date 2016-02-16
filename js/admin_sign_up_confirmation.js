function admin_sign_up_confirmation() {
  get_html('admin_sign_up_confirmation', function(page_html) {
    $('#page_div').html(page_html);
  });
}
