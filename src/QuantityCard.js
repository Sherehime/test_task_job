function QuantityCard(props) {
    return <>
        <div>Выберите количество карточек для игры</div>
        <div className='quantity-cards-button'>
            <button onClick={() => props.onInitGame(2)}>{ 4 }</button>
            <br/>
            <button onClick={() => props.onInitGame(4)}>{8}</button>
            <br/>
            <button onClick={() => props.onInitGame(8)}>{16}</button>

        </div>
    </>;
}

export default QuantityCard;
