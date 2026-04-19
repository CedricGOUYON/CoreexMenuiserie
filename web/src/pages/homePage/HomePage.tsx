export default function HomePage() {
	return (
		<>
			{/* ── HERO ── */}
			<section className="cx-hero">
				<div className="cx-hero-bg" />
				<div className="cx-hero-overlay" />
				<div className="cx-hero-content">
					<div className="cx-hero-tag">
						<span className="cx-tag-dot" />
						<span>Artisan RGE — Soullans, Vendée</span>
					</div>
					<h1 className="cx-hero-titre">
						Construisons
						<br />
						<em>votre projet</em>
						<br />
						ensemble.
					</h1>
					<p className="cx-hero-desc">Menuiserie, charpente, ossature bois, surélévation, couverture. Coreex Menuiserie accompagne particuliers et professionnels de A à Z, avec exigence et savoir-faire artisanal.</p>
					<div className="cx-hero-actions">
						<a href="#contact" className="cx-btn-primary">
							Demander un devis
						</a>
						<a href="#Savoir-faire" className="cx-btn-ghost-light">
							Voir nos services →
						</a>
					</div>
					<div className="cx-hero-stats">
						{[
							{ num: "RGE", label: "Certifié" },
							{ num: "15 ans", label: "Expériences" },
							{ num: "10 ans", label: "Garantie décennale" },
						].map((s) => (
							<div className="cx-stat" key={s.label}>
								<div className="cx-stat-num">{s.num}</div>
								<div className="cx-stat-label">{s.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── SERVICES ── */}
			<section className="cx-services" id="Savoir-faire">
				<div className="cx-section-header">
					<p className="cx-section-label">Nos prestations</p>
					<h2 className="cx-section-titre">
						Un savoir-faire
						<br />
						<em>complet</em>
					</h2>
				</div>
				<div className="cx-services-grid">
					{[
						{ nom: "Charpente", desc: "Construction et rénovation sur mesure de charpentes traditionnelles ou industrielles. Chêne, sapin, peuplier — nos charpentiers qualifiés retravaillent votre structure pour la renforcer, l'alléger ou simplement lui redonner un coup de jeune." },
						{ nom: "Ossature bois", desc: "Maisons, chalets, cabanes, roulottes ou yourtes : le bois est 12× plus isolant que le béton, résiste mieux au feu et réduit votre empreinte carbone. De la conception à la livraison, une prestation clé en main." },
						{ nom: "Extension", desc: "Agrandissez votre maison avec une extension bois sur mesure. Modélisation 3D, estimation budgétaire (TVA incluse), coordination avec nos partenaires artisans — tout est géré pour vous." },
						{ nom: "Surélévation", desc: "Pas de terrain disponible ? La surélévation vous permet de créer un ou plusieurs étages habitables sans toucher à votre jardin ni à vos emplacements de parking. Idéal en milieu urbain, réalisé par des pros certifiés RGE." },
						{ nom: "Menuiserie", desc: "Pose et rénovation de menuiseries intérieures et extérieures, cloisons sèches et aménagements sur mesure. Le cœur de métier de Coreex Menuiserie, avec la satisfaction client comme priorité absolue." },
						{ nom: "Couverture", desc: "Tuiles, bac acier, ardoise, zinc ou PVC — installation et rénovation de toiture par des couvreurs qualifiés. Tous les travaux sont couverts par une assurance décennale." },
					].map((s) => (
						<div className="cx-service-card" key={s.nom}>
							<h3 className="cx-service-nom">{s.nom}</h3>
							<p className="cx-service-desc">{s.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* ── À PROPOS ── */}
			<section className="cx-about" id="about">
				<div className="cx-about-img" />
				<div className="cx-about-texte">
					<p className="cx-section-label">L'entreprise</p>
					<h2 className="cx-section-titre">
						Coreex Menuiserie,
						<br />
						<em>construire & rénover</em>
					</h2>
					<p className="cx-about-desc">
						Fondée par <strong>Samy Echardour</strong>, Coreex Menuiserie est une entreprise artisanale basée à Soullans, en Vendée. Entouré de collaborateurs passionnés et d'apprentis, Samy met la qualité des matériaux, le soin du travail et la satisfaction client au cœur de chaque chantier.
					</p>
					<p className="cx-about-desc">
						Titulaire du label <strong>RGE</strong>, Coreex Menuiserie intervient dans le neuf comme en rénovation, de la conception jusqu'à la livraison — un seul interlocuteur pour votre tranquillité d'esprit.
					</p>
					<div className="cx-about-tags">
						{["Charpente", "Ossature bois", "Menuiserie", "Couverture", "Surélévation", "Label RGE"].map((t) => (
							<span className="cx-tag" key={t}>
								{t}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* ── RÉALISATIONS ── */}
			<section className="cx-realisations" id="realisations">
				<div className="cx-real-header">
					<p className="cx-section-label">Nos réalisations</p>
					<h2 className="cx-section-titre">
						Ils nous ont <br />
						<em>fait confiance</em>
					</h2>
				</div>

				<div className="cx-carousel-wrapper">
					<div className="cx-carousel" id="cx-carousel">
						{[
							{ img: "https://www.trolard-bernard.fr/IMAGES/charpentetradi/Image6.jpg?w=800&q=80", titre: "Charpente traditionnelle", ville: "Challans" },
							{ img: "https://www.agrandir-ma-maison.com/wp-content/uploads/petite-extension-bois-pour-maison-1600x0-c-center.jpg?w=800&q=80", titre: "Extension ossature bois", ville: "Saint-Hilaire-de-Riez" },
							{ img: "https://www.agrandir-ma-maison.com/wp-content/uploads/surelevation-maison-prix-m2-1600x0-c-center.jpg?w=800&q=80", titre: "Surélévation maison", ville: "Soullans" },
							{ img: "https://www.isolation-combles.pro/wp-content/uploads/2013/03/cloisons-seches-placoplatre-300x200.jpg?w=800&q=80", titre: "Cloisions sèches", ville: "Noirmoutier" },
							{ img: "https://lesouverturesdedemain.fr/images/IMG_1511.jpg?w=800&q=80", titre: "Ouverture aluminium", ville: "Beauvoir-sur-Mer" },
						].map((r) => (
							<div className="cx-real-card" key={r.titre}>
								<img src={r.img} alt={r.titre} className="cx-real-img" />
								<div className="cx-real-overlay">
									<span className="cx-real-ville">{r.ville}</span>
									<h3 className="cx-real-titre">{r.titre}</h3>
								</div>
							</div>
						))}
					</div>

					<button
						type="button"
						className="cx-carousel-btn cx-carousel-prev"
						onClick={() => {
							const c = document.getElementById("cx-carousel");
							c?.scrollBy({ left: -420, behavior: "smooth" });
						}}
					>
						←
					</button>

					<button
						type="button"
						className="cx-carousel-btn cx-carousel-next"
						onClick={() => {
							const c = document.getElementById("cx-carousel");
							c?.scrollBy({ left: 420, behavior: "smooth" });
						}}
					>
						→
					</button>
				</div>
			</section>

			{/* ── CONTACT ── */}
			<section className="cx-contact" id="contact">
				<div className="cx-contact-left">
					<p className="cx-section-label cx-label-light">Parlons de votre projet</p>
					<h2 className="cx-contact-titre">
						UN PROJET
						<br />
						EN TÊTE ?
					</h2>
					<p className="cx-contact-sous">Devis gratuit, réponse rapide.</p>
					<p className="cx-contact-desc">Que ce soit pour une charpente, une extension ou une toiture, contactez-nous. Nous étudions votre projet et vous proposons une solution adaptée à votre budget.</p>
				</div>
				<div className="cx-contact-infos">
					{[
						{ label: "Téléphone", valeur: "06 34 13 24 95" },
						{ label: "Email", valeur: "coreex.menuiserie@gmail.com" },
						{ label: "Localisation", valeur: "Soullans et alentour" },
						{ label: "Horaires", valeur: "Lun – Ven · 8h – 18h" },
					].map((i) => (
						<div className="cx-info-item" key={i.label}>
							<span className="cx-info-label">{i.label}</span>
							<span className="cx-info-valeur">{i.valeur}</span>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
