import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformePdfComponent } from './informe-pdf-component';

describe('InformePdfComponent', () => {
  let component: InformePdfComponent;
  let fixture: ComponentFixture<InformePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformePdfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformePdfComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
