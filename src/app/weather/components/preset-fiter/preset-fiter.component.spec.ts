import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetFiterComponent } from './preset-fiter.component';

describe('PresetFiterComponent', () => {
  let component: PresetFiterComponent;
  let fixture: ComponentFixture<PresetFiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresetFiterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresetFiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
