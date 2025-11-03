import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from '../../../shared/components/footer/footer';
import { CountryList } from '../../Components/country-list/country-list';

@Component({
  selector: 'app-by-region-page',
  imports: [Footer,CountryList],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage { }
