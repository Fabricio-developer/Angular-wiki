import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchExhaustMapComponent } from './switch-exhaust-map.component';

describe('SwitchExhaustMapComponent', () => {
  let component: SwitchExhaustMapComponent;
  let fixture: ComponentFixture<SwitchExhaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchExhaustMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchExhaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
