import { ArrowRight, BadgeCheck, CalendarDays, Check, Clock3, Construction, HardHat, MapPin, MessageCircle, Phone, ShieldCheck, Star, Truck } from "lucide-react";
import { equipment, site } from "@/data/site";
import { EquipmentArt, HeroEquipmentArt } from "./equipment-art";

const whatsappFor = (message: string) => `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
const whatsapp = whatsappFor(site.whatsappMessage);

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="kicker">SOLUÇÕES EM LOCAÇÃO PARA SUA OBRA</p>
          <h1>Locação de equipamentos para construção civil em <span>Fortaleza</span></h1>
          <p className="hero-lead">Andaimes, escoras metálicas e outros equipamentos para apoiar sua obra com atendimento direto e locação prática.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Solicitar orçamento <ArrowRight size={18} /></a>
            <a className="button button-secondary" href="#equipamentos">Ver equipamentos <ArrowRight size={18} /></a>
          </div>
          <div className="hero-mini-points">
            <span><Check size={16} /> Atendimento direto</span>
            <span><Check size={16} /> Empresa local</span>
            <span><Check size={16} /> Orçamento pelo WhatsApp</span>
          </div>
        </div>
        <HeroEquipmentArt />
      </div>
      <div className="shell trust-strip">
        <Trust icon={<ShieldCheck />} title="Locação prática" text="Equipamentos para diferentes etapas da obra." />
        <Trust icon={<Clock3 />} title="Atendimento rápido" text="Contato direto para consultar disponibilidade." />
        <Trust icon={<CalendarDays />} title="Período flexível" text="Combine o período conforme a necessidade da obra." />
        <Trust icon={<MapPin />} title="Atendimento local" text="Em Fortaleza, com contato próximo da sua equipe." />
      </div>
    </section>
  );
}

function Trust({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article className="trust-item"><span className="trust-icon">{icon}</span><div><b>{title}</b><p>{text}</p></div></article>;
}

export function EquipmentSection() {
  return (
    <section className="section section-soft" id="equipamentos">
      <div className="shell">
        <SectionHeading eyebrow="NOSSOS EQUIPAMENTOS" title="Categorias de locação" text="Uma primeira seleção visual para apresentar os principais tipos de equipamento. O catálogo final pode ser ajustado com a lista real da empresa." />
        <div className="equipment-grid">
          {equipment.map((item) => (
            <article className="equipment-card" id={`equipamento-${item.id}`} key={item.id}>
              <div className="equipment-visual"><EquipmentArt kind={item.kind} /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={whatsappFor(`Olá! Gostaria de solicitar um orçamento para ${item.title}.`)} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={17} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const items = [
    [<Truck key="truck" />, "Contato ágil", "Peça o orçamento e alinhe disponibilidade diretamente com a equipe."],
    [<BadgeCheck key="badge" />, "Atendimento próximo", "Uma empresa local para conversar sem burocracia sobre a sua obra."],
    [<Construction key="construction" />, "Soluções para obra", "Categorias pensadas para diferentes necessidades da construção civil."],
    [<MessageCircle key="message" />, "WhatsApp", "Um caminho rápido para orçamento, dúvidas e informações de locação."],
  ] as const;
  return (
    <section className="section" id="vantagens">
      <div className="shell">
        <SectionHeading eyebrow="POR QUE UMA LANDING PAGE DIRETA" title="O cliente encontra o que precisa sem complicação" text="O site foi pensado para apresentar a empresa, mostrar os principais equipamentos e levar o cliente rapidamente para o contato." />
        <div className="benefit-grid">{items.map(([icon, title, text]) => <article className="benefit-card" key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section section-dark" id="como-funciona">
      <div className="shell">
        <SectionHeading eyebrow="COMO FUNCIONA" title="Do contato ao equipamento na obra" text="Uma jornada simples para o cliente entender o próximo passo." light />
        <div className="steps-grid">
          <Step number="01" icon={<MessageCircle />} title="Fale com a equipe" text="Envie sua necessidade pelo WhatsApp ou telefone." />
          <Step number="02" icon={<HardHat />} title="Consulte a locação" text="Informe o equipamento, quantidade e período desejado." />
          <Step number="03" icon={<Truck />} title="Combine a entrega" text="Alinhe retirada ou entrega conforme a operação da empresa." />
        </div>
      </div>
    </section>
  );
}

function Step({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) {
  return <article className="step-card"><span className="step-number">{number}</span><span className="step-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>;
}

export function Reviews() {
  return (
    <section className="section" id="avaliacoes" aria-labelledby="avaliacoes-title">
      <div className="shell review-layout">
        <div>
          <p className="kicker">REPUTAÇÃO LOCAL</p>
          <h2 id="avaliacoes-title">Presença que já existe no Google</h2>
          <p className="section-text">O projeto pode aproveitar a presença local que a Aldeota Locações já construiu e conectar o site ao Perfil da Empresa no Google.</p>
        </div>
        <div className="rating-card">
          <div className="stars" aria-label="5 estrelas"><Star /><Star /><Star /><Star /><Star /></div>
          <strong>5,0 no Google</strong>
          <span>8 avaliações exibidas no perfil mostrado como referência.</span>
          <small>Antes da publicação final, confirme se esses dados continuam atuais.</small>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section section-soft" id="sobre">
      <div className="shell about-grid">
        <div className="about-art" aria-hidden="true">
          <div className="about-shape about-shape-one" />
          <div className="about-shape about-shape-two" />
          <EquipmentArt kind="scaffold" className="about-scaffold" />
          <EquipmentArt kind="props" className="about-props" />
        </div>
        <div>
          <p className="kicker">ALDEOTA LOCAÇÕES</p>
          <h2>Uma presença digital mais profissional para a locadora</h2>
          <p className="section-text">Esta primeira versão apresenta a empresa de forma clara, valoriza as categorias de locação e direciona o cliente para o atendimento comercial que a empresa já utiliza.</p>
          <ul className="check-list">
            <li><Check /> Site rápido e responsivo</li>
            <li><Check /> Tema claro e escuro</li>
            <li><Check /> Ilustrações vetoriais em SVG</li>
            <li><Check /> Estrutura preparada para SEO local</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    ["Como faço para pedir um orçamento?", "Use o botão de WhatsApp e informe o equipamento, a quantidade e o período que você precisa."],
    ["Quais equipamentos estão disponíveis?", "O catálogo desta primeira versão é ilustrativo. A lista final deve ser ajustada com os equipamentos reais disponíveis na empresa."],
    ["A locação pode ser por períodos diferentes?", "O período e as condições podem ser alinhados diretamente com a equipe comercial no momento do orçamento."],
    ["A empresa atende em Fortaleza?", "Sim. O endereço de referência informado é no bairro Meireles, em Fortaleza."],
  ];
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="shell faq-layout">
        <div><p className="kicker">DÚVIDAS FREQUENTES</p><h2 id="faq-title">Informações rápidas antes do contato</h2><p className="section-text">O FAQ ajuda o visitante e também organiza conteúdo útil para mecanismos de busca.</p></div>
        <div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="shell contact-card">
        <div className="contact-copy"><p className="kicker">FALE COM A ALDEOTA LOCAÇÕES</p><h2>Precisa de equipamento para sua obra?</h2><p>Entre em contato para consultar disponibilidade e solicitar um orçamento.</p><a className="button button-whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Solicitar orçamento no WhatsApp</a></div>
        <div className="contact-info">
          <a href={`tel:+${site.phoneE164}`}><Phone /><span><small>Telefone / WhatsApp</small><b>{site.phoneDisplay}</b></span></a>
          <div><MapPin /><span><small>Endereço</small><b>{site.address}</b><em>{site.district}</em></span></div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "light" : ""}`}><p className="kicker">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>;
}
