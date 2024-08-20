import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  private fb = inject(FormBuilder);

  searchCityForm = this.fb.nonNullable.group({
    city: ['', [Validators.required, Validators.minLength(2)]],
  });

  get isFormValid() {
    return this.searchCityForm.invalid;
  }

  searchCity() {
    console.log(this.searchCityForm.value);
  }
}
