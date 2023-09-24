import Link from "next/link";
import { routes } from '@/config/routes';
import '@/components/css/horizontal_menu.css'

const HoriztonalMenu = () => {

    return (
        <div className="hidden md:flex flex-none">
            <ul className="menu menu-horizontal">
                {routes.map((route, index) => (
                    <li key={index} className="text-2xl">
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HoriztonalMenu