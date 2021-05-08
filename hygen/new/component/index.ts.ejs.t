---
to: <%= absPath %>/<%= camelName %>.component.ts
---

import { Component } from '@angular/core';

@Component({
  selector: '<%= className %>-comp',
  templateUrl: './<%= camelName %>.component.html',
  styleUrls: ['./<%= camelName %>.component.css']
})

export class <%= componentName %>Component {
  title = 'test';
}

