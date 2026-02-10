import { useRef } from "react";
import { useLocation, useNavigate } from "react-router"

export default function BtnBack () {
    const location = useLocation();
    const ref = useRef(location.state);
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate(ref.current || "/movies");
    }

    return (
        <button type="button" onClick={handleBtnClick}>Go back</button>
    )
}