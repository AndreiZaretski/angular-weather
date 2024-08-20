import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly localStorage: Storage;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const storage = this.document.defaultView?.localStorage;

    this.localStorage = storage ?? {
      length: 0,

      clear: () => {},
      getItem: () => null,
      key: () => null,
      removeItem: () => {},
      setItem: () => {},
    };
  }

  setItem(key: string, value: unknown): void {
    this.localStorage.setItem(this.getKey(key), JSON.stringify({ value }));
  }

  getItem<T>(key: string): T | null {
    const data: string | null = this.localStorage.getItem(this.getKey(key));

    if (data !== null) {
      try {
        return JSON.parse(data).value;
      } catch (e) {
        return null;
      }
    }

    return null;
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(this.getKey(key));
  }

  getKey(key: string) {
    return key;
  }
}
