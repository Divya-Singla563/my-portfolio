"use client";

import PhoneInputLib from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface CustomPhoneInputProps {
    value: string;
    onChange: (value: string, country: any) => void;
    placeholder?: string;
}

export default function CustomPhoneInput({ value, onChange, placeholder }: CustomPhoneInputProps) {
    return (
        <div className="custom-phone-input-wrapper">
            <PhoneInputLib
                country={'in'}
                value={value}
                onChange={onChange}
                enableSearch={true}
                searchPlaceholder="Search country..."
                placeholder={placeholder || "Phone Number"}
                containerClass="custom-phone-container"
                inputClass="custom-phone-input"
                buttonClass="custom-phone-button"
                dropdownClass="custom-phone-dropdown"
                searchClass="custom-phone-search"
            />
        </div>
    );
}
