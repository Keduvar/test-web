// Локальное тестовое действие: проверяем выполнение JavaScript и нажатие кнопки.
document.querySelector('[data-test="action-button"]').addEventListener('click', () => {
  document.querySelector('[data-test="action-result"]').textContent = 'Кнопка нажата: JavaScript работает.';
});
