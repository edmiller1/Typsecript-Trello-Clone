import React, {useState} from 'react'
import {useFocus} from './utils/useFocus';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles'

interface NewItemFormProps {
    onAdd: (text: string) => void;
}


export const NewItemForm: React.FC<NewItemFormProps> = ({onAdd}) => {

    const [text, setText] = useState<string>("")
    const inputRef = useFocus();

    const handleText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleText} />
            <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
        </NewItemFormContainer>
    )
}