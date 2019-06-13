import { Directive, ElementRef, OnInit, ViewContainerRef, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { LoadingService } from './loading.service';
import { SpinnerComponent } from './spinner/spinner.component';

@Directive({
  selector: '[appSpinnerDuringRequest]'
})
export class SpinnerDuringRequestDirective implements OnInit {

  constructor(private factoryResolver: ComponentFactoryResolver,
              private loading: LoadingService,
              private cfr: ComponentFactoryResolver,
              private templateRef: TemplateRef<any>,
              private vcr: ViewContainerRef
              ) {
  }

  ngOnInit(): void {
      this.loading.busy$.subscribe(data => {
        if (data === true) {
          console.log('chargement spinner: ', data);
          this.loadcomponent();
          // chargement spinner
        } else {
          console.log('chargement spinner: ', data);
          this.vcr.remove();
          // supression spinner
        }
      });

  }

    loadcomponent() {
      this.vcr.clear();
      this.vcr.createEmbeddedView(this.templateRef);
      const cmpFactory = this.cfr.resolveComponentFactory(SpinnerComponent);
      this.vcr.createComponent(cmpFactory);

    }


}

