import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  public signup() {
    this.authService.signup(this.email, this.password)
      .subscribe(
        (res) => {
          localStorage.setItem('user', JSON.stringify(res['user']))
        },
        (err) => this.alertService.error(err)
      );
  }

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

}
