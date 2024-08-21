import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PresetStateService } from '../../services/preset-state.service';

@Component({
  selector: 'app-preset-fiter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './preset-fiter.component.html',
  styleUrl: './preset-fiter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresetFiterComponent implements OnInit {
  formatWeather = [
    { value: 'hourly', name: 'Часы' },
    { value: 'daily', name: 'Дни' },
  ];

  private fb = inject(FormBuilder);

  private activatedRoute = inject(ActivatedRoute);

  private router = inject(Router);

  private presetStateService = inject(PresetStateService);

  private destroyRef = inject(DestroyRef);

  presetFilterForm = this.fb.nonNullable.group({
    format: [this.formatWeather[0].value],
  });

  changeFormat() {
    if (this.presetFilterForm.value.format) {
      const queryParams: Params = {
        format: this.presetFilterForm.value.format,
      };
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
        if (params['format']) {
          this.presetFilterForm.patchValue({
            format: params['format'],
          });
          this.presetStateService.changeFormatWeather(params['format']);
        }
      });
  }
}
