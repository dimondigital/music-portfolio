import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTextComponent } from './live-text.component';

describe('LiveTextComponent', () => {
  let component: LiveTextComponent;
  let fixture: ComponentFixture<LiveTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
