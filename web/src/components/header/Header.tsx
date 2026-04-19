import logo from "../../../public/Photos/LOGOcoreexmenuiserie.png";

export default function Header() {
	return (
		<header className="cx-header">
			<div className="cx-header-inner">
				<div className="cx-logo-groupe">
					<img src={logo} alt="Coreex Menuiserie" className="cx-logo-img" />
					<div className="cx-logo-texte">
						<span className="cx-logo-nom">Coreex</span>
						<span className="cx-logo-sous">Menuiserie</span>
					</div>
				</div>
				<nav className="cx-nav">
					<a href="#Savoir-faire">Savoir-faire</a>
					<a href="#about">À propos</a>
					<a href="#realisations">Réalisations</a>
					<a href="#contact">Contact</a>
				</nav>
				<a href="#contact" className="cx-btn-primary">
					Devis gratuit
				</a>
			</div>
		</header>
	);
}
