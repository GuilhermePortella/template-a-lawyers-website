import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteNav from '../components/SiteNav'

const channels = [
  {
    title: 'Email direto',
    value: 'contato@aurora.adv.br',
    note: 'Responderemos em ate 24 horas uteis.',
  },
  {
    title: 'WhatsApp',
    value: '+55 11 99888-7766',
    note: 'Atendimento rapido para demandas urgentes.',
  },
  {
    title: 'Telefone',
    value: '+55 11 3333-2200',
    note: 'Segunda a sexta, 9h as 19h.',
  },
]

const locations = [
  {
    title: 'Escritorio principal',
    address: 'Av. Paulista, 1000 - 15o andar, Sao Paulo',
    note: 'Atendimento presencial com hora marcada.',
  },
  {
    title: 'Sala de reunioes',
    address: 'Rua Oscar Freire, 140 - Jardins',
    note: 'Espaco reservado para encontros estrategicos.',
  },
]

export default function Contact() {
  return (
    <div className="page contact-page">
      <header className="page-hero contact-hero">
        <div className="container">
          <SiteNav />
          <div className="page-hero-content reveal delay-1">
            <p className="eyebrow">Contato</p>
            <h1>Vamos conversar com calma sobre o seu caso.</h1>
            <p className="lead">
              Conte o que voce precisa e nossa equipe prepara o melhor caminho.
              Atendimento presencial, remoto ou emergencial.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/">
                Voltar ao inicio
              </Link>
              <a className="btn ghost" href="mailto:contato@aurora.adv.br">
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section contact-page-section reveal delay-2">
          <div className="container contact-page-grid">
            <div className="contact-panel">
              <h2>Nosso time responde rapidamente.</h2>
              <p className="section-lead">
                Escolha o canal de contato ou envie sua mensagem pelo formulario.
              </p>
              <div className="info-stack">
                {channels.map((channel) => (
                  <div key={channel.title} className="info-item">
                    <h4>{channel.title}</h4>
                    <p className="info-value">{channel.value}</p>
                    <p className="small">{channel.note}</p>
                  </div>
                ))}
              </div>
              <div className="contact-note">
                <p className="small">
                  Atendimento exclusivo para clientes particulares e empresas
                  lideradas por mulheres.
                </p>
              </div>
            </div>

            <form
              className="contact-form"
              aria-label="Formulario de contato"
              onSubmit={(event) => event.preventDefault()}
            >
              <h3>Agendar conversa</h3>
              <p>Conte um pouco sobre sua necessidade.</p>
              <div className="form-grid">
                <label className="form-field">
                  <span>Nome completo</span>
                  <input type="text" name="name" placeholder="Seu nome" />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="voce@email.com" />
                </label>
                <label className="form-field">
                  <span>Telefone</span>
                  <input type="tel" name="phone" placeholder="+55 11 99999-0000" />
                </label>
                <label className="form-field">
                  <span>Area de interesse</span>
                  <select name="area" defaultValue="">
                    <option value="" disabled>
                      Selecione uma area
                    </option>
                    <option value="familia">Direito de familia</option>
                    <option value="mulher">Direito da mulher</option>
                    <option value="trabalho">Direito do trabalho</option>
                    <option value="empresarial">Direito empresarial</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </label>
                <label className="form-field form-span">
                  <span>Mensagem</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Descreva brevemente o caso"
                  />
                </label>
              </div>
              <div className="form-actions">
                <button className="btn primary" type="submit">
                  Enviar mensagem
                </button>
                <span className="small">
                  Sua mensagem sera respondida em ate 24h uteis.
                </span>
              </div>
            </form>
          </div>
        </section>

        <section className="section alt reveal delay-3">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Localizacao</p>
              <h2>Encontros presenciais com hora marcada.</h2>
              <p className="section-lead">
                Salas discretas e ambientes acolhedores para conversas sensiveis.
              </p>
            </div>
            <div className="location-grid">
              <div className="location-list">
                {locations.map((location) => (
                  <div key={location.title} className="location-card">
                    <h4>{location.title}</h4>
                    <p>{location.address}</p>
                    <p className="small">{location.note}</p>
                  </div>
                ))}
              </div>
              <div className="location-map" aria-hidden="true">
                <span>Mapa ilustrativo</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
