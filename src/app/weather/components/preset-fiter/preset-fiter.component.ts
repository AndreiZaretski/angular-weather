import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PresetStateService } from '../../services/preset-state.service';

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

  private presetStateService = inject(PresetStateService);

  presetFilterForm = this.fb.nonNullable.group({
    format: [this.presetStateService.getCurrentFormatWeather],
  });

  changeFormat() {
    if (this.presetFilterForm.value.format) {
      this.presetStateService.changeFormatWeather(
        this.presetFilterForm.value.format,
      );
    }
  }
}
