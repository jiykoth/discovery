function admin_profile_logged_in() {
  get_html('admin_profile_logged_in', function(page_html) {
    $('#page_div').html(page_html);
  });
}
