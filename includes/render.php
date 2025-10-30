<?php
defined('ABSPATH') || exit;

/**
 * Serverseitiges Rendern des Toggle-Container-Blocks.
 */
function ud_toggle_container_block_render($attributes, $content, $block) {
	$label_one = esc_html($attributes['labelOne'] ?? 'Ansicht eins');
	$label_two = esc_html($attributes['labelTwo'] ?? 'Ansicht zwei');
	$active    = esc_attr($attributes['activeView'] ?? 'one');
$block_id = esc_attr($block->context['blockId'] ?? uniqid('ud-toggle-'));

	return sprintf(
		'<div class="wp-block-ud-toggle-container ud-toggle-container" data-active="%s" data-block-id="%s">
			<div class="ud-toggle-header" data-role="toggle">
				<span class="ud-toggle-label ud-toggle-label--one">%s</span>
				<label class="ud-toggle-switch">
					<input type="checkbox" class="ud-toggle-toggle" aria-label="Ansicht umschalten" %s />
					<span class="slider"></span>
				</label>
				<span class="ud-toggle-label ud-toggle-label--two">%s</span>
			</div>
			<div class="ud-toggle-content">%s</div>
		</div>',
		$active,
        $block_id,
		$label_one,
		$active === 'two' ? 'checked' : '',
		$label_two,
		$content
	);
}



/*
<div class="ud-metric-header">
    <span class="ud-metric-label wl is-active">Wasserstand</span>
    <label class="ud-metric-switch">
        <input type="checkbox" class="ud-metric-toggle" aria-label="Wasserstand / Abfluss umschalten">
        <span class="slider"></span>
    </label>
    <span class="ud-metric-label di ">Abfluss</span>
</div>
*/