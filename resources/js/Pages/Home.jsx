function Home({name}) {
    return (
        <>
            <h1 className="text-3xl font-bold text-center">Hello {name} </h1>
        </> 
    );
}

Home.layout = page => <Layout children={page} />

export default Home;