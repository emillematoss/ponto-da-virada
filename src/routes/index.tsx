import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Clock3, Compass, FileText, Heart, Sparkles, Target } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PONTO DA VIRADA | Êmille Matos" },
      {
        name: "description",
        content:
          "Uma experiência individual de autoconhecimento comportamental para compreender suas tendências, reconhecer padrões e encontrar um ponto de partida mais consciente para suas mudanças.",
      },
      { property: "og:title", content: "PONTO DA VIRADA | Êmille Matos" },
      {
        property: "og:description",
        content: "Antes de tentar mudar sua vida, compreenda quem está tentando construí-la.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    number: "01",
    title: "Você preenche o formulário",
    description:
      "Depois da inscrição, você recebe na área de membros as orientações e o formulário inicial para compartilhar informações importantes sobre você.",
  },
  {
    number: "02",
    title: "Sua análise é preparada",
    description:
      "Com suas respostas, preparo uma análise individual e um portfólio personalizado sobre seu temperamento e suas tendências comportamentais.",
  },
  {
    number: "03",
    title: "Temos nosso encontro",
    description:
      "Em uma sessão online individual de 60 minutos, apresento seu material, conversamos sobre o que faz sentido na sua realidade e identificamos possibilidades de novos passos.",
  },
  {
    number: "04",
    title: "Você segue com acompanhamento",
    description:
      "Depois da sessão, teremos 15 dias de acompanhamento para observar como você está assimilando os pontos trabalhados e apoiar seus primeiros movimentos.",
  },
];

const benefits = [
  "Compreender melhor suas tendências comportamentais",
  "Reconhecer padrões que podem estar influenciando suas escolhas",
  "Identificar características e recursos que talvez você não esteja aproveitando",
  "Olhar para seus desafios com mais clareza e menos autocobrança",
  "Encontrar um ponto de partida mais consciente para suas mudanças",
];

