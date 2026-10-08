"use client";

import {
  BadgeCheck,
  Building2,
  ChevronDown,
  CircleHelp,
  Home,
  ListChecks,
  Menu,
  MessageCircle,
  PackageSearch,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { equipment, site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [equipmentOpen, setEquipmentOpen] = useState(false);
  const whatsapp = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1021px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <button
        className={`icon-button mobile-menu-button ${open ? "is-open" : ""}`}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="mobile-drawer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && closeMenu()}>
          <aside className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu principal">
            <div className="mobile-drawer-head">
              <span className="mobile-drawer-title">MENU</span>
              <ThemeToggle className="mobile-drawer-theme" />
            </div>

            <nav className="mobile-drawer-nav" aria-label="Navegação mobile">
              <a href="#inicio" onClick={closeMenu}>
                <Home size={20} />
                <span>Início</span>
              </a>

              <div className={`mobile-drawer-group ${equipmentOpen ? "open" : ""}`}>
                <button type="button" onClick={() => setEquipmentOpen((current) => !current)} aria-expanded={equipmentOpen}>
                  <PackageSearch size={20} />
                  <span>Equipamentos</span>
                  <ChevronDown className="mobile-drawer-chevron" size={19} />
                </button>
                {equipmentOpen && (
                  <div className="mobile-drawer-submenu">
                    {equipment.map((item) => (
                      <a href={`#equipamento-${item.id}`} onClick={closeMenu} key={item.id}>{item.title}</a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#vantagens" onClick={closeMenu}>
                <BadgeCheck size={20} />
                <span>Vantagens</span>
              </a>
              <a href="#como-funciona" onClick={closeMenu}>
                <ListChecks size={20} />
                <span>Como funciona</span>
              </a>
              <a href="#avaliacoes" onClick={closeMenu}>
                <Star size={20} />
                <span>Avaliações</span>
              </a>
              <a href="#sobre" onClick={closeMenu}>
                <Building2 size={20} />
                <span>Sobre a empresa</span>
              </a>
              <a href="#faq" onClick={closeMenu}>
                <CircleHelp size={20} />
                <span>Dúvidas frequentes</span>
              </a>
              <a href="#contato" onClick={closeMenu}>
                <MessageCircle size={20} />
                <span>Contato</span>
              </a>
            </nav>

            <div className="mobile-drawer-footer">
              <a className="button button-whatsapp mobile-drawer-whatsapp" href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Falar no WhatsApp
              </a>
              <small>© {new Date().getFullYear()} {site.name}</small>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
