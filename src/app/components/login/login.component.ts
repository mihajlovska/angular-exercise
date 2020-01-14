import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user/auth/user-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private userAuthService: UserAuthService,
              private route: ActivatedRoute,
              private router: Router
  ) {
        if (this.userAuthService.currentUserValue) {
          this.router.navigate(['/']);
        }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.userAuthService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(data => { this.router.navigate([this.returnUrl]);
    }, error => {
      this.loading = false;
    });
  }
}
