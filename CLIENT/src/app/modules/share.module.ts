import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FilterComponent } from "../Components/filter/filter.component";
import { ListPostItemComponent } from "../Components/list-post-item/list-post-item.component";
import { LoadingComponent } from "../Components/loading/loading.component";

@NgModule({
    declarations: [
        ListPostItemComponent,
        LoadingComponent,
        FilterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ListPostItemComponent,
        LoadingComponent,
        FilterComponent
    ]
})
export class ShareModule { }
