import { isRequired, isEmail, minLength } from '../utils/validation.js';
import { saveSessionItem, getSessionItem, removeSessionItem } from '../utils/storage.js';

const form = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');
const submitButton = document.querySelector('#submitButton');

const DRAFT_KEY = 'contactFormDraft';

function getFormData() {
  return {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
}

function setError(fieldName, message) {
  const errorElement = document.querySelector(`[data-error-for="${fieldName}"]`);
  if (errorElement) errorElement.textContent = message;
}

function clearErrors() {
  ['name', 'email', 'message'].forEach((field) => setError(field, ''));
}

function validateForm(data) {
  // TODO: Validate each field.
  // Return true if valid, false if invalid.

  let isValid = true;
  clearErrors();

  if (!isRequired(data.name)) {
    setError('name', 'Name is required.');
    isValid = false;
  }

  if (!isEmail(data.email)) {
    setError('email', 'Enter a valid email address.');
    isValid = false;
  }

  if (!minLength(data.message, 10)) {
    setError('message', 'Message must be at least 10 characters.');
    isValid = false;
  }

  return isValid;
}

function setStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
}

function saveDraft() {
  if (!form) return;
  saveSessionItem(DRAFT_KEY, getFormData());
}

function restoreDraft() {
  if (!form) return;
  const draft = getSessionItem(DRAFT_KEY);
  if (!draft) return;

  form.name.value = draft.name || '';
  form.email.value = draft.email || '';
  form.message.value = draft.message || '';
}

async function handleSubmit(event) {
  event.preventDefault();

  const data = getFormData();
  const isValid = validateForm(data);

  if (!isValid) {
    setStatus('Please fix the errors above.', 'error');
    return;
  }

  // TODO: Later, replace this fake delay with fetch('/api/contact').
  submitButton.disabled = true;
  setStatus('Submitting...', '');

  await new Promise((resolve) => setTimeout(resolve, 600));

  removeSessionItem(DRAFT_KEY);
  form.reset();
  submitButton.disabled = false;
  setStatus('Message validated successfully. Later this will be sent to your backend.', 'success');
}

function setupContactForm() {
  if (!form) return;

  restoreDraft();
  form.addEventListener('input', saveDraft);
  form.addEventListener('submit', handleSubmit);
}

setupContactForm();
