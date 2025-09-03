function showModal(contentId) {
  const contentTemplateElement = document.getElementById(contentId);
  const modalTemplateElement = document.getElementById('modal-template');
  const modalElements = document.importNode(modalTemplateElement.content, true);
  const backdropElement = modalElements.querySelector('.backdrop');
  const modalElement = modalElements.querySelector('.modal');
  const contentElement = document.importNode(contentTemplateElement.content, true);
  modalElement.append(contentElement);
  document.body.prepend(backdropElement, modalElement);
}

function hideModal() {
  const backdropElement = document.querySelector('.backdrop');
  const modalElement = document.querySelector('.modal');
  backdropElement.remove();
  modalElement.remove();
};

export { showModal, hideModal };
