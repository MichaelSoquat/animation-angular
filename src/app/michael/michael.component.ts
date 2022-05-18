import { Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServieService } from '../servie.service';
import { Subject } from 'rxjs';
import {Observable} from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { Student } from '../student.model';



@Component({
  selector: 'app-michael',
  templateUrl: './michael.component.html',
  styleUrls: ['./michael.component.scss']
})
export class MichaelComponent implements OnInit {

  constructor(private service: ServieService, private router: Router, private route: ActivatedRoute) { }
  @Input() michael: any;
  @Output() giveToParentListener = new Subject<any>()
  @ViewChild('text')
  text!: ElementRef;
  ngOnInit(): void {
    console.log(this.michael)
    this.studentsObserver = this.getStudents();
    this.getStudentData()

  }

  giveToParent(text: any) {
    this.giveToParentListener.subscribe((data) => {
      data='123'
    })
    this.giveToParentListener.next(text)
    console.log(this.text.nativeElement.value)
    console.log(this.service.array)
    this.router.navigate(['natalie'])
  }

  students: Student[] = [];
  studentsObserver;
 
 
  getStudentData() {
    this.studentsObserver.subscribe((studentsData: Student[]) => {
      this.students = studentsData;
      console.log(this.students)
    });
  }

  informatikStudenten: Student[] = [{
    id: 1,
    name: 'Fritz',
    fach: 'Informatik'
  },
  {
    id: 2,
    name: 'Hans',
    fach: 'Informatik'
  }];

  chemieStudenten: Student[] = [{
    id: 3,
    name: 'Peter',
    fach: 'Chemie'
  }];

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {

      observer.next(this.informatikStudenten);

      setTimeout(() => {
        console.log('Jetzt schicke ich nochmals die Informatikstudenten mit next');
        observer.next(this.informatikStudenten);
      }, 12000);

      setTimeout(() => {
        console.log('sende nochmals Chemiestudenten mit next');
        observer.next(this.chemieStudenten);
      }, 16000);

      setTimeout(() => {
        console.log('Verarbeitung complete');
        // Nach einem Complete funktioniert kein error() und kein next() mehr
        observer.complete();
      }, 18000);

      // Nach einem Error funktioniert kein next() mehr
      setTimeout(() => {
        observer.error('Verdammt dieser Fehler bringt nach dem Complete gar nichts!!!');
      }, 20000);

    });

    return studentsObservable;
  }

  




}
