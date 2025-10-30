<?php
defined('ABSPATH') || exit;

/**
 * Registrierung des Toggle-Container-Blocks.
 */
function ud_toggle_container_block_register() {
	register_block_type(
		__DIR__ . '/../',
		[
			'render_callback' => 'ud_toggle_container_block_render',
		]
	);
}
add_action('init', 'ud_toggle_container_block_register');
