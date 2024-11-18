import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './typed-forms.component.html',
  styleUrl: './typed-forms.component.scss'
})
export class TypedFormsComponent {

  // Se caso nenhum campo pode ser null, utilize a instância do formBuild er que é feita para isso
  private formBuilderService = inject(NonNullableFormBuilder);

  protected form = this.formBuilderService.group({
    name: ['', { validators: [Validators.required] }],
    email: ['', { validators: [], nonNullable: true }],
    pin: [0, { validators: [] }]
  },)

  protected printForm(){
    console.log(this.form.value);

    this.form.reset()
    console.log("Form reseted! ",this.form.value);

  }

}
