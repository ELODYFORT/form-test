import { useState } from "react";
import "./QuoteForm.css";

const MAX_LENGTH = 30;

function QuoteForm() {
	const [character, setCharacter] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prévenir le rechargement de la page
		console.log("Submitted character:", character);
		// Vous pouvez ajouter ici la logique pour traiter le personnage soumis
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (value.length <= MAX_LENGTH) {
			setCharacter(value);
		}
	};

	return (
		<form className="QuoteForm" onSubmit={handleSubmit}>
			<label htmlFor="character">Character:</label>
			<input
				id="character" // Correction ici: l'ID doit correspondre au nom du champ
				name="character"
				type="text"
				value={character}
				onChange={handleChange} // Utilisation de handleChange ici
			/>
			<button type="submit">Submit</button>{" "}
			{/* Ajout d'un bouton pour soumettre le formulaire */}
		</form>
	);
}

export default QuoteForm;
