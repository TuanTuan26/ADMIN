import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CinemaServiceService } from './../../../service/cinema-service.service';

@Component({
  selector: 'app-cinema-create',
  templateUrl: './cinema-create.component.html',
  styleUrls: ['./cinema-create.component.scss']
})
export class CinemaCreateComponent implements OnInit {
  form: FormGroup;
  isUpdate: any = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cinemaService: CinemaServiceService

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      introduce: ['', Validators.required],
    });
    this.route.data.subscribe(({cinema}) => {

      this.isUpdate = cinema && cinema.id !== undefined;
      console.log(this.isUpdate);
      if (this.isUpdate) {
        this.form.patchValue({
          id: cinema.id,
          name: cinema.name,
          address: cinema.address,
          introduce: cinema.introduce,
        });
      }
    });
  }
  doSubmit() {
    const cinema = this.form.value;
    if (this.isUpdate) {
      this.cinemaService.update(cinema).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-cinema'),
        error => console.log(error));
    } else {
      this.cinemaService.create(cinema).subscribe(
        () => this.router.navigateByUrl('/basic-ui/ql-cinema'),
        error => console.log(error));
    }
  }


}
