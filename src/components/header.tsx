import { MessageCircle, Phone } from "lucide-react";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/data/site";

export function Header() {
  const whatsapp = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#inicio" aria-label="Aldeota Locações - início"><Logo /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#vantagens">Vantagens</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="header-actions">
          <a className="icon-button mobile-call-button" href={`tel:+${site.phoneE164}`} aria-label={`Ligar para ${site.phoneDisplay}`}>
            <Phone size={20} />
          </a>
          <a className="button button-whatsapp desktop-whatsapp" href={whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={19} /> Falar no WhatsApp
          </a>
          <ThemeToggle className="desktop-theme-toggle" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
