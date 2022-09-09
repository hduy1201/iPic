import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(
    private TagService: TagService,
    private Router: Router
  ) { }

  relevantKeyword: any[] = [];

  ngOnInit(): void {
    this.TagService.findSuggestion().subscribe(
      res => {
        this.relevantKeyword = <any[]>res;
      }
    )
  }

  navigate(item: string) {
    item = item.substring(1);
    console.log(item);

    this.Router.navigate(['/tag/' + item]);
  }

}
