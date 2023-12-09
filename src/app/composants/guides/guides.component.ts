import { Component, OnInit } from '@angular/core';
import * as ClipboardJS from 'clipboard';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  ngOnInit() {
    const snippets = document.querySelectorAll('.snippet');

    for (let i = 0; i < snippets.length; i++) {
      snippets[i].addEventListener('mouseleave', (e) => this.clearTooltip(e));
      snippets[i].addEventListener('blur', (e) => this.clearTooltip(e));
    }

    const clipboardSnippets = new ClipboardJS('.snippet', {
      text: (trigger: Element) => {
        const dataTitle = trigger.getAttribute('data-title');
        return dataTitle ? dataTitle : '';
      }
    });

    clipboardSnippets.on('success', (e) => {
      e.clearSelection();
      this.showTooltip(e.trigger as HTMLElement, 'Copied!');
    });

    clipboardSnippets.on('error', (e) => {
      this.showTooltip(e.trigger as HTMLElement, 'Copy failed!');
    });
  }

  showTooltip(el: HTMLElement, msg: string) {
    el.setAttribute('class', 'snippet tooltip');
    el.setAttribute('aria-label', msg);
  }

  clearTooltip(e: Event) {
    const target = e.currentTarget as HTMLElement;
    target.setAttribute('class', 'snippet');
    target.removeAttribute('aria-label');
  }

}
