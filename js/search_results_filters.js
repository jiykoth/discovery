function search_results_filters() {
  get_html('search_results_filters', function(page_html) {
    $('#page_div').html(page_html);
  });
}
