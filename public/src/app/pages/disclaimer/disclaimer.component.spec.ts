import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISCLAIMERComponent } from './disclaimer.component';

describe('DISCLAIMERComponent', () => {
  let component: DISCLAIMERComponent;
  let fixture: ComponentFixture<DISCLAIMERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DISCLAIMERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DISCLAIMERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
