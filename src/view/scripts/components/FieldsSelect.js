export default function FieldsSelect(data, element) {
	const elementHTML = element;
	const item = data;
	const markup = `<div class="form__field">
		<label for="${item.name}" class="form__label">${item.label}</label>
		<select id="${item.name}" name="${item.name}" class="form__input" ${item.required === true ? 'required="required"' : ''}>
			<option value="" hidden>${item.mask}</option>
			${Object.keys(item.values).map(option => `<option value="${item.values[option]}">${option}</option>\n`).join('')}
		</select>
	</div>`;
	elementHTML.insertAdjacentHTML('beforeend', markup);
}
