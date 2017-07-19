import { TribesNgstartPage } from './app.po';

describe('tribes-ngstart App', function() {
  let page: TribesNgstartPage;

  beforeEach(() => {
    page = new TribesNgstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
