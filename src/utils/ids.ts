export function isValidUuid(text: string) {
  const uuidRegex = new RegExp(
    '^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$',
    'i',
  );

  return uuidRegex.test(text);
}
