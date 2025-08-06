export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="bg-[url('/carbon-fiber-bg.jpg')] bg-cover bg-center py-24 px-8 text-center">
        <h1 className="text-6xl font-bold text-red-600 drop-shadow-md">IDS</h1>
        <h2 className="text-2xl tracking-widest text-gray-200">MODELCARS</h2>
        <p className="mt-4 text-sm text-gray-400">by Groupe XPM I.D.S.</p>
        <div className="mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg">Découvrir nos maquettes</button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-12">Nos collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Voitures', 'Avions', 'Trains', 'Pompiers', 'Figurines'].map((item) => (
            <div key={item} className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl">
              <h4 className="text-xl text-red-500 mb-2">{item}</h4>
              <p className="text-gray-400 text-sm">Explorez notre sélection de maquettes de {item.toLowerCase()} d'exception.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Boutique */}
      <section className="py-16 px-8 bg-gray-950">
        <h3 className="text-3xl font-semibold text-center mb-12">Boutique</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <div key={product} className="bg-gray-900 rounded-xl p-4 shadow hover:shadow-xl">
              <div className="h-48 bg-gray-800 mb-4 rounded" />
              <h4 className="text-lg text-white">Maquette #{product}</h4>
              <p className="text-red-500">€99.00</p>
              <button className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Ajouter au panier</button>
            </div>
          ))}
        </div>
      </section>

      {/* Page produit détaillée */}
      <section className="py-16 px-8 bg-gray-900">
        <h3 className="text-3xl font-semibold text-center mb-12">Détail produit</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 h-96 rounded" />
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Maquette Voiture Classique 1:18</h4>
            <p className="text-red-500 text-xl mb-4">€149.00</p>
            <p className="text-gray-400 text-sm mb-4">Modèle en résine, peint à la main, avec détails intérieurs et socle de présentation. Limité à 250 exemplaires.</p>
            <ul className="list-disc list-inside text-gray-400 text-sm mb-6">
              <li>Échelle : 1:18</li>
              <li>Fabrication artisanale</li>
              <li>Emballage luxe inclus</li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded">Ajouter au panier</button>
          </div>
        </div>
      </section>

      {/* Panier */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-12">Panier</h3>
        <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl">
          <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
            <div>
              <h4 className="text-white">Maquette #1</h4>
              <p className="text-gray-400 text-sm">Quantité : 1</p>
            </div>
            <p className="text-red-500">€99.00</p>
          </div>
          <div className="text-right text-white text-lg mb-4">Total : €99.00</div>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded">Valider la commande</button>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-8 bg-gray-900">
        <h3 className="text-3xl font-semibold text-center mb-8">À propos</h3>
        <p className="max-w-3xl mx-auto text-gray-400 text-center">
          IDS Modelcars est une marque du Groupe XPM I.D.S., spécialisée dans la vente de maquettes haut de gamme pour passionnés et professionnels. 
          Chaque modèle est choisi avec soin pour sa précision, sa rareté et son esthétique.
        </p>
      </section>

      {/* Contact */}
      <section className="py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-8">Contact</h3>
        <div className="max-w-xl mx-auto space-y-4">
          <input className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500" placeholder="Votre nom" />
          <input className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500" placeholder="Votre e-mail" />
          <textarea className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500" placeholder="Votre message" rows="5" />
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded">Envoyer</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 text-sm py-6 text-center">
        <p>© 2025 IDS Modelcars — Tous droits réservés</p>
        <p>Contact : contact@idsmodelcars.com | +33 1 23 45 67 89</p>
      </footer>
    </div>
  );
}
