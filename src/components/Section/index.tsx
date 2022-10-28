interface SectionProps {
    title: string,
    content: JSX.Element
}

export const Section = ({ title, content }: SectionProps) => {
    return (

    <div className= "max-w-[1100px] w-[90%] m-auto my-10" >
        <span className="text-[2rem] font-bold" >{ title }</span>
        { content }
    </div>
    )
}