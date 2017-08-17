

//TODO: We want to be able to import html and css within our webpack config
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class FunAppComponent {
//   title = 'app';
// }


import { Component } from '@angular/core';

@Component({
  selector: 'funapp-root',
  template: '<h1> Hello Aoo </h1>'
})
export class FunAppComponent {
  title = 'app';
}
