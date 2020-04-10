<?php
  /**
   * Adds settings to the customizer
   */
  add_action('customize_register', ['TPD_Customizer', 'register']);
  class TPD_Customizer {
    public static function register ($wp_customize) {
    } 
  }