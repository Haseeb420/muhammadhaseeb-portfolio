# EmailJS templates

Use these HTML files when creating your two EmailJS templates.

## 1. Auto-reply to sender

- **File:** `autoreply-to-sender.html`
- **Use for:** Template 1 (sender gets this after submitting the form)
- **In EmailJS dashboard:**
  - **To Email:** `{{to_email}}` (dynamic — we send the submitter’s email)
  - **Subject (dynamic):** `Re: {{subject}}` — uses the subject they entered in the form
  - **Content:** Paste the full HTML from the file
- **Template variables used:** `{{name}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`
- **Env:** Set `EMAILJS_TEMPLATE_AUTOREPLY` to this template’s ID

## 2. Notification to you (owner)

- **File:** `notify-owner.html`
- **Use for:** Template 2 (you receive this when someone submits the form)
- **In EmailJS dashboard:**
  - **To Email:** `{{to_email}}` (we send `CONTACT_TO`) or set a fixed email
  - **Subject (dynamic):** `[Portfolio] {{subject}}` — uses the subject they entered in the form
  - **Content:** Paste the full HTML from the file
- **Template variables used:** `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}` (if using dynamic To)
- **Env:** Set `EMAILJS_TEMPLATE_NOTIFY` to this template’s ID

## Notes

- Replace `https://github.com` in the auto-reply footer with your real GitHub URL if needed.
- EmailJS uses `{{variable_name}}` for template params; the API sends the same names (`name`, `email`, `subject`, `message`, `to_email`).
