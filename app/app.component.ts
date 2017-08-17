

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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class FunAppComponent {
  title = 'app';
}
