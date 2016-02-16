<?php

  require_once 'minifier.php';

  $html = array(); $css = ''; $js = '';
  
  $cfg = file_get_contents('../config.json');
  $c = json_decode($cfg, true);

  foreach ($c[pages] as $page) {
      $file = array(
        'name' => $page[name],
        'html' => file_get_contents('../html/'.$page[name].'.html')
      );
      array_push($html, $file);
    $js .= file_get_contents('../js/'.$page[name].'.js');
    $css .= file_get_contents('../css/'.$page[name].'.css');
  }
  
  # $js = \JShrink\Minifier::minify($js); // enable in production
  
  file_put_contents('../html/cache.json', json_encode($html));
  file_put_contents('../css/cache.css', $css);
  file_put_contents('../js/cache.js', $js);
  
  echo '
    done rebuilding html, css and js cache <br />
    <a id="refresh_link" href="javascript:;">reload page</a>
  '; 
    
?>