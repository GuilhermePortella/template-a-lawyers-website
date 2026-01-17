import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteNav from '../components/SiteNav'

const practiceAreas = [
  {
    title: 'Direito de Familia',
    description:
      'Divorcios, guardas e acordos com foco em estabilidade emocional e seguranca juridica.',
  },
  {
    title: 'Direito da Mulher',
    description:
      'Medidas protetivas, orientacao preventiva e acompanhamento humanizado em cada fase.',
  },
  {
    title: 'Direito do Trabalho',
    description:
      'Negociacoes, rescisao e defesa estrategica em conflitos trabalhistas.',
  },
  {
    title: 'Direito Empresarial',
    description:
      'Contratos, reorganizacao societaria e protecao patrimonial para negocios liderados por mulheres.',
  },
]

const pillars = [
  {
    title: 'Escuta ativa',
    description:
      'Atendimento cuidadoso para entender o contexto pessoal e o impacto das decisoes.',
  },
  {
    title: 'Estrategia clara',
    description:
      'Caminhos objetivos com metas, prazos e proximidade em cada etapa.',
  },
  {
    title: 'Presenca firme',
    description:
      'Representacao combativa com postura elegante e foco em resultados.',
  },
]

const steps = [
  {
    title: 'Diagnostico inicial',
    description:
      'Levantamento completo do caso e definicao das prioridades juridicas.',
  },
  {
    title: 'Plano de acao',
    description:
      'Construcao da estrategia com documentos, prazos e acordos possiveis.',
  },
  {
    title: 'Acompanhamento',
    description:
      'Atualizacoes frequentes e suporte continuo ate a conclusao.',
  },
]

const team = [
  {
    name: 'Dra. Elisa Ramos',
    role: 'Socio fundadora',
  },
  {
    name: 'Dra. Marina Vilela',
    role: 'Especialista em familia e sucessoes',
  },
  {
    name: 'Dra. Clara Nunes',
    role: 'Direito empresarial e contratos',
  },
]

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-orb orb-1" aria-hidden="true" />
        <div className="hero-orb orb-2" aria-hidden="true" />
        <div className="hero-orb orb-3" aria-hidden="true" />

        <div className="container">
          <SiteNav />

          <div className="hero-content">
            <div className="hero-text reveal delay-1">
              <p className="eyebrow">Advocacia estrategica para mulheres e familias</p>
              <h1>Decisoes juridicas com coragem, clareza e acompanhamento real.</h1>
              <p className="lead">
                Construimos caminhos seguros para proteger historias, empresas e
                patrimonios. Atuacao boutique com proximidade e planejamento.
              </p>
              <div className="hero-actions">
                <Link className="btn primary" to="/contato">
                  Agendar consulta
                </Link>
                <a className="btn ghost" href="/#equipe">
                  Conhecer equipe
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <span className="stat-value">+12</span>
                  <span className="stat-label">anos de experiencia</span>
                </div>
                <div>
                  <span className="stat-value">320</span>
                  <span className="stat-label">casos acompanhados</span>
                </div>
                <div>
                  <span className="stat-value">4.9</span>
                  <span className="stat-label">avaliacao media</span>
                </div>
              </div>
            </div>

            <div className="hero-card reveal delay-2">
              <p className="card-title">Atendimento premium</p>
              <p className="card-text">
                Primeira conversa sem pressa para mapear riscos, urgencias e
                possibilidades. Atendimento remoto ou presencial.
              </p>
              <ul className="card-list">
                <li>Agenda flexivel para mulheres lideres.</li>
                <li>Relatorios claros com proximos passos.</li>
                <li>Equipe multidisciplinar feminina.</li>
              </ul>
              <div className="card-highlight">
                <span>Resposta em ate 24h uteis</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="atuacao" className="section reveal delay-1">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Areas de atuacao</p>
              <h2>Especialidades que combinam sensibilidade e firmeza.</h2>
              <p className="section-lead">
                Atuamos em frentes que exigem estrategia, empatia e dominio
                tecnico. Cada caso recebe uma equipe dedicada.
              </p>
            </div>
            <div className="card-grid">
              {practiceAreas.map((area) => (
                <article key={area.title} className="info-card">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="section alt reveal delay-2">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Nosso metodo</p>
              <h2>Presenca estrategica do primeiro contato ate a conclusao.</h2>
            </div>
            <div className="pillars">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <div key={step.title} className="step">
                  <span className="step-index">0{index + 1}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section reveal delay-3">
          <div className="container about">
            <div className="about-text">
              <p className="eyebrow">Sobre o escritorio</p>
              <h2>Advocacia autoral, feita por mulheres para mulheres.</h2>
              <p>
                Nosso escritorio nasceu para oferecer suporte juridico com
                proximidade e excelencia tecnica. Valorizamos transparencia,
                comunicacao e um olhar atento para cada historia.
              </p>
              <div className="about-list">
                <div>
                  <h4>Atendimento personalizado</h4>
                  <p>Planos juridicos sob medida para cada fase da vida.</p>
                </div>
                <div>
                  <h4>Equipe integrada</h4>
                  <p>Advogadas, mediadoras e consultoras parceiras.</p>
                </div>
              </div>
              <Link className="btn ghost" to="/contato">
                Receber proposta
              </Link>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <p className="card-title">Consultoria estrategica</p>
                <p className="card-text">
                  Apoio para decisao de carreira, transicao de empresas e
                  protecao patrimonial em ciclos sensiveis.
                </p>
                <div className="tag-row">
                  <span>Presencial</span>
                  <span>Online</span>
                  <span>Emergencias</span>
                </div>
              </div>
              <div className="about-photo" aria-hidden="true">
                <span>Imagem do escritorio</span>
              </div>
            </div>
          </div>
        </section>

        <section id="equipe" className="section alt reveal delay-4">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Equipe</p>
              <h2>Uma equipe experiente, diversa e acolhedora.</h2>
            </div>
            <div className="team-grid">
              {team.map((member) => (
                <article key={member.name} className="team-card">
                  <div className="team-avatar" aria-hidden="true">
                    {member.name.split(' ')[1]?.charAt(0)}
                  </div>
                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section contact reveal delay-5">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contato</p>
              <h2>Vamos conversar sobre o seu momento.</h2>
              <p className="section-lead">
                Envie uma mensagem com suas principais duvidas e agende uma
                reuniao de alinhamento.
              </p>
              <div className="contact-details">
                <div>
                  <span className="label">Email</span>
                  <span>contato@aurora.adv.br</span>
                </div>
                <div>
                  <span className="label">WhatsApp</span>
                  <span>+55 11 99888-7766</span>
                </div>
                <div>
                  <span className="label">Endereco</span>
                  <span>Av. Paulista, 1000 - 15o andar</span>
                </div>
              </div>
            </div>
            <div className="contact-card">
              <h3>Agende sua conversa</h3>
              <p>Retorno em ate 24 horas uteis.</p>
              <div className="contact-actions">
                <Link className="btn primary" to="/contato">
                  Enviar mensagem
                </Link>
                <Link className="btn ghost" to="/contato">
                  Solicitar proposta
                </Link>
              </div>
              <p className="small">
                Atendimento segunda a sexta, 9h as 19h.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
