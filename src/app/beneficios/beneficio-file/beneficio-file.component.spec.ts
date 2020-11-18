import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioFileComponent } from './beneficio-file.component';

describe('BeneficioFileComponent', () => {
  let component: BeneficioFileComponent;
  let fixture: ComponentFixture<BeneficioFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficioFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
