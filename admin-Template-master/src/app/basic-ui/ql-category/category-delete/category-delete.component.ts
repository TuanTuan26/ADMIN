import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/model/Category';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CinemaServiceService } from 'src/app/service/cinema-service.service';
import { EventManagement } from 'src/app/service/event.management';
import { CategoryService } from 'src/app/service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {
  category: CategoryModel;
  constructor(
    public modal: NgbActiveModal,
    private categoryService: CategoryService,
    private eventManagement: EventManagement,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  delete() {

    this.categoryService.delete(this.category.id).subscribe(
      () => {

        this.eventManagement.broadcast('UPDATE_CATEGORY');
        this.modal.close();
        this.router.navigateByUrl('/basic-ui/ql-category');
      }, error => console.log(error)
    );
  }
}
