import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {list, getStorage, ref, getDownloadURL} from "firebase/storage"; // import для firebase


//components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

//pages
import Main from "./pages/main/Main";
import Catalog from "./pages/catalog/Catalog";
import Info from "./pages/info/Info";
import Delivery from "./pages/delivery/Delivery";
import Contacts from "./pages/contacts/Contacts";
import Admin from "./pages/admin/Admin";
import axios from "axios";



function App() {
    //state каталог для товаров
    const [catalogItem, setCatalogItem] = useState([])
    const [url, setUrl] = useState([])

// вытягиваем url с картинок из firebase storage

    // const displayImage = async (item) => {
    //     await getDownloadURL(item)
    //         .then(getUrl => {
    //             const urlArr = []
    //             urlArr.push(getUrl)
    //             console.log(urlArr)
    //         })
    //
    // }

    function displayImage(item){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve( getDownloadURL(item))
            }, 500)
        })
    }


// получаем элементы из firebase storage и вызываем вфнкцию displayImage
    useEffect(async function getImageStorage() {
        const storage = getStorage()
        const listRef = ref(storage, 'images/')
        await list(listRef)
            .then(response => {
                const urlObj = response.items
                for (let i = 0; i < urlObj.length; i++) {
                    displayImage(urlObj[i])
                        .then(response => {
                            const urlArr = response
                            console.log(urlArr)
                        })

                }
            })
    }, [setUrl])

    //useEffect + axios запрос с серваре
    useEffect(async function catalogHandler() {
        await axios.get('https://kutec-bd-default-rtdb.firebaseio.com/base.json')
            .then(response => {
                if (!response.data) {
                    return []
                }
                const catalogs = response.data
                const arr = []
                Object.entries(catalogs).forEach((item, id) => {
                    const newCatalog = {
                        id,
                        ...item[1]
                    }
                    arr.push(newCatalog)
                })
                setCatalogItem(arr)

            })
    }, [])

    // <Route exact path="/" component={Catalog}/>
    // <Route path="/catalog" component={Service}  catalogItem={catalogItem} />
    // <Route path="/info" component={Info} />
    // <Route path="/delivery" component={Delivery} />
    // <Route path="/contacts" component={Contacts} />
    // <Route path="/admin" component={Admin} />

    return (
        <div className="App">
            <Router>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/"><Main catalogItem={catalogItem} url={url}/> </Route>
                        <Route exact path="/services"><Catalog/> </Route>
                        <Route exact path="/info"><Info catalogItem={catalogItem} url={url}/> </Route>
                        <Route exact path="/delivery"><Delivery/> </Route>
                        <Route exact path="/contacts"><Contacts/> </Route>
                        <Route exact path="/admin"><Admin/> </Route>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
