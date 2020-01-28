import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjsTextEditorComponent } from './ejs-text-editor.component';

describe('EjsTextEditorComponent', () => {
  let component: EjsTextEditorComponent;
  let fixture: ComponentFixture<EjsTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjsTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjsTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
