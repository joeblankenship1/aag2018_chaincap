(function() {
    // start reveal slideshow
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        transition: 'convex', // none/fade/slide/convex/concave/zoom

        // Parallax background image
	    parallaxBackgroundImage: 'https://raw.githubusercontent.com/joeblankenship1/aag2018_chaincap/master/img/mining.jpg',

	    // Parallax background size
	    parallaxBackgroundSize: '2100px 1080px',

        dependencies: [
            { src: 'plugin/notes/notes.js', async: true }
        ]

    });
})();
