import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './inputtext.component';

describe('InputbuttonComponent', () => {
  let component: InputTextComponent
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
