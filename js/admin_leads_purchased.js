function admin_leads_purchased() {
  get_html('admin_leads_purchased', function(page_html) {
    $('#page_div').html(page_html);
  });
}
