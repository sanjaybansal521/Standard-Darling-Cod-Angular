import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-faq1',
  templateUrl: 'faq1.component.html',
  styleUrls: ['faq1.component.css'],
})
export class FAQ1 {
  @Input()
  faq4Question: string =
    'Are there any age restrictions on the video sync name website?'
  @Input()
  faq5Answer: string =
    'There are reporting tools available for users to flag any misconduct or inappropriate behavior they encounter.'
  @Input()
  faq5Question: string =
    'How can I report inappropriate behavior on the video sync name website?'
  @Input()
  heading1: string = 'FAQs'
  @Input()
  faq1Question: string = 'How does the video sync name website work?'
  @Input()
  content1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  @Input()
  action1: string = 'Contact'
  @Input()
  heading2: string = 'Still have a question?'
  @Input()
  faq4Answer: string =
    'Users must be of legal age in their respective countries to use the platform.'
  @Input()
  faq2Answer: string =
    'We prioritize user safety and have measures in place to ensure a secure and enjoyable experience for all users.'
  @Input()
  faq1Answer: string =
    'The video sync name website allows users to connect with random people worldwide through video chat, similar to Omegle.'
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  faq3Answer: string =
    'The platform randomly matches users for video chats to provide a diverse and engaging experience.'
  @Input()
  faq2Question: string = 'Is it safe to use the video sync name website?'
  @Input()
  faq3Question: string =
    'Can I choose who I connect with on the video sync name website?'
  constructor() {}
}
