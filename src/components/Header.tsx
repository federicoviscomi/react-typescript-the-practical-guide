import { FC, PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
    image: {
        src: string;
        alt: string;
    }
}>;
const Header: FC<HeaderProps> = ({ image, children }) => {
    return (
        <header>
            <div>
                <img {...image}></img>
            </div>
            <div>
                {children}
            </div>
        </header>
    );
};
export default Header;