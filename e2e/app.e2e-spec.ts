import { Demo0827Page } from './app.po';

describe('demo0827 App', function() {
  let page: Demo0827Page;

  beforeEach(() => {
    page = new Demo0827Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
