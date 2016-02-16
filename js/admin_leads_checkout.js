function admin_leads_checkout() {
  get_html('admin_leads_checkout', function(page_html) {
    $('#page_div').html(page_html);
  });
}
