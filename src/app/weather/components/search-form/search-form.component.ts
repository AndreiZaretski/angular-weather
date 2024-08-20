import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WeatherDataService } from '../../services/weather-data.service';

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

  private destroyRef = inject(DestroyRef);

  searchCityForm = this.fb.nonNullable.group({
    city: ['', [Validators.required, Validators.minLength(2)]],
  });

  get isFormValid() {
    return this.searchCityForm.invalid;
  }

  searchCity() {
    if (this.searchCityForm.value.city) {
      this.weatherDataService
        .saveDate(this.searchCityForm.value.city)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe();
    }
  }
}
