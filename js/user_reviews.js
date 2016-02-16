function user_reviews() {
  get_html('user_reviews', function(page_html) {
    $('#page_div').html(page_html);
  });
}
