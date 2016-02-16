function admin_leads_submit_order() {
  get_html('admin_leads_submit_order', function(page_html) {
    $('#page_div').html(page_html);
  });
}
