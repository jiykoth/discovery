function facility() {
  get_html('facility', function(page_html) {
    $('#page_div').html(page_html);
  });
}
