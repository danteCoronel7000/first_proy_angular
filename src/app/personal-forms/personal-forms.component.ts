import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal-forms',
  templateUrl: './personal-forms.component.html',
  styleUrls: ['./personal-forms.component.css'],
})
export class PersonalFormsComponent implements OnInit {
  contact_form!: FormGroup;

  constructor(private form_builder: FormBuilder) {}

  ngOnInit(): void {
    this.contact_form = this.initForm();
    this.contact_form.get('user')?.valueChanges.subscribe(value => {
      console.log('User field value:', value);
    });
  }

  onSubmit(): void {
    if (this.contact_form.valid) {
      const contact_form_data = this.contact_form.value;
      let string_form = "";
      for (const [key, value] of Object.entries(contact_form_data)) {
        string_form += `${key}: ${value}<br>`;
      }

      Swal.fire({
        icon: "success",
        html: string_form,
        title: "Formulario enviado",
      });

      console.log('form ->', this.contact_form.value);
    } else {
      Swal.fire({
        icon: "error",
        text: "Por favor complete todos los campos requeridos.",
        title: "Formulario incompleto",
      });
    }
  }

  initForm(): FormGroup {
    // Declaramos las propiedades que tendrá nuestro formulario, para eso utilizamos FormBuilder
    return this.form_builder.group({
      cedula: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      first_ap: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      last_ap: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      estadoCivil: ['', [Validators.required]],
      department: ['', [Validators.required]],
      user: ['', [Validators.required, Validators.maxLength(9)]],
      password: ['', [Validators.required]],
      repeat_password: ['', [Validators.required]]
    });
  }
}
