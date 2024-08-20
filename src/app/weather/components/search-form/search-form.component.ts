import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherDataService } from '../../services/weather-data.service';
import { noWhitespaceValidator } from '../../validators/no-whitespace';

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

  private weatherDataService = inject(WeatherDataService);

  searchCityForm = this.fb.nonNullable.group({
    city: [
      this.weatherDataService.getCurrentCityName,
      [Validators.required, Validators.minLength(2), noWhitespaceValidator],
    ],
  });

  get isFormValid() {
    return this.searchCityForm.invalid;
  }

  searchCity() {
    if (this.searchCityForm.valid && this.searchCityForm.value.city) {
      this.weatherDataService.changeSearchCity(
        this.searchCityForm.value.city.trim(),
      );
    }
  }
}