function Index() {
  return (
    <main className="pv-page">
      <div className="pv-topline">
        <span>ÊMILLE MATOS</span>
        <span className="pv-topline-mark">AUTOCONHECIMENTO COMPORTAMENTAL</span>
      </div>

      <section className="pv-hero">
        <div className="pv-hero-glow" aria-hidden="true" />
        <div className="pv-hero-content">
          <p className="pv-eyebrow"><span /> UMA EXPERIÊNCIA INDIVIDUAL DE AUTOCONHECIMENTO</p>
          <h1>Você está tentando mudar sua vida. <em>Mas já parou para compreender quem está tentando construí-la?</em></h1>
          <p className="pv-hero-copy">
            Antes de exigir mais de si, conheça suas tendências, reconheça padrões e encontre um ponto de partida mais consciente para as mudanças que deseja viver.
          </p>
          <a className="pv-button pv-button-gold" href="#oferta">
            Quero conhecer o PONTO DA VIRADA <ArrowRight size={17} />
          </a>
          <div className="pv-hero-note">
            <span><Check size={14} /> Individual</span>
            <span><Check size={14} /> Online</span>
            <span><Check size={14} /> Com acompanhamento</span>
          </div>
        </div>
        <div className="pv-portal" aria-label="Mulher caminhando em direção a um portal iluminado, simbolizando o início de uma nova jornada.">
          <img src="/ponto-de-virada-jornada.png" alt="Mulher de costas caminhando em direção a um portal dourado iluminado." />
          <div className="pv-portal-caption">UM NOVO OLHAR<br /><b>COMEÇA EM VOCÊ</b></div>
        </div>
        <a href="#identificacao" className="pv-scroll" aria-label="Rolar para conhecer"><ArrowDown size={17} /></a>
      </section>

      <section className="pv-section pv-identification" id="identificacao">
        <div className="pv-section-label">TALVEZ VOCÊ SE RECONHEÇA</div>
        <div className="pv-two-col">
          <h2>Você sabe que quer mudar. Só não entende por que, tantas vezes, acaba voltando para o mesmo lugar.</h2>
          <div className="pv-body-copy">
            <p>Você faz planos, estabelece metas, promete que dessa vez será diferente. Mas, em algum momento, adia, desanima, se cobra ou encontra dificuldade para sustentar aquilo que decidiu.</p>
            <p>E talvez já tenha pensado que o problema é falta de disciplina, organização ou força de vontade.</p>
            <p className="pv-highlight">Mas e se, antes de tentar se cobrar ainda mais, você pudesse compreender melhor os próprios padrões?</p>
          </div>
        </div>
      </section>

      <section className="pv-dark-section">
        <div className="pv-dark-orbit" aria-hidden="true" />
        <div className="pv-centered-copy">
          <p className="pv-eyebrow pv-eyebrow-light">UMA NOVA PERSPECTIVA</p>
          <h2>Você não precisa se tornar outra pessoa para mudar de vida.<br /><em>Precisa começar compreendendo quem você é.</em></h2>
          <p>Autoconhecimento não resolve tudo por você. Mas pode ajudar a enxergar o que antes passava despercebido e a fazer escolhas com mais consciência.</p>
        </div>
      </section>

      <section className="pv-section pv-experience">
        <div className="pv-section-label">CONHEÇA A EXPERIÊNCIA</div>
        <div className="pv-two-col pv-experience-heading">
          <h2>O seu <span className="pv-heading-highlight">PONTO DA VIRADA</span> começa com um olhar mais profundo para você.</h2>
          <p className="pv-body-copy">Uma experiência individual para compreender seu temperamento e suas tendências comportamentais, relacionar essa compreensão à sua realidade e identificar caminhos iniciais para suas mudanças.</p>
        </div>
        <div className="pv-feature-grid">
          <article className="pv-feature">
            <div className="pv-feature-icon"><Compass size={22} /></div>
            <h3>Análise de temperamento</h3>
            <p>Uma leitura individual das suas características e tendências comportamentais.</p>
          </article>
          <article className="pv-feature">
            <div className="pv-feature-icon"><FileText size={22} /></div>
            <h3>Seu portfólio personalizado</h3>
            <p>Um material preparado para você, reunindo informações sobre seu temperamento e suas tendências.</p>
          </article>
          <article className="pv-feature">
            <div className="pv-feature-icon"><Heart size={22} /></div>
            <h3>Encontro individual</h3>
            <p>Uma sessão online de 60 minutos para apresentar sua análise e conversar sobre sua realidade.</p>
          </article>
          <article className="pv-feature">
            <div className="pv-feature-icon"><Target size={22} /></div>
            <h3>Direcionamento inicial</h3>
            <p>Reflexões e possibilidades de primeiros passos mais conscientes para o seu momento.</p>
          </article>
        </div>
      </section>

      <section className="pv-process">
        <div className="pv-section-label">COMO FUNCIONA</div>
        <h2>Um processo simples, pensado para olhar para você.</h2>
        <div className="pv-steps">
          {steps.map((step) => (
            <article className="pv-step" key={step.number}>
              <span className="pv-step-number">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="pv-section pv-benefits">
        <div className="pv-section-label">O QUE VOCÊ PODE LEVAR DESSA EXPERIÊNCIA</div>
        <div className="pv-two-col">
          <h2>Mais compreensão. Menos tentativa de mudar no escuro.</h2>
          <div>
            <p className="pv-body-copy">O PONTO DA VIRADA é um convite para olhar para si com profundidade, responsabilidade e mais consciência.</p>
            <ul className="pv-check-list">
              {benefits.map((benefit) => <li key={benefit}><Check size={17} />{benefit}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="pv-about">
        <div className="pv-about-photo"><img src="/emille-matos-q72.jpg" alt="Êmille Matos, mentora comportamental." /></div>
        <div className="pv-about-content">
          <p className="pv-eyebrow pv-eyebrow-light">QUEM VAI CONDUZIR SUA EXPERIÊNCIA</p>
          <h2>Prazer, sou Êmille Matos.</h2>
          <p>Sou pedagoga, pós-graduada em Psicopedagogia, analista de Temperamentos Humanos e mentora comportamental. Meu trabalho é ajudar mulheres a compreenderem melhor seus padrões emocionais e comportamentais para fazer escolhas mais conscientes.</p>
          <p>Acredito que a mudança não começa quando você tenta se transformar em outra pessoa. Ela pode começar quando passa a compreender melhor quem você é.</p>
          <div className="pv-signature">Êmille Matos</div>
        </div>
      </section>

      <section className="pv-section pv-fit">
        <div className="pv-two-col">
          <div>
            <div className="pv-section-label">ESSA EXPERIÊNCIA É PARA VOCÊ?</div>
            <h2>Para quem sente que chegou a hora de se compreender melhor.</h2>
          </div>
          <div className="pv-fit-lists">
            <div>
              <h3 className="pv-fit-yes">Pode fazer sentido para você se...</h3>
              <ul className="pv-check-list">
                <li><Check size={17} />Deseja mudar, mas percebe padrões que se repetem</li>
                <li><Check size={17} />Quer compreender melhor seu jeito de agir e decidir</li>
                <li><Check size={17} />Está em uma fase de escolhas ou transformação</li>
                <li><Check size={17} />Busca um olhar individual e um direcionamento inicial</li>
              </ul>
            </div>
            <div className="pv-fit-no">
              <h3>Talvez não seja o que você procura se...</h3>
              <p>Você busca terapia, diagnóstico clínico, tratamento psicológico ou uma promessa de mudança instantânea. O PONTO DA VIRADA é uma experiência de autoconhecimento comportamental e não substitui acompanhamento profissional de saúde.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pv-bonus">
        <div className="pv-bonus-art"><img src="/bussola-2027.png" alt="Detalhe de uma bússola dourada sobre fundo bordô." /></div>
        <div>
          <p className="pv-eyebrow pv-eyebrow-light">BÔNUS ESPECIAL DE LANÇAMENTO</p>
          <h2>Bússola 2027</h2>
          <p>Uma experiência complementar para ajudar você a olhar para seus próximos passos e objetivos com mais intenção.</p>
          <span>As orientações de acesso estarão disponíveis na área de membros.</span>
        </div>
        <div className="pv-bonus-year">2027</div>
      </section>

      <section className="pv-offer" id="oferta">
        <div className="pv-section-label">SUA OPORTUNIDADE DE COMEÇAR</div>
        <p className="pv-offer-intro">Você não precisa esperar ter todas as respostas para começar a se compreender.</p>
        <h2>Seu <span className="pv-heading-highlight">PONTO DA VIRADA</span> pode começar agora.</h2>
        <div className="pv-price-card">
          <span className="pv-price-kicker">CONDIÇÃO ESPECIAL DE LANÇAMENTO</span>
          <p className="pv-old-price">De <s>R$ 297,00</s> por</p>
          <div className="pv-price"><span>R$</span>97<span>,00</span></div>
          <p className="pv-price-caption">Pagamento único</p>
          <div className="pv-price-divider" />
          <ul className="pv-check-list pv-price-list">
            <li><Check size={17} />Análise individual de temperamento</li>
            <li><Check size={17} />Portfólio personalizado</li>
            <li><Check size={17} />Sessão online individual de 60 minutos</li>
            <li><Check size={17} />Direcionamento inicial</li>
            <li><Check size={17} />15 dias de acompanhamento após a sessão</li>
            <li><Check size={17} />Bônus Bússola 2027</li>
          </ul>
          <a className="pv-button pv-button-gold pv-button-full" href="#proximo-passo">
            Quero viver meu PONTO DA VIRADA <ArrowRight size={17} />
          </a>
          <p className="pv-legal-note">Compra protegida pelo direito de arrependimento previsto no artigo 49 do Código de Defesa do Consumidor, no prazo legal de 7 dias a contar da contratação.</p>
        </div>
        <p className="pv-offer-footnote">A condição de lançamento é especial para esta fase inicial do PONTO DA VIRADA.</p>
      </section>

      <section className="pv-faq pv-section">
        <div className="pv-section-label">AINDA TEM DÚVIDAS?</div>
        <h2>Perguntas frequentes</h2>
        <div className="pv-faq-list">
          <details><summary>Como funciona a análise de temperamento?</summary><p>Após a inscrição, você terá acesso a um formulário na área de membros da Kiwify. Com suas respostas, preparo sua análise individual e um portfólio personalizado com informações sobre seu temperamento e suas tendências comportamentais.</p></details>
          <details><summary>Como será a sessão individual?</summary><p>Nosso encontro será online e terá duração de 60 minutos. Vou apresentar sua análise e seu portfólio, conversar com você sobre os pontos identificados e relacionar essas informações à sua realidade.</p></details>
          <details><summary>Quando vocês entrarão em contato comigo?</summary><p>Depois que você enviar o formulário preenchido, entrarei em contato pelo WhatsApp em até 3 dias úteis para confirmar o recebimento e combinar o agendamento da sessão.</p></details>
          <details><summary>Como funciona o acompanhamento de 15 dias?</summary><p>Após a sessão, teremos 15 dias de acompanhamento para conversar sobre como você está assimilando os pontos trabalhados e observar seus primeiros movimentos.</p></details>
          <details><summary>Onde encontro as orientações e informações do atendimento?</summary><p>As orientações iniciais, o formulário e as informações necessárias para a experiência estarão disponíveis na área de membros da Kiwify.</p></details>
          <details><summary>E se eu não puder participar no horário combinado?</summary><p>As orientações sobre agendamento e reagendamento estarão disponíveis na área de membros. Caso precise, você poderá consultar as instruções por lá.</p></details>
          <details><summary>Quando receberei o bônus Bússola 2027?</summary><p>As informações de acesso e as orientações necessárias para participar do bônus estarão disponíveis na área de membros da Kiwify.</p></details>
          <details><summary>O PONTO DA VIRADA é terapia?</summary><p>Não. É uma experiência de autoconhecimento comportamental. Não é terapia, diagnóstico clínico ou tratamento psicológico e não substitui o acompanhamento de profissionais de saúde.</p></details>
          <details><summary>O PONTO DA VIRADA garante que vou mudar meus comportamentos?</summary><p>Não existe promessa de transformação automática. A experiência oferece análise, reflexão e direcionamento inicial para que você possa compreender melhor seus padrões e decidir como deseja agir a partir disso.</p></details>
        </div>
      </section>

      <section className="pv-final-cta" id="proximo-passo">
        <p className="pv-eyebrow pv-eyebrow-light">O PRIMEIRO PASSO É OLHAR PARA VOCÊ</p>
        <h2>Antes de tentar mudar sua vida, aprenda a compreender quem está tentando construí-la.</h2>
        <a className="pv-button pv-button-gold" href="#oferta">Quero começar pelo autoconhecimento <ArrowRight size={17} /></a>
        <p>Êmille Matos · PONTO DA VIRADA</p>
      </section>

      <footer className="pv-footer">
        <span>ÊMILLE MATOS</span>
        <span>PONTO DA VIRADA</span>
        <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
      </footer>
    </main>
  );
}
