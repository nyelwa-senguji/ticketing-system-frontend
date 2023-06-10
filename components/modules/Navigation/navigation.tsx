import Label from "../../elements/Label/label";

export default function Navigation(){
    return (
        <>
            <div className="flex flex-row w-full  bg-blue-800">
                <Label htmlFor="g-ticketing" value="G-TICKETING" class="font-semibold w-48 p-5 text-white text-lg"/>
                <div className="flex flex-row w-full p-5 justify-between bg-blue-700">
                    <div className="flex flex-row w-1/4 justify-between">
                        <Label htmlFor="tickets" value="Tickets" class="text-gray-400 cursor-pointer"/>
                        <Label htmlFor="users" value="Users" class="text-gray-400 cursor-pointer"/>
                        <Label htmlFor="reports" value="Reports" class="text-gray-400 cursor-pointer"/>
                    </div>
                    <Label htmlFor="userInfo" value="Mark Denning" class="text-gray-400 cursor-pointer"/>
                </div>
            </div>
        </>
    )
}