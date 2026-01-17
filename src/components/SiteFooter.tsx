import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Atuacao', href: '/#atuacao' },
  { label: 'Metodo', href: '/#metodo' },
  { label: 'Contato', to: '/contato' },
]

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p className="brand-name">Aurora Advocacia</p>
          <p className="brand-tag">
            Advocacia estrategica e humana para mulheres.
          </p>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to ?? '/contato'}>
                {link.label}
              </Link>
            )
          )}
        </div>
        <p className="small">
          2026 Aurora Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
