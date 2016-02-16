<?php
    
  require_once '../lib/minifier.php';
    
  $html = array();
  $js = '';
  
  $config = file_get_contents('../config.json');
  $c = json_decode($config, true);
    
  foreach ($c[pages] as $page) {
    if ($page[name] != 'default') {
      $file = array(
        'name' => $page[name],
        'html' => file_get_contents($page[name].'.html')
      );
      array_push($html, $file);
    }
    $js .= file_get_contents($page[name].'.js');
  }
  
  file_put_contents('html.json', json_encode($html));

  echo 'done building html.json';

?>