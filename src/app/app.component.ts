import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypedFormsComponent } from './components/forms/typed-forms/typed-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TypedFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
