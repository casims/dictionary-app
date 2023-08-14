import SearchBar from "../components/SearchBar";

function PageMain() {

    useEffect(() => {
        document.title = `${APP_TITLE}`;
      }, []);

    return(
        <section>
            <SearchBar/>
        </section>
    );
};

export default PageMain;