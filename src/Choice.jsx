export function Choice(props) {
	const { choiceId, choice, displayTextbox } = props.data

	return <div>
		<label>{choice}</label>
		<input type="checkbox" name={`choice:${choiceId}`} />
		{displayTextbox && <input/>}
	</div>
}
