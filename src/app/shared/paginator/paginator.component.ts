import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FilterCharacter,
  GetCountsGQL,
} from 'src/app/services/rickAndMortyGraphql.service';
import { PageEvent } from '@angular/material/paginator';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  public characterCount = 800;
  public page = 1;
  @Input() filter: FilterCharacter = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countServie: GetCountsGQL,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.getCounts(this.filter);
    this.route.params.subscribe((params) => {
      this.page = +params['id'];
    });
    this.filterService.getFilter().subscribe((filter) => {
      this.getCounts(filter);
    });
  }

  getCounts(filter: FilterCharacter) {
    this.countServie.fetch({ filter: filter }).subscribe((result) => {
      if (result.data.characters?.info?.count) {
        this.characterCount = result.data.characters.info.count;
      }
    });
  }

  pageChange($event: PageEvent) {
    this.router.navigate(['characters', $event.pageIndex + 1]);
  }
}
