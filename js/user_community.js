function user_community() {
  get_html('user_community', function(page_html) {
    $('#page_div').html(page_html);
  });
}
