import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})

export class RecuperarClaveComponent implements OnInit{
  contact_form!: FormGroup;

  constructor(private form_builder: FormBuilder) {}

  ngOnInit(): void{
    this.contact_form = this.initForm();
    this.contact_form.get('user')?.valueChanges.subscribe(value => {
      console.log('User field value:', value);
    });
  }

  onSubmit(): void{
    const formData = this.contact_form.value;

    // Crea un string con los datos del formulario para el alert
    let message = "";
    for (const [key, value] of Object.entries(formData)) {
      message += `${key}: ${value}<br>`;
    }
  
    Swal.fire({
      icon: "success",
      html: message,
      title: "Formulario enviado",
    });
    console.log('form ->', this.contact_form.value)
  }

  initForm(): FormGroup {
    //declaramos las propiedades que tendra nuestro formulario, para eso utilizamos FormBuilder
    return this.form_builder.group({
      user: ['', [Validators.required, Validators.maxLength(9)]],
      password: ['', [Validators.required]],
      repeat_password: ['', [Validators.required]]
    })
  }


}
