import { HostBinding, Injectable } from "@angular/core";
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
@Injectable()
export class ToastService {


    @HostBinding('class')
    classes = 'example-items-rows';

    constructor(private toastrService: NbToastrService) {
    }

    showToast(status: NbComponentStatus, message: string) {
        this.toastrService.show("", message, { status });
    }
}