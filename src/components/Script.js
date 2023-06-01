import React from 'react';
import {appendScript} from '../utils/appendScript';

export default class Script extends React.Component {
    componentDidMount () {
        appendScript("/js/jquery-3.4.1.min.js");
    }
}