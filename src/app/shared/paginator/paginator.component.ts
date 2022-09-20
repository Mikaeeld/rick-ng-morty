import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetCountsGQL } from 'src/app/services/rickAndMortyGraphql.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  public characterCount = 800;
  public page = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countServie: GetCountsGQL
  ) {}

  ngOnInit(): void {
    this.countServie.fetch().subscribe((result) => {
      if (result.data.characters?.info?.count) {
        this.characterCount = result.data.characters.info.count;
      }
    });
    this.route.params.subscribe((params) => {
      this.page = +params['id'];
    });
  }

  pageChange($event: PageEvent) {
    this.router.navigate([`/${$event.pageIndex + 1}`]);
  }
}
