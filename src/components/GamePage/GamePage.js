import Button from "../Button/Button";
import Input from "../Input/Input";
function GamePage(props) {
    return ( 
        <>
            <Input text="First Player"/>
            <Input text="Second Player"/>
            <Button text="Start game"/>
        </>
     );
}

export default GamePage;