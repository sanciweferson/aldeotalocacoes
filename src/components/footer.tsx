import { Logo } from "./logo";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div><Logo /><p>Landing page institucional para apresentação dos serviços de locação.</p></div>
        <div><b>Contato</b><a href={`tel:+${site.phoneE164}`}>{site.phoneDisplay}</a><span>{site.address}</span><span>{site.district}</span></div>
        <div><b>Navegação</b><a href="#equipamentos">Equipamentos</a><a href="#como-funciona">Como funciona</a><a href="#contato">Contato</a></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Aldeota Locações.</span><span>Projeto inicial — valide textos e catálogo com o cliente antes da publicação final.</span></div>
    </footer>
  );
}
