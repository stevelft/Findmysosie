// Quand l'utilisateur clique sur le bouton
document.getElementById('analyzeBtn').addEventListener('click', function() {
  const input = document.getElementById('photoInput');
  const resultDiv = document.getElementById('result');

  if (!input.files || input.files.length === 0) {
    resultDiv.innerHTML = "📸 Choisis une photo d'abord !";
    return;
  }

  // Ici, on simule le traitement pour le moment
  resultDiv.innerHTML = "🔍 Analyse de ta photo en cours...";

  // Simulation d’un petit délai de recherche
  setTimeout(() => {
    resultDiv.innerHTML = "😄 Ton sosie ressemble à une star de cinéma ! (version test)";
  }, 2000);
});