import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-service.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;

  constructor(private GitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.displayQuery = params.get('query');
      this.searchQuery = params.get('query');
      return this.gitSearch();
    }
    )
    this.route.data.subscribe((result) => {
      this.title = result.title
    });
  };

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then((response) => {
      this.searchResults = (response as GitSearch)
    }, (error) => {
      alert("Error: " + error.statusText)
    })

  }

  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery])
  }

}
