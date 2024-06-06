import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-immobillier',
  templateUrl: './manage-immobillier.component.html',
  styleUrls: ['./manage-immobillier.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ManageImmobillierComponent implements OnInit {
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      photo: [null, Validators.required],
      price: ['', Validators.required],
      service: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.propertyForm.patchValue({
        photo: file
      });
    }
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      console.log(this.propertyForm.value);
      // Ajouter la logique pour enregistrer ou mettre à jour le bien immobilier
    } else {
      console.log('Form is not valid');
    }
  }
}
