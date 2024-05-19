import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Gallery1 } from './gallery1/gallery1.component'
import { CTA1 } from './cta1/cta1.component'
import { Navbar4 } from './navbar4/navbar4.component'
import { Contact4 } from './contact4/contact4.component'
import { FAQ1 } from './faq1/faq1.component'
import { Footer15 } from './footer15/footer15.component'
import { Features18 } from './features18/features18.component'
import { Features171 } from './features171/features171.component'
import { Features17 } from './features17/features17.component'
import { Logos1 } from './logos1/logos1.component'
import { Hero3 } from './hero3/hero3.component'

@NgModule({
  declarations: [
    Gallery1,
    CTA1,
    Navbar4,
    Contact4,
    FAQ1,
    Footer15,
    Features18,
    Features171,
    Features17,
    Logos1,
    Hero3,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Gallery1,
    CTA1,
    Navbar4,
    Contact4,
    FAQ1,
    Footer15,
    Features18,
    Features171,
    Features17,
    Logos1,
    Hero3,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
