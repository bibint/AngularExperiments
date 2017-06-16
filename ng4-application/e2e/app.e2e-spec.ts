import { Ng4ApplicationPage } from './app.po';

describe('ng4-application App', () => {
  let page: Ng4ApplicationPage;

  beforeEach(() => {
    page = new Ng4ApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
