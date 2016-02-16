function search_results() {
  get_html('search_results', function(page_html) {
    $('#page_div').html(page_html);
  });
}
