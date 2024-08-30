const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#logo');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById('progress-bar');
    const completionText = document.getElementById('completion-text');
    const downloadButton = document.querySelector('.btn-download');
    let width = 0;
    let interval;

    function animateProgressBar() {
        if (width >= 100) {
            clearInterval(interval);
            progressBar.style.display = 'none'; // Hide progress bar
            completionText.style.display = 'block'; // Show completion text
            completionText.classList.add('visible'); // Fade in completion text
            setTimeout(() => {
                completionText.classList.remove('visible'); // Fade out completion text
                setTimeout(() => {
                    completionText.style.display = 'none'; // Hide completion text after fade-out
                    downloadButton.classList.remove('hidden'); // Show download button again
                }, 1000); // Time to wait before hiding after fading out
            }, 2000); // Time to show the text before fading out
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }

    downloadButton.addEventListener('click', function() {
        if (interval) {
            clearInterval(interval); // Clear any existing progress animation
        }
        downloadButton.classList.add('hidden'); // Fade out button
        progressBar.style.display = 'block'; // Show progress bar
        progressBar.style.width = '0%'; // Reset progress bar width
        completionText.classList.remove('visible'); // Ensure completion text is not visible
        completionText.style.display = 'none'; // Hide completion text initially
        width = 0; // Reset width
        interval = setInterval(animateProgressBar, 50);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const paragraph = "Hi, Myself Prathmesh Dilip Borate. I have created this Dashboard using HTML, CSS and JavaScript. You can see the sidebar here which will open and close when clicked on that smiley logo. To see the Animated Progress Bar, please click on the Download Button.";
    const introParagraph = document.getElementById('intro-paragraph');
    let index = 0;
    let interval;

    function revealText() {
        if (index < paragraph.length) {
            introParagraph.innerHTML += paragraph[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }

    // Start revealing the text
    introParagraph.style.opacity = 1;
    interval = setInterval(revealText, 50);

    // Rest of your existing code...
});



