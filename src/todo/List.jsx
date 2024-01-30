export const List = ({ children }) => {
    return (
        <>
            <ul style={{userSelect:"none", height:"250px"}} className="overflow-y-scroll list-unstyled  w-25 p-2 rounded mx-auto mt-4">
                {children}
            </ul>
        </>
    )
}