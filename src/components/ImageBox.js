
import Image from "next/image";
import './component.css'

const ImageBox = ({filePath}) => {
    return (
      <Image
        src={filePath}
        width={180}
        height={180}
        alt="Picture of the author"
        className="section-image"
      />  
    );
}

export default ImageBox;