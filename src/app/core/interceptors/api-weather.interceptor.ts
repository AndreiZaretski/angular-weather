import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiWeatherInterceptor: HttpInterceptorFn = (req, next) => {
  const { apiKey } = environment;
  const newReq = req.clone({
    setParams: {
      appid: apiKey,
    },
  });
  return next(newReq);
};
