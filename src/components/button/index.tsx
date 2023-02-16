import { colors } from "@/styles/theme";
import { PropsWithChildren } from "react";

interface Props {
    onClick: () => {}
}

const Button = ({children, onClick}: PropsWithChildren<Props>) => {
    return (
        <>
            <button onClick={onClick}>{children}</button>
            <style jsx>{`
                button {
                    background: ${colors.black};
                    border: 0;
                    color: #fff;
                    cursor: pointer;
                    border-radius: 9999px;
                    font-size: 16px;
                    font-weight: 800;
                    padding: 8px 24px;
                    transition: opacity 0.3s ease;
                    display: flex;
                    align-items: center;
                }
                button:hover {
                    opacity: .7;
                }
            `}</style>
        </>
    )
}

export default Button;