<!DOCTYPE html>
<html <?php language_attributes() ?>>
<head>
  <meta charset="<?php bloginfo('charset') ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" >

  <?php wp_head() ?>
</head>
<body <?php body_class() ?>>
  <?php wp_body_open() ?>

  <header class="container flex">
    <div class="site-title">
      <?php tcp_the_title_or_logo() ?>
    </div>
    <div class="flex text-uppercase">
      <?php if (has_nav_menu('main')) wp_nav_menu(['theme_location' => 'main']) ?>
      <?php tcp_the_navbar_callout() ?>
    </div>
  </header>