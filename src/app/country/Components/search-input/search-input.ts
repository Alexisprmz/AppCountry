import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput { 
   placeholder: string = 'Buscar...';

  constructor(private router: Router) {}

  ngOnInit() {
    // 👇 Detecta los cambios de ruta para actualizar el placeholder automáticamente
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url.includes('by-capital')) {
          this.placeholder = 'Buscar por capital...';
        } else if (event.url.includes('by-country')) {
          this.placeholder = 'Buscar por país...';
        } else {
          this.placeholder = 'Buscar...';
        }
      });
  }
}
