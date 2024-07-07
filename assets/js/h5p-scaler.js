const iframe = document.getElementById('activityFrame'); // Replace with your iframe's actual ID
const parentDiv = iframe.parentElement;

function resizeIframe() {
  const parentHeight = parentDiv.clientHeight;
  const parentWidth = parentDiv.clientWidth;
  const iframeAspectRatio = 1.0185; 
	
  // Calculate scaled height based on parent height and aspect ratio
  const newHeight = parentHeight;
  //const newWidth = newHeight * iframeAspectRatio;
	
  iframe.style.transform = `scale(${newHeight / 1080})`; // Apply scale based on initial height
  //iframe.style.width = newWidth;
  //iframe.style.height = parentHeight;
}

window.addEventListener('resize', resizeIframe);

// Call the function on initial load to set the scaling
resizeIframe();