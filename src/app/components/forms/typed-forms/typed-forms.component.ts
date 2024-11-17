import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  standalone: true,
  imports: [],
  templateUrl: './typed-forms.component.html',
  styleUrl: './typed-forms.component.scss'
})
export class TypedFormsComponent {

  private formBuilderService = inject(FormBuilder);

  protected form = this.formBuilderService.group({
    name: ['', { validators: [] }],
    email: ['', { validators: [] }],
    pin: [0, { validators: [] }]
  })

  protected printForm(){
    console.log(this.form.value);

  }

}
