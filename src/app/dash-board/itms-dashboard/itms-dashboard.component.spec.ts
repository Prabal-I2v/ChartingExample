import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmsDashboardComponent } from './itms-dashboard.component';

describe('ItmsDashboardComponent', () => {
  let component: ItmsDashboardComponent;
  let fixture: ComponentFixture<ItmsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItmsDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
