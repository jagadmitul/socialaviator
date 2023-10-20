interface TextBoxTypes {
    children?: React.ReactNode;
    content?: string;
}

const TextBox = ({
    children,
    content
}: TextBoxTypes) => {
    return (
        <div className='col-span-1 bg-[#1F1F1F] border border-black rounded-[4px] text-[#FFE073] pl-3 py-[6px] font-Bebas  m-0'>
            {children}
        </div>
    )
}

export default TextBox;