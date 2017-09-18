import { AngularAcadPage } from './app.po';

describe('angular-acad App', () => {
  let page: AngularAcadPage;

  beforeEach(() => {
    page = new AngularAcadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
