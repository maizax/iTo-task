import { UrlToMovieNamePipe } from './url-to-movie-name.pipe';

describe('UrlToMovieNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UrlToMovieNamePipe();
    expect(pipe).toBeTruthy();
  });
});
