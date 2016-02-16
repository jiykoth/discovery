function admin_leads_sticky_footer() {
  get_html('admin_leads_sticky_footer', function(page_html) {
    $('#page_div').html(page_html);
  });
}
