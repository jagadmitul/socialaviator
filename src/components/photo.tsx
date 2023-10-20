interface PhotoType {
    children: React.ReactNode;
}

const PhotoContainer = ({
    children
}: PhotoType) => {
    return (
        <div className="2xl:w-[312px] 2xl:h-[427px] w-[250px] h-[330px] border-[10px] border-[white] rounded-[140px] overflow-hidden">
            <div className="h-full">
                {children}
            </div>
        </div>
    )
}

export default PhotoContainer;