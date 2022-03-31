/// <reference types="google.maps" />

import { useEffect, useRef } from 'react';

let autoComplete: google.maps.places.Autocomplete;

export interface AutocompleteProps {
  onChange: (address: string) => void;
}

function Autocomplete({ onChange }: AutocompleteProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      autoComplete = new google.maps.places.Autocomplete(ref.current, {
        types: ['address'],
        fields: ['formatted_address'],
      });

      autoComplete.addListener('place_changed', () => {
        const { formatted_address } = autoComplete.getPlace();
        onChange(formatted_address || '');
      });
    }
  }, [onChange]);

  return <input type="text" ref={ref} />;
}

export default Autocomplete;
