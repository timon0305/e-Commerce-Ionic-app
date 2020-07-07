import { CurencyPipe } from './curency.pipe';

describe('CurencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurencyPipe();
    expect(pipe).toBeTruthy();
  });
});
