import {Directive, ElementRef, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';


@Directive({
  selector: '[liveSearch]',
  standalone: true
})
export class LiveSearchDirective implements OnInit, OnDestroy {
  @Input() throttle = 500;
  @Output() inputEvent = new EventEmitter<string>();

  private timeout: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener('input', () => {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.handleInputEvent();
      }, this.throttle);
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }

  private handleInputEvent(): void {
    this.inputEvent.emit(this.elementRef.nativeElement.value);
  }
}
