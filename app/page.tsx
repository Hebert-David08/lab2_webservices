"use client";

import { useState } from "react";
import { VideoGame } from "./_types/video-game";



export default function Home() {

  const [loveList, setLoveList] = useState<string[]>(["jump", "hop", "bounce"])
  const [userAge, setUserAge] = useState<number>(18)
  const [nbClicks, setNbClicks] = useState<number>(0)
  function btnBombClick(){
    setNbClicks(nbClicks + 1)
    if (nbClicks >= 10){
      setNbClicks(10)
    }
  } 
  const [lightOrDark, setLightOrDark] = useState<string>("light")
  function btnLumClick(){
    if (lightOrDark == "light"){
      setLightOrDark("dark")
    }
    else{
      setLightOrDark("light")
    }
  }
  const [salutNom, setSalutNom] = useState<string>("")
  function hallo(){
    alert("Salut " + salutNom + "!")
  }

  const [couleur, setCouleur] = useState("")

  // Servira plus tard
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);

  function changerTableau() : void {
    setVideoGames([
      ...videoGames,
      new VideoGame(jeuNom, nbJoueurs, sortiOuNon, genres.split(","), radioValue)
    ])
  }

  function retirerGame(){
    setVideoGames(videoGames.slice(0, videoGames.length - 1))
  }

  function ajouterJoueurs(){
    const jeuxCopy : VideoGame[] = [...videoGames]
    jeuxCopy.map((v) => v.nbPlayers++)
    setVideoGames(jeuxCopy)
  }

  const [sortiOuNon, setSortiOuNon] = useState<boolean>(false)
  const [jeuNom, setJeuNom] = useState<string>("")
  const [nbJoueurs, setNbJoueurs] = useState<number>(1)
  const [genres, setGenres] = useState<string>("")
 const [radioValue, setRadioValue] = useState<string>("")

  return (
    <div className="w-5xl m-auto mt-2">

      {/* Rangée du titre */}
      <div className="flex align-items-center bg-gray-100 rounded-lg p-3 py-6">
        <h1 className="text-2xl weight-bold">Le laboratoire 2 est dynamique 🗿</h1>
      </div>

      <div className="flex mt-2 gap-3">

        {/* Exercice 2 : liste */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1">
          <ul className="list-disc ml-4">
            {loveList.map(
              (i) => <li key={i}>{i}</li>
            )}
          </ul>
        </div>

        {/* Exercice 3 : condition */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1 flex items-center">
          <div>J&apos;aime les <span>{userAge >= 18 ? "cigarettes" : "LEGO Star Wars"}</span>.</div>
        </div>

        {/* Exercice 4 : événement */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1">
          <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300" onClick={btnBombClick}>Chatouiller la bombe</button>
          <p>Clics restants : {10-nbClicks} {(10 - nbClicks) > 0 ? "💣" : "💥"}</p>
        </div>
      </div>

      <div className="flex mt-2 gap-3">

        {/* Exercice 5 : thème */}
        <div className={`${lightOrDark} rounded-lg p-2 flex-1`}>
          <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300" onClick={btnLumClick}>Changer le fond</button>
        </div>

        {/* Exercice 6 : saluer */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1">
          <input value={salutNom} type="text" className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1" onChange={(n) => setSalutNom(n.target.value)}/>
          <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300" onClick={hallo}>Saluer</button>
        </div>

        {/* Exercice 7 : couleur de fond */}
        <div className={`rounded-lg p-2 flex-1 ${couleur}`}>
          <select value={couleur} name="backgroundColor" className="border-gray-500 border-1 px-2 py-1 rounded-sm bg-gray-200 my-2 cursor-pointer" onChange={(c) => setCouleur(c.target.value)}>
            <option value="cyan">Bleu</option>
            <option value="red">Rouge</option>
            <option value="amber">Jaune</option>
          </select>
        </div>
      </div>

      <div className="flex mt-2 gap-3">

        {/* Exercice 8 : grand formulaire */}
        <div className="bg-gray-100 rounded-lg p-2 flex-3">
          <div className="">
            <div className="mb-1">
              Nom : <input value={jeuNom} type="text" name="vgName" className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1" onChange={(n) => (setJeuNom(n.target.value))} />
            </div>
            <div className="mb-1">
              Nombre maximal de joueurs : <input type="number" value={nbJoueurs} onChange={(j) => setNbJoueurs(+j.target.value)} name="vgNbPlayers" className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1" />
            </div>
            <div className="mb-1">
              Jeu sorti <input type="checkbox" name="vgReleased" checked={sortiOuNon} onChange={(c) => setSortiOuNon(c.target.checked)} />
            </div>
            <div className="mb-1">
              Genres (séparés par des virgules, sans espaces) : <input value={genres} onChange={(j) => setGenres(j.target.value)} type="text" name="vgGenre" className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1" />
            </div>
            <div>
              Mode de jeu :
            </div>
            <div>
              → Hors ligne <input type="radio" name="vgMode" value="hors ligne" checked={radioValue == "hors ligne"} onChange={(c) => (setRadioValue(c.target.value))}  />
            </div>
            <div>
              → En ligne <input type="radio" name="vgMode" value="en ligne" checked={radioValue == "en ligne"} onChange={(c) => (setRadioValue(c.target.value))}  />
            </div>
            <div className="mb-1">
              → En ligne et hors ligne <input type="radio" name="vgMode" value="en ligne et hors ligne" checked={radioValue == "en ligne et hors ligne"} onChange={(c) => (setRadioValue(c.target.value))}  />
            </div>
            <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300" onClick={changerTableau}>Créer le jeu</button>
          </div>
        </div>

        <div className="flex-2">

          {/* Exercice 9 : condition */}
          <div className="bg-gray-100 rounded-lg p-2 basis-full">
            {videoGames.length > 0 ? videoGames.map((v) =>
              <div key={v.name}>• {v.name} ({v.genre.map((g) => <span key={g}>{g} </span>)}) se joue jusqu&apos;à {v.nbPlayers} joueur(s) {v.mode} et {v.released ? 'est déjà sorti' : 'n\'est pas encore sorti'}.</div>
            ) : "Aucun jeu n'a été ajouté dans la liste"}
          </div>

          <div className="flex mt-2 gap-3">

            {/* Exercice 10 : retirer dernier élément tableau */}
            <div className="bg-gray-100 rounded-lg p-2 flex-1">
              <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300" onClick={retirerGame}>Retirer dernier jeu</button>
            </div>

            {/* Exercice 11 : modifier tous les objets d'un tableau */}
            <div className="bg-gray-100 rounded-lg p-2 flex-1">
              <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300" onClick={ajouterJoueurs}>+1 joueur</button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
