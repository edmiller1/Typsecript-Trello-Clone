import {useRef, useEffect} from 'react';

/*Create function called "useFocus"
  create a variable called "ref"
  ref is typed as an input element and its initial value is set to null
  whenever the ref is mounted to the DOM it is put in focus.
*/

export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus()
    }, [])

    return ref;
}