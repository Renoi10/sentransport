function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);
  const ligneMax = lignes.reduce((max, l) => l.arrets > max.arrets ? l : max, lignes[0]);

  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
      <div style={{ background: 'white', borderRadius: '8px', padding: '16px', flex: 1, textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#7f8c8d', fontSize: '0.85rem', margin: 0 }}>Total lignes</p>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a6e31', margin: 0 }}>{totalLignes}</p>
      </div>
      <div style={{ background: 'white', borderRadius: '8px', padding: '16px', flex: 1, textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#7f8c8d', fontSize: '0.85rem', margin: 0 }}>Total arrêts</p>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a6e31', margin: 0 }}>{totalArrets}</p>
      </div>
      <div style={{ background: 'white', borderRadius: '8px', padding: '16px', flex: 1, textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#7f8c8d', fontSize: '0.85rem', margin: 0 }}>Plus d'arrêts</p>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0a6e31', margin: 0 }}>Ligne {ligneMax.numero}</p>
      </div>
    </div>
  );
}

export default StatReseau;