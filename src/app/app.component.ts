import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  array: [string, string, string, string] = ['hallo', 'hey', 'hi', 'ok'];
  text: any = '';
  data: any = '';
  pushTextToArray(text: string) {
    console.log(text)
    this.text = text;
    this.array.push(this.text);
    this.text = '';
  }

  getData(data:any) {
    console.log(data)
    this.data=data;
  }
}



