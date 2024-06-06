import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImmobilierService, Property } from '../../immobilier.service';

@Component({
  selector: 'app-edit-immobillier',
  templateUrl: './edit-immobillier.component.html',
  styleUrls: ['./edit-immobillier.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [ImmobilierService]
})
export class EditImmobillierComponent implements OnInit {
  immobillierForm: FormGroup;
  propertyId!: number;
  property: Property | undefined;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private immobilierService: ImmobilierService,
    private router: Router
  ) {
    this.immobillierForm = this.fb.group({
      name: [''],
      date: [''],
      photo: [''],
      price: [''],
      service: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.propertyId = +params['id'];
      this.property = this.immobilierService.getPropertyById(this.propertyId);

      if (this.property) {
        this.immobillierForm.patchValue(this.property);
      }
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.immobillierForm.patchValue({
        photo: file,
      });
    }
  }

  onSubmit() {
    if (this.immobillierForm.valid) {
      const updatedProperty: Property = {
        ...this.property,
        ...this.immobillierForm.value,
      };
      this.immobilierService.updateProperty(updatedProperty);
      this.router.navigate(['/immobilier/list']);
    } else {
      console.log('Form is not valid');
    }
  }
}
