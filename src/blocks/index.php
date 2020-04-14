<?php

/**
 * Theme Gutenberg Inspector Category
 */
add_filter('block_categories', function ($categories) {
  return array_merge($categories, [[
    'slug' => 'theme_blocks',
    'title' => 'Theme Blocks'
  ]]);
});