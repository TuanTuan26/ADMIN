import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cinemas: any[], searchText: string): any[] {

    if (!cinemas) {
      return [];
    }
    if (!searchText) {
      return cinemas;
    }
    searchText = searchText.toLocaleLowerCase();

    return cinemas.filter(c => {
      return c.name.toLocaleLowerCase().includes(searchText) || c.address.toLocaleLowerCase().includes(searchText) ;
    });
  }
}
