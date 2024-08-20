import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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

  presetFilterForm = this.fb.group({
    format: [this.formatWeather[0].value],
  });

  changeFormat() {
    console.log(this.presetFilterForm.value);
  }
}
