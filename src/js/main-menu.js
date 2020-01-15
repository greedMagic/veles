function MainMenu(options) {
  this.domNode = options.domNode;
  this.domNodeMod = options.domNodeMod;
  this.domNodeControl = options.domNodeControl;

  this.menuState = false;

  this.keyCode = Object.freeze({
    'RETURN': 13,
    'ESC': 27,
    'SPACE': 32
  });
};

MainMenu.prototype.toggleMenu = function () {
  if (!this.menuState) {
    this.menuState = true;
    this.domNode.classList.add(this.domNodeMod);
  } else {
    this.menuState = false;
    this.domNode.classList.remove(this.domNodeMod);
  }
}

MainMenu.prototype.handleClick = function (event) {
  this.toggleMenu();
};

MainMenu.prototype.toggleMenuOff = function () {
  if (this.menuState) {
    this.menuState = false;
    this.domNode.classList.remove(this.domNodeMod);
  }
}

MainMenu.prototype.init = function () {
  const buttons = this.domNode.querySelectorAll(this.domNodeControl);
  if (buttons.length > 0) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', this.handleClick.bind(this));
      buttons[i].addEventListener('keyup', this.handleKeyup.bind(this));
    }
    window.addEventListener('keyup', this.handleKeyupWindow.bind(this));
  }
};


MainMenu.prototype.handleKeyup = function (event) {
  switch (event.keyCode) {
    case this.keyCode.SPACE:
    case this.keyCode.RETURN:
      if (this.popupMenu) {
        this.toggleMenu();
        event.stopPropagation();
        event.preventDefault();
      }
      break;
    case this.keyCode.ESC:
      this.toggleMenuOff();
      break;
    default:
      break;
  }
};

MainMenu.prototype.handleKeyupWindow = function (event) {
  if (event.keyCode === this.keyCode.ESC) {
    this.toggleMenuOff();

    event.stopPropagation();
    event.preventDefault();
  }
};

function ready() {
  const menuList = document.querySelectorAll('.main-menu');
  if (menuList.length > 0) {
    for (let i = 0; i < menuList.length; i++) {
      const menuItem = new MainMenu({
        domNode: menuList[i],
        domNodeMod: 'main-menu--active',
        domNodeControl: '.main-menu__button'
      });
      menuItem.init();
    }
  }
}

document.addEventListener("DOMContentLoaded", ready);
