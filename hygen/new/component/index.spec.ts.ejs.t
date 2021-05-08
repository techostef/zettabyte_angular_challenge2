---
to: <%= absPath %>/<%= camelName %>.component.spec.ts
---
import { TestBed } from '@angular/core/testing';
import { <%= componentName %>Component } from './<%= camelName %>.component';

describe('<%= componentName %>Component', () => {
  it('should create the <%= componentName %>Component', () => {
    const fixture = TestBed.createComponent(<%= componentName %>Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
