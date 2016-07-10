import { MyTransactionsPage } from './app.po';

describe('my-transactions App', function() {
  let page: MyTransactionsPage;

  beforeEach(() => {
    page = new MyTransactionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
