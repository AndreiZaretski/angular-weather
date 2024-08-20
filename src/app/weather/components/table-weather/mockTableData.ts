import { Observable, of } from 'rxjs';
import { FormatWeather } from '../../models/enums/format-wearher';

export const formatMock: Observable<FormatWeather> = of(FormatWeather.Hourly);
