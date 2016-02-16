function admin_leads_lead_created() {
  get_html('admin_leads_lead_created', function(page_html) {
    $('#page_div').html(page_html);
  });
}
