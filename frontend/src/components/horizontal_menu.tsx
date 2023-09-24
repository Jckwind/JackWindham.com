import Link from "next/link";
import { routes } from '@/assets/routes';


const HoriztonalMenu = () => {

    return (
        <div className="hidden md:flex flex-none">
            <ul className="menu menu-horizontal px-1">
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HoriztonalMenu