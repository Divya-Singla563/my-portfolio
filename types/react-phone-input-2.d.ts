declare module 'react-phone-input-2' {
    import { Component } from 'react';

    export interface PhoneInputProps {
        country?: string;
        value?: string;
        onChange?: (value: string, country: any, e: any, formattedValue: string) => void;
        enableSearch?: boolean;
        searchPlaceholder?: string;
        placeholder?: string;
        containerClass?: string;
        inputClass?: string;
        buttonClass?: string;
        dropdownClass?: string;
        disabled?: boolean;
        disableDropdown?: boolean;
        autoFormat?: boolean;
        countryCodeEditable?: boolean;
        enableAreaCodes?: boolean;
        prefix?: string;
        searchStyle?: React.CSSProperties;
        inputStyle?: React.CSSProperties;
        buttonStyle?: React.CSSProperties;
        dropdownStyle?: React.CSSProperties;
        containerStyle?: React.CSSProperties;
    }

    export default class PhoneInput extends Component<PhoneInputProps> { }
}
