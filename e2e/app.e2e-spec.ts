import { RepairRequestAppPage } from './app.po';

describe('repair-request-app App', () => {
  let page: RepairRequestAppPage;

  beforeEach(() => {
    page = new RepairRequestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
