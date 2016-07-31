import { Ng2HttpPage } from './app.po';

describe('ng2-http App', function() {
  let page: Ng2HttpPage;

  beforeEach(() => {
    page = new Ng2HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
