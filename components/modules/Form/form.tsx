import Button from "../../elements/Button/button";
import Input from "../../elements/Input/input";
import Label from "../../elements/Label/label";

export default function Form(){
    return (
        <>
            <div className="flex flex-col bg-white justify-between w-1/3 p-10">
                <Label htmlFor="username" value="Username" class="text-gray-400"/>
                <Input type="text" name="username" id="username" class=" block w-full px-3 py-2 my-3 bg-white border border-slate-300 rounded-md text-sm text-slate-500  focus:outline-none"/>
                <Label htmlFor="password" value="Password" class="text-gray-400"/>
                <Input type="text" name="password" id="password" class=" block w-full px-3 py-2 my-3 bg-white border border-slate-300 rounded-md text-sm text-slate-500 focus:outline-none "/>
                <Button class="bg-blue-500 p-3 rounded my-3 text-white" value="SIGN IN"/>
            </div>
        </>
    )
}