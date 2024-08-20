import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SearchStateService } from '../../services/search-state.service';

@Component({
  selector: 'app-preset-fiter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './preset-fiter.component.html',
  styleUrl: './preset-fiter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresetFiterComponent {
  formatWeather = [
    { value: 'hourly', name: 'Часы' },
    { value: 'daily', name: 'Дни' },
  ];

  private fb = inject(FormBuilder);

  private searchStateService = inject(SearchStateService);

  presetFilterForm = this.fb.nonNullable.group({
    format: [this.searchStateService.getCurrentFormatWeather],
  });

  changeFormat() {
    if (this.presetFilterForm.value.format) {
      this.searchStateService.changeFormatWeather(
        this.presetFilterForm.value.format,
      );
    }
  }
}
