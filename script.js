// Charger les modèles de reconnaissance
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js/models')
]).then(() => {
  document.getElementById('result').innerHTML = "✅ Modèles chargés, tu peux envoyer ta photo !";
});

// Quand on clique sur le bouton
document.getElementById('analyzeBtn').addEventListener('click', async () => {
  const input = document.getElementById('photoInput');
  const resultDiv = document.getElementById('result');

  if (!input.files || input.files.length === 0) {
    resultDiv.innerHTML = "📸 Choisis une photo d'abord !";
    return;
  }

  const imgFile = input.files[0];
  const img = await faceapi.bufferToImage(imgFile);
  resultDiv.innerHTML = "🔍 Analyse de ton visage...";
  document.body.append(img);

  // Détection du visage
  const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions());
  if (detections.length === 0) {
    resultDiv.innerHTML = "😕 Aucun visage détecté. Essaie une autre photo.";
  } else {
    resultDiv.innerHTML = `😄 Visage détecté ! (Test de reconnaissance en cours...)`;
  }
});