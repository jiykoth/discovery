function user_about() {
  get_html('user_about', function(page_html) {
    $('#page_div').html(page_html);
  });
}
