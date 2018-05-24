
/* eslint indent: [2, 2] */
export default function TextareaFields(data, element) {
  const elementHTML = element;
  const item = data;
  const markup = `<div class="form__field">
    <label for="${item.name}" class="form__label">${item.label}</label>
    <textarea class="form__field" id="${item.name}" name="${item.name}" placeholder="${item.placeholder}" ${item.required === true ? 'required="required"' : ''}></textarea>
  </div>`;
  elementHTML.insertAdjacentHTML('beforeend', markup);
}
