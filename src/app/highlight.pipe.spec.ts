/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { HighlightPipe } from './highlight.pipe';

describe('Pipe: Highlight', () => {
  it('create an instance', () => {
    let pipe = new HighlightPipe();
    expect(pipe).toBeTruthy();
  });
});
