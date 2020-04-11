(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page

	const dropContainer = document.querySelector('.drop-con'),
		  dropZones = document.querySelectorAll('.drop-zone'),
		  draggableIcons = document.querySelectorAll('.icon-house img'),
		  data = document.querySelectorAll('.icons #icons');


	// store images names here
	const icons = ["disk", "cassette", "rock-on", "headphones", "mic", "guitar", "drum", "turntable", "sound-wave"];

	// functions go here = what we want to have happen when our triggers fire

	function dragStart(event) {
		console.log('dragging',(this.id))
		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDrag(event) {
		event.preventDefault();
		console.log('you are dragging');
	}

	function allowDrop(i) {
  		i.preventDefault();
  		
  		var icon = i.dataTransfer.getData("icons");
  		
  		i.target.appendChild(document.getElementById(icon));

	}

	//set up drop and drag event on our puzzle pieces
	draggableIcons.forEach(piece => piece.addEventListener('dragstart', dragStart));

	//set up the dragover event for our dropZones
	dropZones.forEach(zone => zone.addEventListener('dragover', allowDrag));

	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));
})();
