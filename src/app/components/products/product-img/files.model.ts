import { Observable } from 'rxjs';
export class FilesType  {
  id?: any;
  selectedFiles?: FileList;
  currentFile?: File;
  progress?: number;
  message?: string;
  filesInfos?: Observable<any>;
}
