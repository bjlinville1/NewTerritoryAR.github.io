XR.XrController.configure({imageTargets:['Anson','Cori','Daniel','Eleanor','Jessica','Joshua']});

var video = document.getElementById("currentVideo");

AFRAME.registerComponent('target-manager', {
  init: function() {
    const visible = {}
	this.el.sceneEl.addEventListener('xrimagefound', e => {
	  visible[e.detail.name] = true
	  
	  if (visible['Anson'] && visible['Cori']) {
	  	console.log('Both targets are visible')
	  	video.play();
	  }
	})
	
	this.el.sceneEl.addEventListener('xrimagelost', e => {
	  visible[e.detail.name] = false
	})
  }
})
