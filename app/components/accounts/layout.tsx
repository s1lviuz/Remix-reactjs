import React from "react"

export interface InputGroupProps {
    span: string;
    type: string;
    placeHolder?: string;
}

export const Layout: React.FC<{ children: React.ReactNode; }> = ({ children }: { children: React.ReactNode }) => {
    return <div className="h-screen w-full font-mono">{children}</div>
}

export const InputGroup: React.FC<InputGroupProps> = ({ span, type, placeHolder }) => {
    return (
        <div>
            <span className='text-xl'>{span}: </span>
            <label className='block'>
                <input
                    type={type}
                    placeholder={placeHolder ?? ''}
                    className="
                    block
                    form-input 
                    mt-1 
                    w-full 
                    rounded-md
                    shadow-sm
                    focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-opacity-50
                "
                />
            </label>
        </div>

    )
}