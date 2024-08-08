import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {

    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()
    const searchHandler = ()=>{
        navigate('/search?keyword='+keyword)
    }
    return (
        <div className='input-group '>
            <input
                type="text"
                id="search_field"
                onChange={(event) => setKeyword(event.target.value)}
                className="form-control rounded"
                onBlur={searchHandler}
                placeholder="Enter Product Name ..."
            />
            <div className="input-group-append ">
                <button onClick={searchHandler} id="search_btn" className="btn btn-light ml-2 rounded">
                    <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}


export default Search