const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "6287752051970";

export function waLink(message: string, source?: string): string {
  const tagged = source ? `${message}\n\n[Sumber: ${source}]` : message;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(tagged)}`;
}

export { WA_NUMBER };
