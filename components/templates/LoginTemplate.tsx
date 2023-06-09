import Label from "../elements/Label/label";
import Form from "../modules/Form/form";
import Header from "../modules/Header/header";

export default function LoginTemplate(){
    return (
        <>
            <Header subheader="Login"/>
            <Label htmlFor="g-ticketing" value="G-TICKETING" class="font-semibold text-4xl text-gray-400 break-words m-10"/>
            <Form/>
        </>
    )
}