function Home (){

    const onClick= (e) => {
        console.log(e)
    }


    return <div>
        <header>
            <button onClick={onClick}>login</button>
        </header>
    </div>
}

export default Home;