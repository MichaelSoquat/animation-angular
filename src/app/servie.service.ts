import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class ServieService {
  
  constructor() {
    
  }



  array: number[] = [0, 1, 2, 3, 4, 5, 6]

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
