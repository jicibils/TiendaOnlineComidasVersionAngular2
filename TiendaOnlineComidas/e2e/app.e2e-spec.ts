import { TiendaOnlineComidasPage } from './app.po';

describe('tienda-online-comidas App', function() {
  let page: TiendaOnlineComidasPage;

  beforeEach(() => {
    page = new TiendaOnlineComidasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
