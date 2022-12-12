import { NavLink, Outlet } from "react-router-dom"
import { season } from "../../../../interfaces/MovieDBInterfaces"

interface SeasonsProps {
    seasons?: season[]
}

export const Seasons = ({ seasons }: SeasonsProps) => {
    return (
        <>

            <ul className="w-full bg-[#1a1a1a] flex flex-row justify-start items-center whitespace-nowrap overflow-auto">
                {seasons?.map((value, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={({ isActive }) => (`inline-block pt-4 pb-[13px] px-5 border-b-[3px] transition-all duration-500 ease-in-out ${isActive ? 'border-white' : 'border-transparent'}`)} to={`season/${value.season_number}`}>{value.name}</NavLink>
                        </li>
                    )
                })}
            </ul>

            <Outlet />
        </>
    )
}