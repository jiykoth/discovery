function user_ammenities() {
  get_html('user_ammenities', function(page_html) {
    $('#page_div').html(page_html);
  });
}
