import { MessageCircle } from 'lucide-react';
import { siteInfo } from '../data/siteInfo';

// Se "floating" è true il pulsante resta fisso in basso a destra
export default function WhatsAppButton({ floating = false, label = 'Scrivici su WhatsApp' }) {
  if (!siteInfo.whatsappNumber) return null;

  const href = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={floating ? 'whatsapp-float' : 'btn btn--whatsapp'}
      aria-label={floating ? `${label} (si apre in una nuova scheda)` : undefined}
    >
      <MessageCircle size={floating ? 26 : 18} aria-hidden="true" />
      {!floating && <span>{label}</span>}
    </a>
  );
}
