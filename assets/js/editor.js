
(function(wp){
  const { registerBlockType } = wp.blocks;
  const { InspectorControls, RichText, InnerBlocks, useBlockProps } = wp.blockEditor || wp.editor;
  const { ToggleControl } = wp.components;

  const TEMPLATE = [
    ['core/group', { className: 'ud-toggle-view view-one' }, []],
    ['core/group', { className: 'ud-toggle-view view-two' }, []],
  ];

  registerBlockType('ud/toggle-container', {
    edit: (props) => {
      const { attributes, setAttributes } = props;
      const { labelOne, labelTwo, activeView } = attributes;
      const isSecond = activeView === 'two';

      const blockProps = useBlockProps({
        className: 'ud-toggle-container',
        'data-active': activeView
      });

      return wp.element.createElement('div', blockProps,
        wp.element.createElement('div', { className: 'ud-toggle-switch' },
          wp.element.createElement(RichText, {
            tagName: 'span',
            className: 'ud-toggle-label ud-toggle-label--one',
            value: labelOne,
            onChange: (val) => setAttributes({ labelOne: val }),
            placeholder: 'Ansicht Block eins'
          }),
          wp.element.createElement(ToggleControl, {
            className: 'ud-toggle-control',
            label: null,
            checked: isSecond,
            onChange: (val) => setAttributes({ activeView: val ? 'two' : 'one' }),
            help: null
          }),
          wp.element.createElement(RichText, {
            tagName: 'span',
            className: 'ud-toggle-label ud-toggle-label--two',
            value: labelTwo,
            onChange: (val) => setAttributes({ labelTwo: val }),
            placeholder: 'Ansicht Block zwei'
          }),
        ),
        wp.element.createElement('div', { className: 'ud-toggle-content' },
wp.element.createElement(InnerBlocks, {
allowedBlocks: undefined,
  renderAppender: () => wp.element.createElement(InnerBlocks.ButtonBlockAppender)
})

        )
      );
    },

    save: (props) => {
      const { attributes } = props;
      const { labelOne, labelTwo, activeView } = attributes;

      const blockProps = (wp.blockEditor || wp.editor).useBlockProps.save({
        className: 'ud-toggle-container',
        'data-active': activeView
      });

      return wp.element.createElement('div', blockProps,
        wp.element.createElement('div', { className: 'ud-toggle-switch', 'data-role': 'toggle' },
          wp.element.createElement('span', { className: 'ud-toggle-label ud-toggle-label--one' }, labelOne || 'Ansicht Block eins'),
          wp.element.createElement('button', {
            className: 'ud-toggle-button',
            type: 'button',
            role: 'switch',
            'aria-checked': activeView === 'two' ? 'true' : 'false',
            'aria-label': 'Ansicht umschalten'
          }),
          wp.element.createElement('span', { className: 'ud-toggle-label ud-toggle-label--two' }, labelTwo || 'Ansicht Block zwei')
        ),
        wp.element.createElement('div', { className: 'ud-toggle-content' },
			wp.element.createElement(InnerBlocks.Content)
        )
      );
    }
  });
})(window.wp);
