import Image from "next/image";
import Link from "next/link";

import { ToolCard, TableDiv, SingleDiv  } from './style'


const OneDiv = ({item}) => {
    return(
        <SingleDiv>
            <div className="images">
                <Image className="img" alt="" src={item.icon} />
            </div>
            <div className="contents">
                <Link href="/" className="heading">{item.details.name}</Link>
                <div className="para">{item.details.work}</div>
            </div>
        </SingleDiv>
    )
}



const ToolsCard = ({data}) => {

    return (
        <ToolCard>
            <h3>{data.header}</h3>
            <p>{data.description}</p>
            <TableDiv>
                {
                    data.list.map((item,index) => (
                        <OneDiv item={item} key={index} />
                    ))
                }
            </TableDiv>
        </ToolCard>
    );
}

export default ToolsCard;