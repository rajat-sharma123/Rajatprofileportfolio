// Tab Switcher Logic for Semester Marksheets
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.add('hidden');
  });
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-brand-600', 'text-white', 'shadow-md', 'shadow-brand-600/30');
    btn.classList.add('text-gray-400');
  });

  const activePanel = document.getElementById('tab-content-' + tabId);
  const activeBtn = document.getElementById('tab-btn-' + tabId);
  if (activePanel) activePanel.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.add('bg-brand-600', 'text-white', 'shadow-md', 'shadow-brand-600/30');
    activeBtn.classList.remove('text-gray-400');
  }
}

// Modal Lightbox Logic for Marksheets
function openModal(imgSrc, title) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDownload = document.getElementById('modal-download');

  modalImg.src = imgSrc;
  modalTitle.textContent = title || 'Official Marksheet Document';
  modalDownload.href = imgSrc;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Copy to clipboard with floating toast notification
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || 'Copied to clipboard!');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(message || 'Copied to clipboard!');
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3000);
}
