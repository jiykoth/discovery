function admin_leads_new_lead() {
  get_html('admin_leads_new_lead', function(page_html) {
    $('#page_div').html(page_html);
  });
}
