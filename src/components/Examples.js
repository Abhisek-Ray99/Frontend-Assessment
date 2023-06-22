
import { ExampleDiv, DataLink } from "./style";
import Image from "next/image";

const ExamplesDiv = ({data}) => {
    return (
        <ExampleDiv>
            <DataLink href='/'>
                <Image src={data.icons} className="img-example" alt="im" />
                <h4 className="h4-example">{data.title}</h4>
            </DataLink>
        </ExampleDiv>
    );
}

export default ExamplesDiv;