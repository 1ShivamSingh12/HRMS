import { BreadcrumPipe } from './breadcrum.pipe';

describe('BreadcrumPipe', () => {
  it('create an instance', () => {
    const pipe = new BreadcrumPipe();
    expect(pipe).toBeTruthy();
  });
});
