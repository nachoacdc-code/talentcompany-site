## Submissions (temporary)

This Astro site is built as a **static** site, so it cannot write to server-side files at runtime.

Current behavior:
- If `PUBLIC_FORMSPREE_ACTION` is set, the **Tell Us Your Needs** modal will POST submissions to Formspree.
- If it’s not set (or the request fails), submissions are **saved locally in the user’s browser** and can be exported via **Download CSV**.

Temporary workflow (until a CRM/webhook is wired):
1. Use the **Download CSV** button in the modal.
2. Save the file into this folder (`data/submissions/`) for safekeeping / manual import.

