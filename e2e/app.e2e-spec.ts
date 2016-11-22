import { ExampleLoggingServicePage } from './app.po';

describe('example-logging-service App', function() {
  let page: ExampleLoggingServicePage;

  beforeEach(() => {
    page = new ExampleLoggingServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
