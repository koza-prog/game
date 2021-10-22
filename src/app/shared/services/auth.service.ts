import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export class Uzytkownik {
    email: string;
    userName?: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl="http://10.0.0.63:8003/";
  // authUrl="http://192.168.68.112:8003/"
  private currentUserSubject: BehaviorSubject<Uzytkownik>;
  public currentUser: Observable<Uzytkownik>;
  constructor(private http: HttpClient) { }

  public get currentUserValue(): any {
    console.log(this.currentUserSubject.value)
    return this.currentUserSubject.value
  }
  login(email,password){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    // console.log({a,b})
    return this.http.post(this.authUrl + 'usr_login/', JSON.stringify({email,password}))
    .pipe(map((user: any)=>{
      console.log(user)
      // if(user.pracownicy[0]){
      //   localStorage.setItem('currentUser', JSON.stringify(user.pracownicy[0]))
      //   this.currentUserSubject.next(user.pracownicy[0])
      // }
      // return user
    }))
    // .pipe(
    //   map((respons: any)=>{
    //     const user = respons
    //     if(user.success){
    //       // localStorage.setItem('token',user.token)
    //       console.log(user.token)

    //     }
    //   })
    // )

  }
}
