function admin_crm_master_list() {
  get_html('admin_crm_master_list', function(page_html) {
    $('#page_div').html(page_html);
  });
}
