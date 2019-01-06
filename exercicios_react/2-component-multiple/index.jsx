import React from 'react'
import ReactDOM from 'react-dom'
import Default, {Primeiro, Segundo} from './component'

ReactDOM.render(
    <div>
        <Default/>
        <Primeiro/>
        <Segundo/>
    </div>
    , document.getElementById('app'))

