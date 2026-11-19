/**
 * Счётчик посещений.
 *
 * Стандартная статистика GitHub не отличает мои собственные посещения от чужих,
 * поэтому здесь стоит собственный минимальный счётчик.
 *
 * Собираемые данные: время (UTC), IP-адрес, User-Agent (браузер/устройство)
 * и флаг «свой/чужой» (определяется по owner_ticket в localStorage).
 *
 * Данные хранятся в текстовом логе на личном сервере, автоматически удаляются
 * через 7 дней, не используются в коммерческих целях и не передаются третьим лицам.
 */

const COUNTER_URL = 'https://counter.155-212-168-28.sslip.io/visit-counter.gif';
const OWNER_TICKET_KEY = 'owner_ticket';

// Один заход = один запрос: StrictMode в dev-режиме дважды вызывает эффекты,
// да и повторное монтирование не должно накручивать счётчик.
let sent = false;

export function trackVisit(): void {
  if (sent) return;
  sent = true;

  let ticket = '';

  try {
    ticket = localStorage.getItem(OWNER_TICKET_KEY) ?? '';
  } catch {
    // Приватный режим / заблокированное хранилище — считаем заход без тикета.
  }

  const img = new Image();
  img.src = `${COUNTER_URL}?ticket=${encodeURIComponent(ticket)}`;
}
