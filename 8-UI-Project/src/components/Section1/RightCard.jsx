import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none'></div>
            <RightCardContent color={props.color} id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard