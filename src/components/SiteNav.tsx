import { Link } from 'react-router-dom'

const links = [
  { label: 'Atuacao', href: '/#atuacao' },
  { label: 'Metodo', href: '/#metodo' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Equipe', href: '/#equipe' },
]

export default function SiteNav() {
  return (
    <div className="nav">
      <Link className="brand" to="/">
        <span className="brand-mark">A</span>
        <div>
          <p className="brand-name">Aurora Advocacia</p>
          <p className="brand-tag">Advogadas em Sao Paulo</p>
        </div>
      </Link>
      <nav className="nav-links" aria-label="Navegacao principal">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
        <Link to="/contato">Contato</Link>
      </nav>
      <Link className="nav-cta" to="/contato">
        Agendar conversa
      </Link>
    </div>
  )
}
