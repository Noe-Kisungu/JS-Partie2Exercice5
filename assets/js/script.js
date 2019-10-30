let swap = function() {
  this.src = "./assets/img/" + this.id + "_2.jpg";
  //Changement de la source de l'image en fonction de l'ID de l'image
  this.src = './assets/img/' + this.id + '_2.jpg';
  // this.class = "nouvelleClasse"; NE FONCTIONNE PAS
}

document.getElementById('image1').onmouseenter = swap ;