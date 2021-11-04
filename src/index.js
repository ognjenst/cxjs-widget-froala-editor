import { VDOM } from 'cx/ui';
import { Field } from 'cx/widgets';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/line_breaker.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/print.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/special_characters.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/url.min.js';
import FroalaEditor from 'react-froala-wysiwyg';

export default class FroalaField extends Field {
	onChange(value, instance) {
		instance.set('value', value || null);
	}
	declareData() {
		super.declareData({
			value: undefined
		});
	}

	renderInput(context, instance, key) {
		let { widget, data } = instance;
		let { CSS, baseClass } = widget;
		return (
			<div key={key}>
				<FroalaEditor
					className={CSS.expand(CSS.element(baseClass, 'textarea'), data.inputClass)}
					tag={instance.data.tag}
					style={data.inputStyle}
					model={instance.data.value}
					config={data.config}
					onModelChange={(value) => this.onChange(value, instance)}
				/>
			</div>
		);
	}
}

ForalaField.prototype.baseClass = 'textfield';
ForalaField.prototype.styled = true;
FroalaEditor.prototype.tag = 'textarea';
FroalaEditor.prototype.config = {
	pluginsEnabled: [
		'fullscreen',
		'align',
		'fontFamily',
		'fontSize',
		'table',
		'colors',
		'image',
		'print',
		'charCounter',
		'codeView',
		'lineBreaker',
		'specialCharacters',
		'url',
		'codeBeautifier',
	],
};
