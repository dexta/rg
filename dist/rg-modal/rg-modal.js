riot.tag2('rg-modal', '<div class="overlay {overlay--dismissable: opts.modal.dismissable}" if="{opts.modal.isvisible}" onclick="{close}"></div> <div class="modal {modal--ghost: opts.modal.ghost}" if="{opts.modal.isvisible}"> <header class="modal__header"> <button if="{opts.modal.dismissable}" type="button" class="button button--close" onclick="{close}"> &times; </button> <h3 class="heading heading--small">{opts.modal.heading}</h3> </header> <div class="modal__body"> <yield></yield> </div> <footer class="modal__footer {\'modal__footer--block\': !opts.modal.ghost}"> <button each="{opts.modal.buttons}" type="button" class="button {\'button--\' + type}" onclick="{action}" riot-style="{style}"> {text} </button> </footer> </div>', 'rg-modal .modal--ghost .modal__footer .button,[riot-tag="rg-modal"] .modal--ghost .modal__footer .button,[data-is="rg-modal"] .modal--ghost .modal__footer .button{ margin: 0 .5em 0 0; }', '', function(opts) {
var _this = this;

this.on('mount', function () {
	if (!opts.modal) opts.modal = {};
});

this.close = function () {
	if (opts.modal.dismissable) {
		opts.modal.isvisible = false;
		_this.trigger('close');
	}
};
});
