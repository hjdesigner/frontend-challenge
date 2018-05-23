import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import GetFields from '../src/view/scripts/GetAPI/fields';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Get API Fields', () => {
 
	describe('Some tests', () => {
		it('Should GetFields exist', () => {
			expect(GetFields).to.exist;
		});
		it('Should GetFields is a function', () => {
      expect(GetFields).to.be.a('function');
    });
 	});
	describe('GetFields', () => {
		let fetchedStub;
    let promise;
  
    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });
  
    afterEach(() => {
      fetchedStub.restore();
		});

		it('Should call fetch function', () => {
			const get = GetFields();
			expect(GetFields).to.be.a('function');
		});

		it('Should receive the correct url to fetch', () => {
      const get = GetFields();
      expect(fetchedStub).to.have.been.calledWith('http://localhost:3000/fields');
		});

		 it('Should return JSON Data from the promise', () => {
      promise.resolves({ _embedded: {} });
      const userApi = GetFields();
      expect(userApi.resolveValue).to.be.eql({ _embedded: {} });
    });

	})

});
