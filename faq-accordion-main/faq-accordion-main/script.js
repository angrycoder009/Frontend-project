function toggleSVG(SVGimgId, descriptionId) {
    let SVGimg = document.getElementById(SVGimgId);
    let description = document.getElementById(descriptionId);
  
    if (SVGimg.src.endsWith('icon-plus.svg')) {
      SVGimg.src = './assets/images/icon-minus.svg';
      description.style.display = 'block';
    } else {
      SVGimg.src = './assets/images/icon-plus.svg';
      description.style.display = 'none';
    }
  }
  
  