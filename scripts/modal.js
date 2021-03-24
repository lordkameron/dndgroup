// Get the modal
var modal;

/*
	name: '',
	episodeNumber: '',
	subtext: '',
    description: '',
    airDate: '',
    urlLink: ''
*/
var episodes = [
  {
    name: '1',
	episodeNumber: 'ep1',
	subtext: 'The Church With A View',
    description: 'A church fueled on hatred becomes the beacon for ghosts and poltergeists to cross over to our world. They possess the stained glass windows and kill all who dare cross them.',
    airDate: 'N/A',
    urlLink: ''
  },
  {
	name: '2 & 3',
	episodeNumber: 'ep2',
	subtext: 'The Plague of Webs',
    description: 'Doctor Atsuko Popov is a scientist-turned spider-person from a Cold War weapons test gone wrong. Now in modern times she continues to test the bioweapon that created her, inadvertantly creating a plague that stands to mutate the world into spiders.',
    airDate: 'N/A',
    urlLink: ''
  },
  {
	name: '4',
	episodeNumber: 'ep4',
	subtext: 'The Circles',
    description: 'An immortal Minotaur, Pavlos, needs to feed upon human flesh every 7 years to maintain his life. He does this by traveling across the US disguised as a farmer, and lures folks into his cornfield advertising "Alien sightings". He needs one more meal before he moves out and our intrepid few are next on the menu!',
    airDate: '2020-12-14',
    urlLink: ''  
  },
  {
	name: '5',
	episodeNumber: 'ep5',
	subtext: 'The Attack of the Rapid Moss',
    description: 'Two scientists in a remote forest laboratory engineer an intelligent "Learning Moss". But the Moss yearns for world domination. By the time our heroes have already stumbled upon the mossy knolls, it may already be too late!',
    airDate: '2020-12-21',
    urlLink: ''  
  },
  {
	name: '6',
	episodeNumber: 'ep6',
	subtext: 'Let\'s Make A Deal - Part 1',
    description: 'After sacrificing himself to save Vincent, Ciaran\'s death hangs heavily on the group. Unsatisfied, they search fruitlessly for a way to revive their fallen companion, until they come across a "friendly" forest deity known as "Fir".',
    airDate: '2021-01-02',
    urlLink: ''  
  },
  {
	name: '7',
	episodeNumber: 'ep7',
	subtext: 'Let\'s Make A Deal - Part 2',
    description: 'The gang has been transported to a bizarre place! The sky is red, the moon is half gone, and they have 24 hours to find a "High Daemon Heart" before Ciaran dies.',
    airDate: '2021-01-11',
    urlLink: ''  
  },
  {
	name: '8',
	episodeNumber: 'ep8',
	subtext: 'The King of TV',
    description: 'The Town of St. Augustine is treated to a buzz of commotion. Elvis and Nixon have returned from the dead to St Augustine! And they\'re fighting crime!',
    airDate: '2021-01-15',
    urlLink: ''  
  },
  {
	name: '9',
	episodeNumber: 'ep9',
	subtext: 'The Disk Most Black - Part 1',
    description: 'The Babylon crew has some time to cool down for this adventure. Phey, with the help of her aunts, takes a mental "spirit walk" into the memories of Ciaran. Malkita and Alexander take a trip down to the library of Hell. And Vincent... fails a math test.',
    airDate: '2021-01-29',
    urlLink: ''  
  },
  {
	name: '10',
	episodeNumber: 'ep10',
	subtext: 'The Disk Most Black - Part 2',
    description: 'A strange black disc has been making the rounds in St. Augustine. Its believed by many teens and college students to hold some of the strangest, newest music ever recorded. But unknown to them, it is also host to an evil spirit dead set on taking over the world!',
    airDate: '2021-02-05',
    urlLink: ''  
  },
  {
	name: '11',
	episodeNumber: 'ep11',
	subtext: 'The Disk Most Black - Part 3',
    description: 'The Disk has been found, cornered, and captured. The next step, banishing it back to Hell!',
    airDate: '2021-02-12',
    urlLink: ''  
  },
  {
	name: '12',
	episodeNumber: 'ep12',
	subtext: 'The King of the Beach - Part 1',
    description: 'The crew decides to take a day off from Monster Hunting and takes a trip to Vilano Beach. They chose a fortuitous time too, as its time for the "King of the Beach" competition. A fun-summer-sun competition where teams gather together to prove they are the "Kings" of the Beach. Woohoo! Beach Episode!!!!',
    airDate: '2021-02-19',
    urlLink: ''  
  },
  {
	name: '13',
	episodeNumber: 'ep13',
	subtext: 'The King of the Beach - Part 2',
    description: 'Trouble reared its ugly head after the crew won the King of the Beach competition. Ciaran tried to kill JB and made a run for it, Malkita are being accosted by an Angel sent from heaven, and Vincent just can\'t seem to get a chance alone with Alice! At least they have the rest of their vacation on Colodaville to look forward too right?',
    airDate: '2021-02-26',
    urlLink: ''  
  },
  {
	name: '14',
	episodeNumber: 'ep14',
	subtext: 'The King of the Beach - Part 3',
    description: 'CHAOS IS PARADISE! The mysterious JB has been a thrall of Fir the whole time and his using his tropical themepark as an all-you-can-eat human buffet! Will "Werewolf" be added to the menu?',
    airDate: '2021-03-05',
    urlLink: ''  
  },
  {
	name: '15',
	episodeNumber: 'ep14',
	subtext: 'Babylon Boogie Revolution Max - Part 1',
    description: 'The new hotness of video games has made its way to St. Augustine! But the game is proving to be a little too-addicting, leaving some in the hospital from exhaustion and malnourishment. I hope the Babylon crew can figure this out before they Dance to their Death!',
    airDate: '2021-03-19',
    urlLink: ''  
  },
  {
	name: '16',
	episodeNumber: 'ep14',
	subtext: 'Babylon Boogie Revolution Max - Part 2',
    description: 'Alack! It has been revealed that a trickster god of the Fae is behind the magical game. After being displaced from his forest hunting grounds, the Fae decides to reap his revenge on the populace of St. Augustine. Can the Babylon crew stop him before he has the whole world Dancing Mad?',
    airDate: '2021-03-26',
    urlLink: ''  
  }
]

getEpisodes = function() {
	console.log(episodes);
	episodes.forEach(episode=>{
		document.getElementById("episodeList").innerHTML += `
		<div class="episodeTab">
		
			<h2 class="episodeTitle">
				<a onclick="openModal('${episode.episodeNumber}')">Episode ${episode.name}:
					<b>${episode.subtext}</b>
				</a>
			</h2>
			
			<div>
				<h3 class="episodeAir">Original Airdate: ${episode.airDate} 
					<a href="${episode.url}"></a>
				</h3>
				
			</div>
			
			<div id="${episode.episodeNumber}" class="modal">
				<div class="modal-content">
					<span class="close" onclick="closeModal()">&times;</span>
					<p>${episode.description}</p>
				</div>
			</div>
			
		</div>
	  `;
	})
}

openModal = function(episodeString) {
	//document.getElementById(episodeString);
	modal = document.getElementById(episodeString);
	modal.style.display = "block";
}
closeModal = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

getEpisodes();