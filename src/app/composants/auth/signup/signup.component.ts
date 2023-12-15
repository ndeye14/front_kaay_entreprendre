import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;
  loading!: boolean;
  errorMsg!: string;
  mode!: string;
  imagePreview!: string;
  userAModifier!: User;


  constructor(
    private formBuilder: FormBuilder,
    private auth: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,

  ) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      role: ['novice', Validators.required], // Par défaut, le rôle est novice
      email: ['', Validators.required],
      password: ['', Validators.required],
      nom: [''],
      prenom: [''],
      image: [''],
      statuJuridique: [''],
      nomEntreprise: [''],
      nineaOuRegistreCommerce: [''],
      anneeExperience: [''],
      secteurActivite: [''],
      siteWeb: ['']
    });

    this.loading = true;
    this.route.params.pipe(
      switchMap(params => {
        if (!params['id']) {
          this.mode = 'new';
          this.initEmptyForm();
          this.loading = false;
          return EMPTY;
        } else {
          this.mode = 'edit';
          return this.userService.getById(params['id'])
        }
      }),
      tap(user => {
        if (user) {
          this.userAModifier = user;
          this.initModifyForm(user);
          this.loading = false;
        }
      }),
      catchError(error => this.errorMsg = JSON.stringify(error))
    ).subscribe();
  }


   initEmptyForm() {
     this.signupForm = this.formBuilder.group({
       email: [null, [Validators.required, Validators.email]],
       password: [null, [Validators.required]],
       nom: [null, [Validators.required]],
       prenom: [null, [Validators.required]],
       image: [null,[Validators.required]],
       role: [null],
       statuJuridique: [null],
       nomEntreprise: [null],
       nineaOuRegistreCommerce: [null],
       anneeExperience:[null],
       secteurActivite: [null],
        siteWeb:[null],



    });
  }


  initModifyForm(user: User) {
    this.signupForm = this.formBuilder.group({
      image: [user.image,[Validators.required]],
      nom: [user.nom, [Validators.required]],
      prenom: [user.prenom, [Validators.required]],
      email: [user.email, [Validators.required, Validators.email]],
      password: [user.password, Validators.required],
      // statut: [null],
       statuJuridique: [null],
       nomEntreprise: [null],
       nineaOuRegistreCommerce: [null],
       anneeExperience: [null],
       secteurActivite: [null],
        siteWeb:[null],


    });
    // this.imagePreview = this.userAModifier.imageUrl;
  }

  onSignup() {
    this.loading = true;

    const newUser = new User();
    newUser.email = this.signupForm.get('email')!.value;
    newUser.password = this.signupForm.get('password')!.value;
    newUser.nom = this.signupForm.get('nom')!.value;
    newUser.prenom = this.signupForm.get('prenom')!.value;
    newUser.role = this.signupForm.get('role')!.value;
    newUser.statuJuridique = this.signupForm.get('statuJuridique')!.value;
    newUser.nomEntreprise = this.signupForm.get('nomEntreprise')!.value;
    newUser.secteurActivite = this.signupForm.get('secteurActivite')!.value;
    newUser.siteWeb = this.signupForm.get('siteWeb')!.value;
    newUser.image = this.signupForm.get('image')!.value;
    newUser.nineaOuRegistreCommerce = this.signupForm.get('nineaOuRegistreCommerce')!.value;
    newUser.anneeExperience = this.signupForm.get('anneeExperience')!.value;


     this.userService.add(newUser).pipe(
        tap(({ message }) => {
          console.log(message);
          this.loading = false;
          this.router.navigate(['/loginE']);
        }),
        catchError(error => {
          console.error(error);
          this.loading = false;
          this.errorMsg = error.message;
          return EMPTY;
        })
      ).subscribe();

    // if (this.mode === 'new') {
    //   console.log("newUser");
    //   console.log(newUser);
    //   console.log(newUser.email);

    //   this.userService.add(newUser).pipe(
    //     tap(({ message }) => {
    //       console.log(message);
    //       this.loading = false;
    //       this.router.navigate(['/loginE']);
    //     }),
    //     catchError(error => {
    //       console.error(error);
    //       this.loading = false;
    //       this.errorMsg = error.message;
    //       return EMPTY;
    //     })
    //   ).subscribe();
    // } else if (this.mode === 'edit') {
    //   this.userService.edit(this.userAModifier.id, newUser, this.signupForm.get('image')!.value).pipe(
    //     tap(({ message }) => {
    //       console.log(message);
    //       this.loading = false;
    //       this.router.navigate(['/accueil']);
    //     }),
    //     catchError(error => {
    //       console.error(error);
    //       this.loading = false;
    //       this.errorMsg = error.message;
    //       return EMPTY;
    //     })
    //   ).subscribe();
    // }

  }


  // Lecture et aff de l'image
  onFileAdded(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.signupForm.get('image')!.setValue(file);
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}



