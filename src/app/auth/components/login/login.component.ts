import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email  : [''],
      passwd : ['']
    })
  }

  get f(){return this.formLogin.controls}

  onSubmit(){
    // console.log(login.value)
    console.log(this.f)
    const loginObservable = {
      next: x => console.log(x),
      error: err => console.log(err)
    }
    this.authService.login(this.f.email.value, this.f.passwd.value).subscribe(loginObservable)
  }
}
