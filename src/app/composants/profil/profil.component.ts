import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.setupCarousel();
  }

  setupCarousel(): void {
    const images = document.querySelectorAll('#carousel img');
    const pagination = document.querySelector('#pagination');

    function createPaginationMarkers() {
      images.forEach((img, index) => {
        const imgElement = img as HTMLImageElement;

        const imgViewName = `--${imgElement.id}`;
        imgElement.style.setProperty('--view-timeline-name', imgViewName);

        const marker = document.createElement('button');
        marker.type = 'button';
        marker.role = 'tab';
        marker.style.setProperty('--animation-timeline', imgViewName);
        marker.addEventListener('click', () =>
          imgElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          })
        );

        pagination?.appendChild(marker);
      });

      const paginationButtons = pagination?.querySelectorAll('button');
      if (paginationButtons && paginationButtons.length > 1) {
        paginationButtons[0].classList.add('previous');
        paginationButtons[paginationButtons.length - 1].classList.add('next');
      }

      document.body.style.setProperty(
        '--timeline-scope',
        `${Array.from(images).map(
          (image) => {
            const imgElement = image as HTMLImageElement;
            return imgElement.style.getPropertyValue('--view-timeline-name');
          }
        )}`
      );
    }

    // Check browser support for Scroll-driven Animations
    if (CSS.supports('view-timeline-axis', 'inline')) {
      createPaginationMarkers();
    }

    // Start scrolling from the second image
    // Note: Ensure that 'carousel' is defined or replace it with the correct reference.
    // carousel.scrollBy(100, 0);
  }
}
