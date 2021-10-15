import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  projects = [
    {
      name: 'BIG BANG',
    },
    {
      name: 'REAL ESTATE',
    },
    {
      name: 'BANKING',
    },
    {
      name: 'Projection 2021',
    },
    {
      name: 'Nasa lorem abc xyze and so long',
    },
  ];
}
