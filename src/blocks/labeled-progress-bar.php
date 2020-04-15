<?php

/**
 * Adds a progress bar with a label above it
 */
add_action('init', function () {
  $assets = include(get_template_directory() . '/dist/js/blocks/labeled-progress-bar.asset.php');

  wp_register_script(
    'tpd-blocks-labeled-progress-bar',
    get_stylesheet_directory_uri() . '/dist/js/blocks/labeled-progress-bar.js',
    $assets['dependencies'],
    $assets['version']
  );

  register_block_type('tpd/labeled-progress-bar', [
    'editor_script' => 'tpd-blocks-labeled-progress-bar'
  ]);
});