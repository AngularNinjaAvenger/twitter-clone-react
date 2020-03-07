import React, { Component } from 'react'
import { FaHamburger } from 'react-icons/fa'
import {MdMenu} from 'react-icons/all'
    // <TiThMenu color={"red"}/>
import SearchPage from './component/SeachPage'
export default class app extends Component {
    render() {
        return (
            <div>
                <SearchPage />
            </div>
        )
    }
}
