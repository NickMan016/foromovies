import { Oval } from "react-loader-spinner";

interface SpinnerProps {
    isLoad: boolean
}

export const Spinner = ({ isLoad }: SpinnerProps) => {
    return (
        <div className={`absolute flex items-center justify-center flex-col w-full h-screen bg-[#303030] z-50 ${isLoad ? "transition-all duration-[1.5s] ease-linear opacity-0 invisible" : "duration-[0s] transition-none"}`}>
            <Oval color="#fff" secondaryColor="#AFAFAF" height={80} width={80} />
            <span className="text-[1.35rem] mt-4">Cargando...</span>
        </div>
    )
}