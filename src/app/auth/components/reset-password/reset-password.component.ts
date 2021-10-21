import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(forgotPasswordEmail: NgForm) {
    console.log(forgotPasswordEmail.value);  // { first: '', last: '' }
    console.log(forgotPasswordEmail.valid);  // false
  }
}
