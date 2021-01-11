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
	subtext: 'The Timely Ordeal Part 1',
    description: 'After sacrificing himself to save Vincent, Ciaran\'s death hangs heavily on the group. Unsatisfied, they search fruitlessly for a way to revive their fallen companion, until they come across a "friendly" forest deity known as "Fir".',
    airDate: '2021-01-02',
    urlLink: ''  
  },
  {
	name: '7',
	episodeNumber: 'ep7',
	subtext: 'The Timely Ordeal Part 2',
    description: 'The gang has been transported to a bizarre place! The sky is red, the moon is half gone, and they have 24 hours to find a "High Daemon Heart" before Ciaran dies.',
    airDate: '2021-01-11',
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