import 'jsdom-global/register';
import chai, { expect } from 'chai';
import InputFields from '../src/view/scripts/components/InputFields.js';

describe('InputFields', () => {
	describe('Some tests', () => {
		it('should InputFields exit', () => {
			expect(InputFields).to.exist;
		});
		it('Should InputFields is a function', () => {
			expect(InputFields).to.be.a('function');
		});
  });
describe('InputFields', () => {
  const data = {
    "name": "cep",
    "label": "CEP",
    "type": "cep",
    "placeholder": "",
    "required": true
  }
  const data2 = {
    "name": "name",
    "label": "Nome",
    "type": "small_text",
    "placeholder": "",
    "required": true
  }
  const data3 = {
    "name": "email",
    "label": "Email",
    "type": "email",
    "placeholder": "Ex: nome@email.com",
    "required": true
  }
  const data4 = {
    "name": "phone",
    "label": "Celular",
    "type": "phone",
    "placeholder": "",
    "required": false
  }
  const data5 = {
    "name": "name",
    "label": "Nome",
    "type": "small_text",
    "placeholder": "",
    "required": true
  }

  const markup = `<div class="form__field">
    <label for="cep" class="form__label">CEP</label>
    <input type="tel" name="cep" id="cep" class="form__input form__input--cep" data-mask="cep" placeholder="" data-required="true">
  </div>`;

  const markup2 = `<div class="form__field">
    <label for="name" class="form__label">Nome</label>
    <input type="text" name="name" id="name" class="form__input form__input--small_text" data-mask="small_text" placeholder="" data-required="true">
  </div>`;

  const markup3 = `<div class="form__field">
    <label for="email" class="form__label">Email</label>
    <input type="email" name="email" id="email" class="form__input form__input--email" data-mask="email" placeholder="Ex: nome@email.com" data-required="true">
  </div>`;

  const markup4 = `<div class="form__field">
    <label for="phone" class="form__label">Celular</label>
    <input type="tel" name="phone" id="phone" class="form__input form__input--phone" data-mask="phone" placeholder="" data-required="false">
  </div>`;

  const markup5 = `<div class="form__field">
    <label for="name" class="form__label">Nome</label>
    <input type="text" name="name" id="name" class="form__input form__input--small_text" data-mask="small_text" placeholder="" data-required="true">
  </div>`;

  it('Should return an input of type cep since past date is type cep', () => {
    const element = document.createElement('div');
    const type = 'tel';
    InputFields(data, element, type);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('Should return an input of type text since past date is type text', () => {
    const element = document.createElement('div');
    const type = 'text';
    InputFields(data2, element, type);
    expect(element.innerHTML).to.be.eql(markup2);
  });

  it('Should return an input of type email since past date is type email', () => {
    const element = document.createElement('div');
    const type = 'email';
    InputFields(data3, element, type);
    expect(element.innerHTML).to.be.eql(markup3);
  });

  it('Should return a tel entry with input without being required', () => {
    const element = document.createElement('div');
    const type = 'tel';
    InputFields(data4, element, type);
    expect(element.innerHTML).to.be.eql(markup4);
  });

  it('Should return an input of type text if the type is not passed', () => {
    const element = document.createElement('div');
    const type = '';
    InputFields(data5, element, type);
    expect(element.innerHTML).to.be.eql(markup5);
  });

});

});
