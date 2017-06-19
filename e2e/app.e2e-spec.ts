import { CampsearchPage } from './app.po';

describe('campsearch App', () => {
  let page: CampsearchPage;

  beforeEach(() => {
    page = new CampsearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
