import { Injectable, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Injectable()
export class DialogService {
  constructor(private dialogService: NbDialogService) { }

  openDialog(dialog: TemplateRef<any>, message: string) {
    this.dialogService.open(dialog, {
      context: message,
    });
  }
}