import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading!: boolean;
  errorMsg!: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onLogin() {
    this.loading = true;
    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.auth.loginUser(email, password).pipe(
        tap(() => {
          this.loading = false;
          if (this.auth.isAdmin$ && email == "admin@gmail.com" && password == "passer") {
            this.router.navigate(['/admin']);
          }
          else
          {
            this.router.navigate(['/dash']);
          }
        }),
        catchError(error => {
          this.loading = false;
          this.errorMsg = error.message;
          return EMPTY;
        })
      ).subscribe();
    }





}
