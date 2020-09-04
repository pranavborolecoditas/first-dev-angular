import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-clothes-form',
  templateUrl: './clothes-form.component.html',
  styleUrls: ['./clothes-form.component.scss']
})
export class ClothesFormComponent implements OnInit, OnDestroy {

  clothesForm: FormGroup;
  submitted = false;
  private routeSub: Subscription;

  constructor(
      private route: ActivatedRoute,
      private formBuilder:
      FormBuilder,private router: Router
  ) { }

  ngOnInit(): void {
    // this.routeSub = this.route.params.subscribe(params => {

    // });
    // this.getSportListCall(this.userID);

    this.clothesForm = this.formBuilder.group({
      winnerName: ['', Validators.required],
      sportName: ['', [Validators.required]]
    });
  }

  onSubmit() {

  }

  redirectToHome(){
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
