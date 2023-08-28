document.addEventListener('DOMContentLoaded', function () {
    const cropSection = document.getElementById('crop-section');
    const fertilizerSection = document.getElementById('fertilizer-section');
    const diseaseSection = document.getElementById('disease-section');
    
    cropSection.addEventListener('click', function () {
      // Redirect to crop page
      window.location.href = 'crop.html';
    });
    
    fertilizerSection.addEventListener('click', function () {
      // Redirect to fertilizer page
      window.location.href = 'fertilizer.html';
    });
    
    diseaseSection.addEventListener('click', function () {
      // Redirect to disease page
      window.location.href = 'disease.html';
    });
  });
  