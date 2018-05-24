import 'jsdom-global/register';
import chai, { expect } from 'chai';
import TextareaFields from '../src/view/scripts/components/TextareaFields.js';

describe('TextareaFields', () => {
  describe('Some tests', () => {
    it('Should TextareaFields exit', () => {
      expect(TextareaFields).to.exist;
    });
    it('Should TextareaFields is a function', () => {
      expect(TextareaFields).to.be.a('function');
    })
  })
  
describe('TextareaFields', () => {
  const data = {
    "name": "Informações Adicionais",
    "label": "Informações Adicionais",
    "type": "big_text",
    "placeholder": "Descreva o que você precisa",
    "required": false
  }
  const data2 = {
    "name": "Informações Adicionais",
    "label": "Informações Adicionais",
    "type": "big_text",
    "placeholder": "",
    "required": false
  }
  const data3 = {
    "name": "Informações Adicionais",
    "label": "Informações Adicionais",
    "type": "big_text",
    "placeholder": "",
    "required": true
  }
  const markup = `<div class="form__field">
    <label for="Informações Adicionais" class="form__label">Informações Adicionais</label>
    <textarea class="form__field" id="Informações Adicionais" name="Informações Adicionais" placeholder="Descreva o que você precisa"></textarea>
  </div>`;

  const markup2 = `<div class="form__field">
    <label for="Informações Adicionais" class="form__label">Informações Adicionais</label>
    <textarea class="form__field" id="Informações Adicionais" name="Informações Adicionais" placeholder=""></textarea>
  </div>`;

  const markup3 = `<div class="form__field">
    <label for="Informações Adicionais" class="form__label">Informações Adicionais</label>
    <textarea class="form__field" id="Informações Adicionais" name="Informações Adicionais" placeholder="" required="required"></textarea>
  </div>`;
  
  it('Should create and append the markup give a correct data and markup', () => {
    const element = document.createElement('div');
    TextareaFields(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('Must create and attach the markup without passing the placeholder to provide correct data and markup', () => {
    const element = document.createElement('div');
    TextareaFields(data2, element);
    expect(element.innerHTML).to.be.eql(markup2);
  })

  it('You must create and attach the markup as a required field to provide correct data and markup', () => {
    const element = document.createElement('div');
    TextareaFields(data3, element);
    expect(element.innerHTML).to.be.eql(markup3);
  })
})
  
})