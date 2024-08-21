import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
export class SearchFormComponent implements OnInit {
  private fb = inject(FormBuilder);

  private weatherDataService = inject(WeatherDataService);

  private activatedRoute = inject(ActivatedRoute);

  private router = inject(Router);

  private destroyRef = inject(DestroyRef);

  searchCityForm = this.fb.nonNullable.group({
    city: [
      '',
      [Validators.required, Validators.minLength(2), noWhitespaceValidator],
    ],
  });

  get isFormValid() {
    return this.searchCityForm.invalid;
  }

  searchCity() {
    if (this.searchCityForm.valid && this.searchCityForm.value.city) {
      const queryParams: Params = { city: this.searchCityForm.value.city };
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge',
      });
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        if (params['city']) {
          this.searchCityForm.patchValue({
            city: params['city'],
          });
          this.weatherDataService.changeSearchCity(params['city']);
        }
      });
  }
}
