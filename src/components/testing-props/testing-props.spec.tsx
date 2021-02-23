import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { TestingProps } from './testing-props';

describe('testing-props', () => {
  it('should build', () => {
    expect(new TestingProps()).toBeTruthy();
  });

  describe('can pass props using element attributes', () => {
    let page: SpecPage;
    let element;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [TestingProps],
        html: '<testing-props first="Carlos" last="Parker"></testing-props>'
      });
      element = await page.doc.querySelector('testing-props');
    });

    it('should work with both the first and the last name', async () => {
      expect(element.textContent).toEqual('Hello, my name is Carlos Parker');
    });

    it('should be able to change first and the last name', async () => {
      element.first = 'Bruce';
      element.last = 'Fernandez';
      await page.waitForChanges();
      expect(element.textContent).toEqual('Hello, my name is Bruce Fernandez');
    });
  });
});
