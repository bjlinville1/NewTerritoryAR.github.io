XR.XrController.configure({disableWorldTracking:true})

XR.XrController.configure({imageTargets:['Anson','Cori','Daniel','Eleanor','Jessica','Joshua']})

var video = document.getElementById("currentVideo");


AFRAME.registerComponent('button-changer', {
	init:function(){
		const visible = {true}
		this.el.sceneEl.addEventListener('xrimagefound')
	}
})