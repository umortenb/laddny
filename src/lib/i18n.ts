export async function getIntl(locale) {
  const { messages } = await import(`../locales/${locale}/messages.js`);

  return messages;
}
