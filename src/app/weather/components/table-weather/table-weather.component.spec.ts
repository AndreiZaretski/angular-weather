import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWeatherComponent } from './table-weather.component';

describe('TableWeatherComponent', () => {
  let component: TableWeatherComponent;
  let fixture: ComponentFixture<TableWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWeatherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
