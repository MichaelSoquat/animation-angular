
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'green',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(100)),


    ]),
    trigger('divState2', [
      state('normal', style({
        'background-color': 'green',
        opacity: 1,
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'red',
        opacity: 1,
        transform: 'translateX(100px) scale(1)'
      })),
      state('wild', style({
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal <=> highlighted', animate(1000)),
      transition('wild <=> *', [
        style({
          backgroundColor: 'yellow'
        }),
        animate(300, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class FormsComponent implements OnInit {
  state = 'normal';

  constructor() { }
  signUpForm: FormGroup;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }

  animate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';

  }

  shrink() {
    this.state == 'wild' ? this.state = 'normal' : this.state = 'wild';
  }
  onSubmit(form: NgForm) {

    let username = form.value.Name;
    let email = form.value.email;
    console.log(form)
    console.log(username, email)
    form.resetForm();
  }

  onSub() {

  }

}


