import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-natalie',
  templateUrl: './natalie.component.html',
  styleUrls: ['./natalie.component.scss']
})
export class NatalieComponent implements OnInit {
  @Input() dataFromSister: any;
  @ContentChild('test') test!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.getDataObserver();
    this.deleteOneNumber();
  }

  ngAfterContentInit() {
    console.log('test is', this.test)

  }

  deleteOneNumber() {
    setTimeout(() => {
      this.data.pop();
      this.getDataObserver();
      console.log(this.data)
    }, 6000)
  }

  data = [1, 2, 3, 4, 5]

  getDataObserver() {
    this.getData().subscribe((data) => {
      console.log('data is', data)
    })

  }
  getData() {
    let observable = new Observable((observer) => {
      observer.next(this.data)

      setTimeout(() => {
        observer.next('Hey this is the next data');
      }, 2000)
    })


    return observable;
  }

}



