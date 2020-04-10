<?php
require get_template_directory() . '/src/template-tags.php';

/**
 * Global Asssets
 */
add_action('wp_enqueue_scripts', function () {
	$theme_version = wp_get_theme()->get( 'Version' );

  wp_enqueue_style( 'ad-hoc', get_stylesheet_uri(), [], $theme_version);
  wp_enqueue_style( 'main', get_stylesheet_directory_uri() . '/dist/main.css', [], $theme_version);
});

/**
 * Theme supports
 */
add_action('after_setup_theme', function () {
  $logo_width = 200;
  $logo_height = 40;

	add_theme_support('title-tag');
  
  add_theme_support('custom-logo', [
    'width' => $logo_width,
    'height' => $logo_height,
    'flex-height' => true,
    'flex-width' => true
  ]);
});