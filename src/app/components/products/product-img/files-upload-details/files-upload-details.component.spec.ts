import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUploadDetailsComponent } from './files-upload-details.component';

describe('FilesUploadDetailsComponent', () => {
  let component: FilesUploadDetailsComponent;
  let fixture: ComponentFixture<FilesUploadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesUploadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesUploadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
