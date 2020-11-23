class Tickets extends Widget {
  constructor(node) {
    super(node, 'js-tickets', 'mobile');

    this.mobileOpen = this.queryElement('.mobile-open');
    this.mobileClose = this.queryElement('.mobile-close');
    this.mobileContent = this.queryElement('.mobile-content');

    this.hideContent = this.hideContent.bind(this);
    this.showContent = this.showContent.bind(this);

    this.init();
  }

  build() {
    this.mobileOpen.addEventListener('click', this.showContent);
    this.mobileClose.addEventListener('click', this.hideContent);
  }

  showContent() {
    this.mobileContent.classList.add('active');
    hideScrollbar();
  }

  hideContent() {
    this.mobileContent.classList.remove('active');
    showScrollbar();
  }

  destroy() {
    this.mobileOpen.removeEventListener('click', this.showContent);
    this.mobileClose.removeEventListener('click', this.hideContent);
    this.hideContent();
  }

  static init(el) {
    el && new Tickets(el);
  }
}


document.addEventListener('DOMContentLoaded', () => Tickets.init(document.querySelector('.js-tickets')));
