var BullGit = Object.create(HTMLElement.prototype);BullGit.createdCallback = function() {var shadow = this.createShadowRoot();shadow.innerHTML = "bull<mark style='color: #1393d5;background: none;'>git</mark>";};document.register('bull-git', {prototype: BullGit});
