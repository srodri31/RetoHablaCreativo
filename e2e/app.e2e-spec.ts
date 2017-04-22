import { RetoHCPage } from './app.po';

describe('reto-hc App', function() {
  let page: RetoHCPage;

  beforeEach(() => {
    page = new RetoHCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
