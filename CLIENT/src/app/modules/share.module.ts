import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ListPostItemComponent } from "../Components/list-post-item/list-post-item.component";

@NgModule({
    declarations: [
        ListPostItemComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ListPostItemComponent
    ]
})
export class ShareModule { }
