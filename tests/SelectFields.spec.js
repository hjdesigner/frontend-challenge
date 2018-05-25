import 'jsdom-global/register';
import chai, { expect } from 'chai';
import FieldsSelect from '../src/view/scripts/components/FieldsSelect.js';

describe('FieldSelect', () => {
	describe('Some tests', () => {
		it('should FieldsSelect exit', () => {
			expect(FieldsSelect).to.exist;
		});
		it('Should FieldsSelect is a function', () => {
			expect(FieldsSelect).to.be.a('function');
		});
	});

	const data = {
		"name": "Qual será o serviço?",
    "label": "Qual será o serviço?",
    "placeholder": "Qual será o serviço?",
    "mask": "tipo de serviço",
    "type": "enumerable",
  	"required": true,
    "values": {
    	"Coloração": "Coloração",
    	"Corte": "Corte",
    	"Escova ": "Escova ",
    	"Escova progressiva/definitiva": "Escova progressiva/definitiva",
    	"Luzes": "Luzes",
    	"Manicure": "Manicure",
    	"Pedicure": "Pedicure",
    	"Penteado": "Penteado"
    }
	}
	const data2 = {
    "name": "O serviço será para quantas pessoas?",
    "label": "O serviço será para quantas pessoas?",
    "placeholder": "O serviço será para quantas pessoas?",
    "mask": "indique o número de pessoas",
    "type": "enumerable",
    "required": false,
    "values": {
     	"1": "1",
      "2": "2",
      "Mais de 3": "Mais de 3"
    }
  }

	const markup = `<div class="form__field">
		<label for="Qual será o serviço?" class="form__label">Qual será o serviço?</label>
		<select id="Qual será o serviço?" name="Qual será o serviço?" class="form__input" data-required="true">
			<option value="" hidden="">tipo de serviço</option>
			<option value="Coloração">Coloração</option>
<option value="Corte">Corte</option>
<option value="Escova ">Escova </option>
<option value="Escova progressiva/definitiva">Escova progressiva/definitiva</option>
<option value="Luzes">Luzes</option>
<option value="Manicure">Manicure</option>
<option value="Pedicure">Pedicure</option>
<option value="Penteado">Penteado</option>

		</select>
	</div>`;

	const markup2 = `<div class="form__field">
		<label for="O serviço será para quantas pessoas?" class="form__label">O serviço será para quantas pessoas?</label>
		<select id="O serviço será para quantas pessoas?" name="O serviço será para quantas pessoas?" class="form__input" data-required="false">
			<option value="" hidden="">indique o número de pessoas</option>
			<option value="1">1</option>
<option value="2">2</option>
<option value="Mais de 3">Mais de 3</option>

		</select>
	</div>`;

	it('Should create and append the markup give a correct data1 and markup1', () => {
		const element = document.createElement('div');
		FieldsSelect(data, element);
		expect(element.innerHTML).to.be.eql(markup);
	});

	it('Should create and append the markup give a correct data2 and markup2', () => {
    const element2 = document.createElement('div');
    FieldsSelect(data2, element2);
    expect(element2.innerHTML).to.be.eql(markup2);
  });
})
