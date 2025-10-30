<?php
/**
 * Plugin Name:     UD Block: Toggle-Container
 * Description:     Block mit Toggle-Switch zum Umschalten zwischen zwei Inhalten innerhalb eines Containers.
 * Version:         1.2.1
 * Author:          ulrich.digital gmbh
 * Author URI:      https://ulrich.digital/
 * License:         GPL v2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 */

defined('ABSPATH') || exit;

require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/includes/block-register.php';
require_once __DIR__ . '/includes/enqueue.php';
require_once __DIR__ . '/includes/render.php';
