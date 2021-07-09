import { ActivatedRoute, Router } from '@angular/router';
import { FilesType } from './../files.model';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { UploadService } from '../../product-api/upload.service';


// icons imports
import { faKaaba, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



// http import
import { HttpEventType, HttpResponse, HttpClient, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-img-upload',
  templateUrl: './product-img-upload.component.html',
  styleUrls: ['./product-img-upload.component.css']
})
export class ProductImgUploadComponent implements OnInit {

  // icons trash
  trashIcon = faTrash;
  uploadIcon = faUpload;

  currentFilesType: FilesType = {
    progress: 0,
    message: '',
  };

  files: any;

  constructor(
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currentFilesType.filesInfos = this.uploadService.getAllFiles().pipe(
      tap((files) => this.files = files)); // request list files
  }

  selectFile(event: any): void {
    this.currentFilesType.selectedFiles = event.target.files;
  }

  upload(): void {
    this.currentFilesType.progress = 0;

    if (this.currentFilesType.selectedFiles) {
      const file: File | null = this.currentFilesType.selectedFiles.item(0);
      const pattern = /image-*/;

      if (!file.type.match(pattern)){
        alert('invalid format');
        return;
      }
      else{
        if (file) {
          this.currentFilesType.currentFile = file;

          this.uploadService.upload(this.currentFilesType.currentFile).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.currentFilesType.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.currentFilesType.message = event.body.message;
                this.currentFilesType.filesInfos = this.uploadService.getAllFiles();
              }
            },
            (err: any) => {
              console.log(err);
              this.currentFilesType.progress = 0;

              if (err.error && err.error.message) {
                this.currentFilesType.message = err.error.message;
              } else {
                this.currentFilesType.message = 'Could not upload the file!';
              }

              this.currentFilesType.currentFile = undefined;
            });
        }
      }
      this.currentFilesType.selectedFiles = undefined;
    }
  }

  delete(url: string): void {
    const splitResult = url.split('/');
    const id = splitResult[splitResult.length - 1];
    this.uploadService.deleteFileById(id).subscribe(() => {
      this.uploadService.showMessage('Produto excluido com sucesso!');
    });
  }
}


