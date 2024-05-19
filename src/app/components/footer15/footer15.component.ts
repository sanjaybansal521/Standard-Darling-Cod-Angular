import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer15',
  templateUrl: 'footer15.component.html',
  styleUrls: ['footer15.component.css'],
})
export class Footer15 {
  @Input()
  content2: string = 'Connect with random people worldwide through video chat.'
  @Input()
  privacyLink: string = 'Privacy Policy'
  @Input()
  logoAlt: string = 'Video Sync Name Logo'
  @Input()
  termsLink: string = 'Terms of Service'
  @Input()
  copyright: string = '© 2023 Video Sync Name. All rights reserved.'
  @Input()
  cookiesLink: string = 'Cookies'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  action1: string = 'Get Started'
  @Input()
  content1: string = 'Start connecting with people around the world today!'
  constructor() {}
}
