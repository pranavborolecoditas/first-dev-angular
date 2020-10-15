import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ClothesFormService } from './clothes-form.service';

@Component({
  selector: 'app-clothes-form',
  templateUrl: './clothes-form.component.html',
  styleUrls: ['./clothes-form.component.scss']
})
export class ClothesFormComponent implements OnInit, OnDestroy {

  clothesForm: FormGroup;
  submitted = false;
  clothId: any;
  errorMessage = null;
  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private clothService: ClothesFormService,
    private formBuilder: FormBuilder, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.clothId = params.id;
      if (this.clothId) {
        this.getCloth(this.clothId);
      } else {
        this.clothesForm = this.formBuilder.group({
          product: ['', Validators.required],
          productMaterial: ['', [Validators.required]]
        });
      }
    });
  }

  getCloth(id) {
    this.clothService.getCloth(id).subscribe(res => {
      this.clothesForm = new FormGroup({
        product: new FormControl(res['product']),
        productMaterial: new FormControl(res['productMaterial'])
      });
    })
  }

  onSubmit() {
    console.log(this.clothesForm.value);
    if(this.clothesForm.value.product && this.clothesForm.value.productMaterial) {
      if (this.clothId) {
        this.clothService.editCloth(this.clothesForm.value, this.clothId).subscribe(res => {
          this.router.navigate(['/home']);
        })
      } else {
        this.clothService.createCloth(this.clothesForm.value).subscribe(res => {
          this.router.navigate(['/home']);
        })
      } 
    } else {
        this.errorMessage = 'All Fields are mandatory'
    }
  }

  redirectToHome() {
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
