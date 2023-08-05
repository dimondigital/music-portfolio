import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShowcaseComponent } from './page-showcase.component';

describe('PageShowcaseComponent', () => {
  let component: PageShowcaseComponent;
  let fixture: ComponentFixture<PageShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
