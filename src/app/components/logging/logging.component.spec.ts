import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/globals/modules/material.module';
import { loggingComponent } from './logging.component';


export class MatDialogRefMock {
  id: number = 0;
  close(value = ''): string {
    return value;
  }
}


describe('loggingComponent', () => {
  let component: loggingComponent;
  let fixture: ComponentFixture<loggingComponent>;
  const data = {
    firstName: '1.1.1.1',
    lastName: 'test'
 }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [loggingComponent],
      imports: [
        MaterialModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock  },
        { provide: MAT_DIALOG_DATA, useValue: data },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(loggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog onNoClick', () => {
    component.onNoClick();
    const expectedCloseValue = 'value';
    const closeValue = component.dialogRef.close('value') as any;
    expect(expectedCloseValue).toEqual(closeValue);
    expect(component).toBeTruthy();
  });

  it('should close dialog onokClick', () => {
    component.onOkClick();
    const expectedCloseValue = 'value';
    const closeValue = component.dialogRef.close('value') as any;
    expect(expectedCloseValue).toEqual(closeValue);
    expect(component).toBeTruthy();
  });

});
