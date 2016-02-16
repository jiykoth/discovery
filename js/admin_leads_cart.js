function admin_leads_cart() {
  get_html('admin_leads_cart', function(page_html) {
    $('#page_div').html(page_html);
  });
}
