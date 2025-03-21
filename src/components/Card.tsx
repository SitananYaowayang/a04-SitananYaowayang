import styles from './card.module.css';
import Image from 'next/image';


export default function Card ({venueName , imgSrc}:{venueName:string,imgSrc:string}){
    return (
        <div className="w-1/5 h-[300px] rounded-lg shadow-xl">
            <div className="w-full h-[70%] relative rounded-t-lg">
                 <Image src={imgSrc}
                alt = 'Product Picture'
                fill = {true}
                className='object-cover rounded-t-lg'/>

            </div>
           
           <div className="w-full h-[30%] p-[10px]">
            <p className="text-lg font-semibold text-gray-800"> {venueName} </p>
           </div>
        </div>
    );
}