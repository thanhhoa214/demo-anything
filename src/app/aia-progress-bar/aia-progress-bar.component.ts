import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aia-progress-bar',
  templateUrl: './aia-progress-bar.component.html',
  styleUrls: ['./aia-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiaProgressBarComponent {
  @Input() progress = 2000;
  @Input() total = 0;
  @Input() label!: string;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get percent(): number {
    console.log(this.total + 1, typeof this.total);

    const processedTotal = this.total || 1;
    const percent = this.progress / processedTotal;
    return percent > 1 ? 1 : percent;
  }
}
