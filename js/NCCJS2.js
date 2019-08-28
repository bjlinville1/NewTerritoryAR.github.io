XR.XrController.configure({disableWorldTracking: true, imageTargets:['Anson','Cori','Daniel','Eleanor','Jessica','Joshua']});


//var video = document.getElementById("currentVideo");

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');


// function changeVideo1(){ 
//   document.getElementById("currentVideo").src="https://video.wixstatic.com/video/53058a_623bd1d60cac40ce961c8b5d3e1a5efe/720p/mp4/file.mp4"
// }

// function changeVideo2(){
// document.getElementById("currentVideo").src="https://video.wixstatic.com/video/53058a_448d427e87d44e59899e077400c5f9fd/720p/mp4/file.mp4";
// }

// function changeVideo3(){
// document.getElementById("currentVideo").src="https://video.wixstatic.com/video/53058a_f8e5399fa15349ad837124f2ca8c2b56/720p/mp4/file.mp4";
// }


AFRAME.registerComponent('button-changer', {
	init:function(){
		const visible = {true}
		this.el.sceneEl.addEventListener('xrimagefound', e => {
			visible[xrimagefound.detail.name] = true

			if (visible['Anson']){
				document.getElementById('button1').onclick= function(){
				document.getElementById('currentVideo').src="https://video.wixstatic.com/video/53058a_513ae7c02ec5409a9eb41d2e0e97d6fb/720p/mp4/file.mp4";
				}	
			}
		})

	}
})

// AFRAME.registerComponent('target-manager', {
//   init: function() {
//     const visible = {}
// 	this.el.sceneEl.addEventListener('xrimagefound', e => {
// 	  visible[xrimagefound.detail.name] = true
	  
// 	  if (visible['targetName1'] && visible['targetName2']) {
// 	  	console.log('Both targets are visible')
// 	  }
// 	})
	
// 	this.el.sceneEl.addEventListener('xrimagelost', e => {
// 	  visible[e.detail.name] = false
// 	})
//   }
// })