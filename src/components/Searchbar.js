import React, { useState, useContext } from 'react';

// Context
import ShowContext from '../context/shows/ShowsContext';
import AlertContext from '../context/alerts/AlertContext';

// Components
import Alert from './Alert';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const showsContext = useContext(ShowContext);
    // error show below line
    const { searchShows } = showsContext;

    const { alert, setAlert } = useContext(AlertContext);

    const onSearchHandler = (e) => {
        e.preventDefault();
        console.log('onSearch btn - ', searchTerm);

        if (searchTerm === "") {
            setAlert('Plase enter something', 'danger');
        } else {
            searchShows(searchTerm);
        }
    };
    console.log("alert = ", alert);

    return (
        <div className='searchbar'>

            {
                alert ? <Alert message={alert.message} type={alert.type} /> : null
            }

            <form className='searchbar__form'>
                <input
                    type='text' placeholder='Search Show' value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button className='btn btn-block' onClick={onSearchHandler}>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;