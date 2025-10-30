import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { labelOne, labelTwo, activeView } = attributes;
	const isSecond = activeView === 'two';

	const blockProps = useBlockProps({
		className: 'ud-toggle-container',
		'data-active': activeView,
	});

	return (
		<div {...blockProps}>
			<div className="ud-toggle-switch" data-role="toggle">
				<RichText
					tagName="span"
					className="ud-toggle-label ud-toggle-label--one"
					value={labelOne}
					onChange={(val) => setAttributes({ labelOne: val })}
					placeholder={__('Ansicht Block eins', 'ud')}
				/>
				<ToggleControl
					className="ud-toggle-control"
					label={null}
					checked={isSecond}
					onChange={(val) =>
						setAttributes({ activeView: val ? 'two' : 'one' })
					}
					__next40pxDefaultSize={true}
					__nextHasNoMarginBottom={true}
				/>
				<RichText
					tagName="span"
					className="ud-toggle-label ud-toggle-label--two"
					value={labelTwo}
					onChange={(val) => setAttributes({ labelTwo: val })}
					placeholder={__('Ansicht Block zwei', 'ud')}
				/>
			</div>

			<div className="ud-toggle-content">
				<InnerBlocks
					allowedBlocks={undefined}
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</div>
		</div>
	);
}
