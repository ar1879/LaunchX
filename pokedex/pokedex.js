const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200" || null) {
            soundError.play()
            style.setProperty('--color', '#ff0000')
            console.log(res);
            pokeImage("multimedia/giphy.gif")
            

            
        }
        else {
            style.setProperty('--color', '#00ff00')
            sound.play();
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities
            pokeImage(pokeImg);
            pokeData(pokeInfo)
            console.log(pokeImg)
            

        }
       
    });
};

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
};


const pokeData = (abilities) => {

    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map((item) => item.ability.name);
    
    pokeAbilities.innerHTML = "<p>" + 'abilities: ' + abilitiesName + "</p>";
};



const sound = new Audio("multimedia/sound_pokedex.mp3");
    
const soundError = new Audio("multimedia/error1.mp3")



const changeColorGreen = (color) => {
    const style = document.documentElement.style
    style.getPropertyValue('--color')
}

const style = document.documentElement.style
