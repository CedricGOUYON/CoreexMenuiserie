import { useState } from "react";
import { createPortal } from "react-dom";
import logo from "../../../public/Photos/LOGOcoreexmenuiserie.png";

export default function Footer() {
	const [modalOpen, setModalOpen] = useState(false);

	const modal = (
		<div className="cx-modal-overlay">
			<button type="button" className="cx-modal-backdrop" onClick={() => setModalOpen(false)} aria-label="Fermer" />
			<div className="cx-modal">
				<button type="button" className="cx-modal-close" onClick={() => setModalOpen(false)}>
					✕
				</button>
				<h2 className="cx-modal-titre">Mentions légales</h2>

				<div className="cx-modal-body">
					<h3>Éditeur du site</h3>
					<p>
						<strong>Coreex Menuiserie</strong>
						<br />
						Société à responsabilité limitée (SARL) — Samy Echardour
						<br />
						Soullans, 85300 Vendée, France
						<br />
						Téléphone : 06 34 13 24 95
						<br />
						Email : coreex.menuiserie@gmail.com
					</p>
					<h3>Activité</h3>
					<p>
						Menuiserie, charpente, ossature bois, surélévation, couverture.
						<br />
						Label RGE — Reconnue Garant de l'Environnement.
						<br />
						Garantie décennale souscrite.
					</p>
					<h3>Hébergement</h3>
					<p>
						Ce site est hébergé par render.com.
						<br />
						Pour toute question relative à l'hébergement, contactez-nous par email.
					</p>
					<h3>Propriété intellectuelle</h3>
					<p>L'ensemble des contenus présents sur ce site (textes, images, logos) sont la propriété exclusive de Coreex Menuiserie. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
					<h3>Responsabilité</h3>
					<p>Coreex Menuiserie s'efforce de maintenir les informations de ce site à jour. Toutefois, la responsabilité de l'entreprise ne saurait être engagée en cas d'erreur ou d'omission.</p>
					<h3>Données personnelles</h3>
					<p>
						Les informations recueillies via ce site sont utilisées uniquement dans le cadre de la relation commerciale avec Coreex Menuiserie. Elles ne sont pas transmises à des tiers. Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos
						données en contactant : coreex.menuiserie@gmail.com
					</p>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<footer className="cx-footer">
				<div className="cx-footer-top">
					<div className="cx-footer-brand">
						<img src={logo} alt="Coreex Menuiserie" className="cx-footer-logo-img" />
						<p>
							Menuiserie artisanale en Vendée.
							<br />
							Construction, rénovation, extension.
							<br />
							Label RGE.
						</p>
					</div>
					<div className="cx-footer-col">
						<h4>Savoir-faire</h4>
						<ul>
							{["Charpente", "Ossature bois", "Extension", "Surélévation", "Menuiserie", "Couverture"].map((l) => (
								<li key={l}>{l}</li>
							))}
						</ul>
					</div>
					<div className="cx-footer-col">
						<h4>Contact</h4>
						<ul>
							<li>06 34 13 24 95</li>
							<li>coreex.menuiserie@gmail.com</li>
							<li>Soullans et alentour</li>
						</ul>
					</div>
				</div>
				<div className="cx-footer-bottom">
					<span>© 2026 Coreex Menuiserie — Samy Echardour</span>
					<button type="button" className="cx-mentions-btn" onClick={() => setModalOpen(true)}>
						Mentions légales
					</button>
				</div>
			</footer>

			{modalOpen && createPortal(modal, document.body)}
		</>
	);
}
