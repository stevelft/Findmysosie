document.getElementById("analyzeBtn").addEventListener("click", () => {
  const input = document.getElementById("photoInput");
  const result = document.getElementById("result");

  if (!input.files.length) {
    result.innerHTML = "<p style='color:red;'>⚠️ Sélectionne une photo d'abord !</p>";
    return;
  }

  // Simule la recherche de sosie
  result.innerHTML = "<p>🔍 Recherche de ton sosie en cours...</p>";

  setTimeout(() => {
    result.innerHTML = "<h2>😎 Ton sosie est : <em>Personne célèbre aléatoire</em> !</h2>";
  }, 2000);
});
