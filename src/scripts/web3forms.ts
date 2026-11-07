// Sends any <form data-web3forms> to Web3Forms, which emails it to Junxuan.Bao@Gmail.com.
// The form needs a hidden `access_key` input (PUBLIC_WEB3FORMS_KEY) and a `.form-status` element.
export function initWeb3Forms() {
  document.querySelectorAll<HTMLFormElement>('form[data-web3forms]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector<HTMLElement>('.form-status');
      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const data = new FormData(form);
      const payload: Record<string, unknown> = {};
      for (const key of new Set(data.keys())) {
        const values = data.getAll(key).map(String).filter(Boolean);
        payload[key] = values.join(', ') || '-';
      }
      payload.botcheck = data.get('botcheck') ? true : '';
      payload.subject = `${form.dataset.subject} · ${data.get('company') || data.get('name')}`;
      payload.from_name = String(data.get('name') ?? '');
      payload.replyto = String(data.get('email') ?? '');
      if (button) { button.disabled = true; button.dataset.label = button.textContent ?? ''; button.textContent = form.dataset.sending ?? ''; }
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.success) throw new Error(json.message || res.statusText);
        form.reset();
        if (status) { status.textContent = form.dataset.sent ?? ''; status.dataset.state = 'ok'; }
      } catch {
        if (status) { status.textContent = form.dataset.failed ?? ''; status.dataset.state = 'error'; }
      } finally {
        if (button) { button.disabled = false; button.textContent = button.dataset.label ?? ''; }
      }
    });
  });
}
