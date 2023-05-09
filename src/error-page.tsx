import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)

    return (
        <div className="grid w-screen h-screen place-items-center place-content-center">
            <div className="border-2 border-black grid gap-3 p-6 cursor-pointer">
                <h1 className="font-bold text-7xl">Error !</h1>
                <p className="font-light text-black/30">
                    {/* @ts-ignore */}
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}